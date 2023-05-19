import { fromBase64, fromBech32, toHex, toBase64 } from "@cosmjs/encoding";
import { AminoTypes, SignerData, StdFee, createDefaultAminoConverters, } from '@cosmjs/stargate'
import {
    EncodeObject,
    encodePubkey,
    GeneratedType,
    isOfflineDirectSigner,
    makeAuthInfoBytes,
    makeSignDoc,
    OfflineSigner, OfflineDirectSigner,
    Registry,
    TxBodyEncodeObject,
} from '@cosmjs/proto-signing'
import { sha256, stringToPath } from '@cosmjs/crypto'
import { encodeSecp256k1Pubkey, makeSignDoc as makeSignDocAmino } from "@cosmjs/amino";
import {
    MsgDelegateEncodeObject,
    MsgSendEncodeObject,
    MsgTransferEncodeObject,
    MsgUndelegateEncodeObject,
    MsgWithdrawDelegatorRewardEncodeObject,
    defaultRegistryTypes
} from "@cosmjs/stargate";
// ledger
import TransportWebBLE from '@ledgerhq/hw-transport-web-ble'
import TransportWebUSB from '@ledgerhq/hw-transport-webusb'
import { LedgerSigner } from '@cosmjs/ledger-amino'
import { ethToEvmos } from '@tharsis/address-converter'
import { SignMode } from "cosmjs-types/cosmos/tx/signing/v1beta1/signing";
import { TxRaw, SignDoc } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { Transaction } from "../utils/type";
import { Any } from "cosmjs-types/google/protobuf/any";
import { PubKey } from 'cosmjs-types/cosmos/crypto/secp256k1/keys'
import { MessageTypeProperty, SignTypedDataVersion, TypedDataUtils } from "@metamask/eth-sig-util";
import { Chain, createTxRawEIP712, signatureToWeb3Extension } from "@tharsis/transactions";
import { createEIP712, generateFee, generateMessageWithMultipleTransactions, generateTypes } from "@tharsis/eip712";
import { defaultMessageAdapter } from "./EthermintMessageAdapter";
import { keccak256 } from '@cosmjs/crypto'
import Eth from "@ledgerhq/hw-app-eth";
import EthereumLedgerSigner from "./EthereumLedgerSigner";
import { createTransactionWithMultipleMessages } from "@tharsis/proto/dist/transaction/transaction";

export enum WalletName {
    Keplr = "Keplr",
    Ledger = "LedgerUSB",
    LedgerBLE = "LedgerBLE",
    Metamask = "Metemask",
    // None Signning
    Address = "Address",
    NameService = "Nameservice",
}

export interface ConnectedWallet {
    wallet: WalletName,
    cosmosAddress: string
    hdPath?: string
}

export interface Account {
    address: string,
    algo: string,
    pubkey: Uint8Array,
}

export interface WalletArgument {
    chainId?: string,
    hdPath?: string,
    address?: string,
    name?: string,
    transport?: string
}

export interface AbstractWallet {
    name: WalletName
    /**
     * The the accounts from the wallet (addresses)
     */
    getAccounts(): Promise<Account[]>
    supportCoinType(coinType?: string): Promise<boolean>
    sign(transaction: Transaction): Promise<any>
}

function extractChainId(chainId: string) {
    const start = chainId.indexOf('_')
    const end = chainId.indexOf('-')
    if (end > start && start > 0) {
      return Number(chainId.substring(start + 1, end))
    }
    return 0
}

const DEFAULT_HDPATH = "m/44'/118/0'/0/0";

export function readWallet(hdPath?: string) {
    return JSON.parse(
        localStorage.getItem(hdPath || DEFAULT_HDPATH) || '{}'
    ) as ConnectedWallet
}
export function writeWallet(connected: ConnectedWallet, hdPath?: string) {
    localStorage.setItem(hdPath || DEFAULT_HDPATH, JSON.stringify(connected))
}

export function removeWallet(hdPath?: string) {
    localStorage.removeItem(hdPath || DEFAULT_HDPATH);
}

export function createWallet(name: WalletName, arg: WalletArgument, registry?: Registry): AbstractWallet {
    console.log("wallet arg:", arg)
    const reg = registry || new Registry(defaultRegistryTypes)
    switch (name) {
        case WalletName.Keplr:
            return new KeplerWallet(arg, reg)
        case WalletName.Ledger:
            return new LedgerWallet(arg, reg)
    }
    throw new Error("No wallet created")
}

export class KeplerWallet implements AbstractWallet {
    name: WalletName.Keplr
    chainId: string
    registry: Registry
    conf: WalletArgument
    constructor(arg: WalletArgument, registry: Registry) {
        this.chainId = arg.chainId || "cosmoshub"
        // @ts-ignore
        if (!window.getOfflineSigner || !window.keplr) {
            throw new Error('Please install keplr extension')
        }
        this.registry = registry
        this.conf = arg
    }
    async getAccounts(): Promise<Account[]> {
        // const chainId = 'cosmoshub'
        // @ts-ignore
        await window.keplr.enable(this.chainId)
        // @ts-ignore
        const offlineSigner = window.getOfflineSigner(this.chainId)
        return offlineSigner.getAccounts()
    }
    supportCoinType(coinType?: string | undefined): Promise<boolean> {
        return Promise.resolve(true);
    }
    isEthermint() {
        return this.conf.hdPath && this.conf.hdPath.startsWith("m/44'/60")
    }
    async sign(transaction: Transaction): Promise<any> {
        const accouts = await this.getAccounts()
        const hex = toHex(fromBech32(transaction.signerAddress).data)
        const accountFromSigner = accouts.find((account) => toHex(fromBech32(account.address).data) === hex);
        if (!accountFromSigner) {
            throw new Error("Failed to retrieve account from signer");
        }
        const pubkey = this.isEthermint() ? Any.fromPartial({
            typeUrl: '/ethermint.crypto.v1.ethsecp256k1.PubKey',
            value: PubKey.encode({
                key: accountFromSigner.pubkey,
            }).finish(),
        }) : encodePubkey(encodeSecp256k1Pubkey(accountFromSigner.pubkey));
        const txBodyEncodeObject: TxBodyEncodeObject = {
            typeUrl: "/cosmos.tx.v1beta1.TxBody",
            value: {
                messages: transaction.messages,
                memo: transaction.memo,
            },
        };
        const txBodyBytes = this.registry.encode(txBodyEncodeObject);
        const gasLimit = Number(transaction.fee.gas);
        const authInfoBytes = makeAuthInfoBytes(
            [{ pubkey, sequence: transaction.signerData.sequence }],
            transaction.fee.amount,
            gasLimit,
            transaction.fee.granter,
            transaction.fee.payer,
        );
        const signDoc = makeSignDoc(txBodyBytes, authInfoBytes, transaction.chainId, transaction.signerData.accountNumber);

        // @ts-ignore
        const offlineSigner = window.getOfflineSigner(this.chainId)
        return await offlineSigner.signDirect(transaction.signerAddress, signDoc);
    }
}

export class LedgerWallet implements AbstractWallet {
    name: WalletName.Ledger
    transport: string
    hdPath: string
    registry: Registry
    aminoTypes = new AminoTypes(createDefaultAminoConverters())
    conf: WalletArgument
    app: Eth
    constructor(arg: WalletArgument, registry: Registry) {
        this.transport = arg.transport || 'usb'
        this.hdPath = arg.hdPath || ''
        this.registry = registry
        this.conf = arg
    }

    async getSigner() {
        const transport = this.transport === 'usb' ? await TransportWebUSB.create() : await TransportWebBLE.create()
        // extract Cointype from from HDPath
        const hdPath = stringToPath(this.hdPath)
        const coinType = Number(hdPath[1])
        let ledgerAppName = 'Cosmos'
        switch (coinType) {
            case 60:
               return EthereumLedgerSigner.create(this.transport, hdPath) // 'Ethereum'
            case 529:
                ledgerAppName = 'Secret' // 'Secret'
                break
            case 852:
                ledgerAppName = 'Desmos' // 'Desmos'
                break
            case 330:
                ledgerAppName = 'Terra' // 'Terra'
                break
            case 118:
            default:
        }
        // const path = stringToPath(this.hdPath)
        return new LedgerSigner(transport, { ledgerAppName })
    }

    async getAccounts(): Promise<Account[]> {
        const signer = await this.getSigner();
        const account = (await signer.getAccounts()).map(x => ({
            address: x.address,
            algo: x.algo,
            pubkey: x.pubkey,
        }))
        return account
    }
    supportCoinType(coinType?: string | undefined): Promise<boolean> {
        return Promise.resolve(true);
    }
    isEthermint() {
        return this.conf.hdPath && this.conf.hdPath.startsWith("m/44'/60")
    }

    async sign(tx: Transaction): Promise<TxRaw | Uint8Array> {
        if (this.isEthermint()) {
            return this.sign712(tx)
        }
        return this.signAmino(tx)
    }
    goEthAddress(address) {
        return `0x${toHex(fromBech32(address).data)}`
    }

    async sign712(tx: Transaction): Promise<Uint8Array> {
        const chain: Chain = {
            chainId: extractChainId(tx.signerData.chainId),
            cosmosChainId: tx.chainId,
        }

        const signer = await this.getSigner()
        const ethAddr = this.goEthAddress(tx.signerAddress)

        // this.signer.prefix = fromBech32(signerAddress).prefix
        const account = await signer.getAccounts()

        const acc = account.find(x => x.address === ethAddr)
        if (!acc) {
            throw new Error('The signer address dose not exsits in Ledger!')
        }
        const sender = {
            accountAddress: tx.signerAddress,
            sequence: tx.signerData.sequence,
            accountNumber: tx.signerData.accountNumber,
            pubkey: toBase64(account[0].pubkey),
        }

        const fees = generateFee(tx.fee.amount[0].amount, tx.fee.amount[0].denom, tx.fee.gas, tx.signerAddress)

        const msgs = tx.messages.map(x => this.aminoTypes.toAmino(x))
        const toSignTx = generateMessageWithMultipleTransactions(
            sender.accountNumber.toString(),
            sender.sequence.toString(),
            tx.signerData.chainId,
            tx.memo,
            fees,
            msgs,
        )

        const types = generateTypes(defaultMessageAdapter[tx.messages[0].typeUrl].getTypes())
        const eip = createEIP712(types, chain.chainId, toSignTx)

        // @ts-ignore
        const sig = await this.getSigner().sign712(eip)

        const rawTx = this.makeRawTxEvmos(sender, tx.messages, tx.memo, tx.fee, sig, chain)
        return rawTx
    }

    makeRawTxEvmos(sender, messages, memo, fee, signature, chain): Uint8Array {
        /// evmos style
        /// *
        const protoMsgs = messages.map(x => {
          const adapter = defaultMessageAdapter[x.typeUrl]
          return adapter.toProto(x)
        })
      
        const evmos = createTransactionWithMultipleMessages(
          protoMsgs,
          memo,
          fee.amount[0].amount,
          fee.amount[0].denom,
          Number(fee.gas),
          'ethsecp256',
          sender.pubkey,
          sender.sequence,
          sender.accountNumber,
          chain.cosmosChainId,
        )
      
        const extension = signatureToWeb3Extension(chain, sender, signature)
      
        // Create the txRaw
        const prototx = createTxRawEIP712(evmos.legacyAmino.body, evmos.legacyAmino.authInfo, extension)
        return prototx.message.serializeBinary()
        /// end of EVMOS style */
      }
      

    async signAmino(tx: Transaction): Promise<TxRaw> {
        const signer = await this.getSigner();
        // assert(!isOfflineDirectSigner(signer));
        const signerAddress = tx.signerAddress

        const accountFromSigner = (await signer.getAccounts()).find(
            (account) => account.address === signerAddress,
        );
        if (!accountFromSigner) {
            throw new Error("Failed to retrieve account from signer");
        }
        const pubkey = encodePubkey(encodeSecp256k1Pubkey(accountFromSigner.pubkey));
        const signMode = SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
        const msgs = tx.messages.map((msg) => this.aminoTypes.toAmino(msg));
        const signDoc = makeSignDocAmino(msgs, tx.fee, tx.chainId, tx.memo, tx.signerData.accountNumber, tx.signerData.sequence);
        const { signature, signed } = await signer.signAmino(signerAddress, signDoc);
        const signedTxBody = {
            messages: signed.msgs.map((msg) => this.aminoTypes.fromAmino(msg)),
            memo: signed.memo,
        };
        const signedTxBodyEncodeObject: TxBodyEncodeObject = {
            typeUrl: "/cosmos.tx.v1beta1.TxBody",
            value: signedTxBody,
        };
        const signedTxBodyBytes = this.registry.encode(signedTxBodyEncodeObject);
        const signedGasLimit = Number(signed.fee.gas);
        const signedSequence = Number(signed.sequence);
        const signedAuthInfoBytes = makeAuthInfoBytes(
            [{ pubkey, sequence: signedSequence }],
            signed.fee.amount,
            signedGasLimit,
            signed.fee.granter,
            signed.fee.payer,
            signMode,
        );
        return TxRaw.fromPartial({
            bodyBytes: signedTxBodyBytes,
            authInfoBytes: signedAuthInfoBytes,
            signatures: [fromBase64(signature.signature)],
        });
    }

}

