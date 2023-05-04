<script setup lang="ts">
// @ts-ignore
// import pingWidget from '../dist/ping-widget.js';
import pingWidget from '../lib/main';
import HelloPing from '../lib/components/HelloPing';
import TestCpp from '../lib/components/TestCpp';
console.log(HelloPing, TestCpp);
</script>

<template>
  <div>
    <hello-ping :msg="pingWidget?.version" />
    <test-cpp msg="this is app" />
    <h1>{{ HelloPing.name }}</h1>
  </div>
</template>

<style scoped></style>
