<script setup lang="ts">
import { ref, computed } from 'vue';

import {
    getAccount,
    getBalance,
    getBalanceMetadata,
    getLatestBlock,
    getStakingParam,
    getTxByHash,
} from '../../utils/http';
import { Coin, CoinMetadata } from '../../utils/type';
import { WalletName, readWallet } from '../../../lib/wallet/Wallet';
import { UniClient } from '../../../lib/wallet/UniClient';

// cosmos sdk messages
import Delegate from './messages/Delegate.vue';
import Deposit from './messages/Deposit.vue';
import Redelegate from './messages/Redelegate.vue';
import Send from './messages/Send.vue';
import Transfer from './messages/Transfer.vue';
import Unbond from './messages/Unbond.vue';
import Vote from './messages/Vote.vue';
import Withdraw from './messages/Withdraw.vue';
import WithdrawCommission from './messages/WithdrawCommission.vue';

// wasm msgs
import StoreCode from './wasm/StoreCode.vue';
import ExecuteContract from './wasm/ExecuteContract.vue';
import InstantiateContract from './wasm/InstantiateContract.vue';

const props = defineProps({
    type: String,
    endpoint: { type: String, required: true },
    sender: { type: String, required: true },
    hdPath: String,
    params: String,
});

const msgType = computed(() => {
    switch (props.type?.toLowerCase()) {
        case 'send':
            return Send;
        case 'delegate':
            return Delegate;
        case 'withdraw':
            return Withdraw;
        case 'withdraw_commission':
            return WithdrawCommission;
        case 'redelegate':
            return Redelegate;
        case 'transfer':
            return Transfer;
        case 'unbond':
            return Unbond;
        case 'vote':
            return Vote;
        case 'deposit':
            return Deposit;
        case 'wasm_store_code':
            return StoreCode;
        case 'wasm_execute_contract':
            return ExecuteContract;
        case 'wasm_instantiate_contract':
            return InstantiateContract;
        default:
            return Send;
    }
});

const advance = ref(false);
const sending = ref(false);
const balance = ref([] as Coin[]);
const metadatas = ref({} as Record<string, CoinMetadata>);
const emit = defineEmits(['submited', 'confirmed']);

// functional variable
const p = JSON.parse(props.params || '{}');
const view = ref('input'); // input, submitting
const open = ref(false);
const error = ref('');

// input field
const msgBox = ref({
    msgs: [],
    isValid: { ok: false, error: '' },
    initial: function () {},
});
const feeAmount = ref(Number(p.fees?.amount || 2000));
const feeDenom = ref('');
const gasInfo = ref(200000);
const memo = ref(props.type === 'send' ? '' : 'Ping.pub');
const chainId = ref('cosmoshub-4');

async function initData() {
    if (open.value && props.endpoint && props.sender) {
        view.value = 'input';
        try {
            getBalance(props.endpoint, props.sender).then((x) => {
                balance.value = x.balances;
                x.balances?.forEach((coin) => {
                    // only load for native tokens
                    if (coin.denom.length < 12)
                        getBalanceMetadata(props.endpoint, coin.denom).then(
                            (meta) => {
                                metadatas.value[coin.denom] = meta.metadata;
                            }
                        );
                });
            });
            getLatestBlock(props.endpoint).then((x) => {
                chainId.value = x.block.header.chain_id;
            });
            getStakingParam(props.endpoint).then((res) => {
                feeDenom.value = res.params.bond_denom;
            });
            // Every sub component should have a initial function
            if (msgBox.value.initial) msgBox.value.initial();
        } catch (err) {
            error.value = err;
            console.error(err);
        }

        // account.value = await getAccount(props.endpoint, props.sender).then(x => x.account);
        sending.value = false;
    }
}
async function sendTx() {
    try {
        if (!props.sender) throw new Error('Sender should not be empty!');
        if (!props.endpoint) throw new Error('Endpoint is empty');
        if (!msgBox.value.isValid.ok)
            throw new Error(msgBox.value.isValid.error);

        sending.value = true; // disable sending btn

        const acc = await getAccount(props.endpoint, props.sender);

        const messages = msgBox.value.msgs;

        const tx = {
            chainId: chainId.value,
            signerAddress: props.sender,
            messages,
            fee: {
                gas: String(gasInfo.value),
                amount: [
                    { amount: String(feeAmount.value), denom: feeDenom.value },
                ],
            },
            memo: memo.value,
            signerData: {
                accountNumber: Number(acc.account.account_number),
                sequence: Number(acc.account.sequence),
                chainId: chainId.value,
            },
        };
        // console.log('tx:', tx);

        const current = readWallet(props.hdPath);
        const wallet = current ? current.wallet : WalletName.Keplr;
        const client = new UniClient(wallet, {
            chainId: chainId.value,
            hdPath: current.hdPath,
        });

        // const gas = await client.simulate(props.endpoint, messages, "", 1)
        // console.log(gas)

        const txRaw = await client.sign(tx);
        const response = await client.broadcastTx(props.endpoint, txRaw);
        // show submitting view
        showResult(response.tx_response.txhash);

        emit('submited', {
            hash: response.tx_response.txhash,
            eventType: props.type,
        });
    } catch (e) {
        sending.value = false;
        error.value = e;
        setTimeout(() => (error.value = ''), 10000);
    }
}

function showTitle() {
    return (props.type || 'Sending Transaction').replace(/\_/g, ' ');
}

const delay = ref(0);
const step = ref(0);
const msg = ref('');
const sleep = 6000;

function showResult(hash: string) {
    view.value = 'submitting';
    delay.value = 1;
    step.value = 20;
    error.value = '';
    msg.value = 'Proccessing...';
    setTimeout(() => {
        fetchTx(hash);
    }, sleep);
}

function fetchTx(tx: string) {
    delay.value += 1;
    step.value += 20;
    getTxByHash(props.endpoint, tx)
        .then((res) => {
            step.value = 100;
            if (res.tx_response.code > 0) {
                error.value = res.tx_response.raw_log;
            } else {
                msg.value = `Congratulations! ${showTitle()} completed successfully.`;
                emit('confirmed', { hash: tx, eventType: props.type });
            }
        })
        .catch(() => {
            if (delay.value < 5) {
                setTimeout(() => fetchTx(tx), sleep);
            } else {
                error.value = 'Timeout';
            }
        });
}
</script>
<template>
    <div class="text-gray-600">
        <!-- Put this part before </body> tag -->
        <input
            v-model="open"
            type="checkbox"
            :id="type"
            class="modal-toggle"
            @change="initData()"
        />
        <label :for="type" class="modal cursor-pointer">
            <label class="modal-box relative p-5" for="">
                <label
                    :for="type"
                    class="btn btn-sm btn-circle absolute right-4 top-4"
                    >✕</label
                >
                <h3 class="text-lg font-bold capitalize dark:text-gray-300">
                    {{ showTitle() }}
                </h3>

                <div v-if="view === 'input'">
                    <component
                        :is="msgType"
                        ref="msgBox"
                        :endpoint="endpoint"
                        :sender="sender"
                        :balances="balance"
                        :metadata="metadatas"
                        :params="params"
                    />
                    <form class="space-y-6" action="#" method="POST">
                        <div :class="advance ? '' : 'hidden'">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Fees</span>
                                </label>
                                <label class="input-group flex items-center">
                                    <input
                                        v-model="feeAmount"
                                        type="text"
                                        placeholder="0.001"
                                        class="input border border-gray-300 dark:border-gray-600 flex-1 w-0 dark:text-gray-300"
                                    />
                                    <select
                                        v-model="feeDenom"
                                        class="select input border border-gray-300 dark:border-gray-600 w-[200px]"
                                    >
                                        <option disabled selected>
                                            Select Fee Token
                                        </option>
                                        <option v-for="t in balance">
                                            {{ t.denom }}
                                        </option>
                                    </select>
                                </label>
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Gas</span>
                                </label>
                                <input
                                    v-model="gasInfo"
                                    type="number"
                                    placeholder="2000000"
                                    class="input border border-gray-300 dark:border-gray-600 dark:text-gray-300"
                                />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Memo</span>
                                </label>
                                <input
                                    v-model="memo"
                                    type="text"
                                    placeholder="Memo"
                                    class="input border border-gray-300 dark:border-gray-600 dark:text-gray-300"
                                />
                            </div>
                        </div>
                    </form>

                    <div v-if="error" class="mt-5 alert alert-error shadow-lg">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="stroke-current flex-shrink-0 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>{{ error }}.</span>
                        </div>
                    </div>

                    <div class="modal-action flex justify-between items-center">
                        <div class="flex items-center cursor-pointer">
                            <input
                                v-model="advance"
                                type="checkbox"
                                :id="`${type}-advance`"
                                class="checkbox checkbox-sm checkbox-primary mr-2"
                            /><label
                                :for="`${type}-advance`"
                                class="cursor-pointer dark:text-gray-400"
                                >Advance</label
                            >
                        </div>
                        <label class="btn" @click="sendTx()">Send</label>
                    </div>
                </div>

                <div v-if="view === 'submitting'">
                    <div class="my-10">
                        <div v-if="error" class="my-5 text-center text-red-500">
                            {{ error }}
                        </div>
                        <div
                            v-else
                            class="my-5 text-center text-lg text-green-500"
                        >
                            {{ msg }}
                        </div>
                        <div
                            class="overflow-hidden h-5 mb-2 text-xs flex rounded bg-green-100"
                        >
                            <div
                                :style="`width: ${step}%`"
                                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-400"
                            ></div>
                        </div>
                        <div class="flex items-center justify-between">
                            <div>
                                <span
                                    class="text-xs font-semibold inline-block py-1 px-2 rounded text-gray-600 dark:text-white"
                                >
                                    Submitted
                                </span>
                            </div>
                            <div class="text-right">
                                <span
                                    class="text-xs font-semibold inline-block text-gray-600 dark:text-white"
                                >
                                    {{ step }}%
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </label>
        </label>
    </div>
</template>
<script lang="ts">
export default {
    name: 'TxDialog',
};
</script>
