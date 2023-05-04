import { createApp } from 'vue';
import pingWidget from 'ping-widget';
import App from './App.vue';
const app = createApp(App);
// 全局引入 也支持组件按需引入
app.use(pingWidget).mount('#app');
