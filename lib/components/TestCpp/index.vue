<template>
  <div class="font-bold text-red-400 text-4xl">Hello Ping {{ msg }}</div>
  <div>This is CPP</div>
</template>

<script setup lang="ts">
// @ts-nocheck
defineProps({
  msg: String,
});
</script>
<script lang="ts">
export default {
  name: 'TestCpp',
};
</script>
