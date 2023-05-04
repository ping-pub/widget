// @ts-nocheck
import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), cssInjectedByJsPlugin()],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'PingWidgetTest',
      fileName: 'ping-widget-test',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        manualChunks: undefined,
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
