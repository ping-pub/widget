<script setup lang="ts">
import { onMounted, ref } from 'vue';
import pingWidget from '../lib/main';

const sender = 'evmos1a22spreqspsh9s3v67ctsuzaf9n4kalllspvr5';
const endpoint = 'https://evmos-api.polkachu.com';
const chainId = 'stargaze-1';
const hdPath = "m/44'/118/0'/0/0";
const chain_name = 'evmos'

const params = JSON.stringify({
    proposal_id: '1',
    validator_address: 'evmosvaloper1a22spreqspsh9s3v67ctsuzaf9n4kallj7wuzf',
    chain_name,
});

const types = [
    'send',
    'delegate',
    'vote',
    'redelegate',
    'unbond',
    'transfer',
    'deposit',
    'withdraw',
    'withdraw_commission',
];
const toOpen = ref('send');

const theme = ref('light');
const switchTheme = () => {
    if (theme.value === 'light') {
        theme.value = 'dark';
        document.documentElement.classList.add('dark');
    } else {
        theme.value = 'light';
        document.documentElement.classList.remove('dark');
    }
    document.documentElement.setAttribute('data-theme', theme.value);
};

onMounted(() => {
    document.documentElement.classList.add('light');
    document.documentElement.setAttribute('data-theme', 'light');
});
const walletStateChange = (res: any) => {
   console.log(res, 'resres');
};
</script>

<template>
    <div class="bg-gray-50 dark:bg-base-100 dark:text-white min-h-[100vh]">
        Ping Widget Version: {{ pingWidget?.version }}

        <div class="btn btn-sm normal-case" @click="switchTheme()">
            Theme: {{ theme }}
        </div>

        <div>&nbsp;</div>
        <ping-connect-wallet
            :chain-id="chainId"
            :hd-path="hdPath"
            @change="walletStateChange"
        />

        <select v-model="toOpen">
            <option v-for="i in types">{{ i }}</option>
        </select>

        <br />

        <label :for="toOpen" class="btn">{{ toOpen }}</label>
        <ping-tx-dialog
            :type="toOpen"
            :sender="sender"
            :endpoint="endpoint"
            :params="params"
        ></ping-tx-dialog>

        <br />
        // example:<br />
        <label for="withdraw" class="btn">Withdraw</label>
        <ping-tx-dialog
            type="withdraw"
            :sender="sender"
            :endpoint="endpoint"
            :params="params"
        ></ping-tx-dialog>

        <label for="vote" class="btn">Vote</label>
        <ping-tx-dialog
            type="vote"
            :sender="sender"
            :endpoint="endpoint"
            :params="params"
        ></ping-tx-dialog>

        <label for="PingTokenConvert" class="btn">Token Convert</label>
        <ping-token-convert
            :chain-name="chain_name"
            :endpoint="endpoint"
            :params="params"
        ></ping-token-convert>
    </div>
</template>

<style scoped></style>
