<template>
  <div class="font-bold text-red-400 text-4xl">Hello Ping {{ msg }}</div>
  <div>
    <button class="btn">Button</button>
  </div>

  <div>
    <!-- The button to open modal -->
    <label for="my-modal" class="btn">open modal</label>

    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="my-modal" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
        <p class="py-4">
          You've been selected for a chance to get one year of subscription to
          use Wikipedia for free!
        </p>
        <div class="modal-action">
          <label for="my-modal" class="btn">Yay!</label>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// @ts-nocheck
defineProps({
  msg: String,
});
</script>
<script lang="ts">
import type { ExtractPropTypes } from 'vue';
import { defineComponent } from 'Vue';

const helloPingProps = () => ({
  msg: 'This is Test cpp',
});
export type HelloPingProps = Partial<ExtractPropTypes<typeof helloPingProps>>;
export default defineComponent<HelloPingProps>({
  name: 'HelloPing',
  prop: helloPingProps(),
  // setup(props, { slots, emit, expose }) {},
});
</script>
