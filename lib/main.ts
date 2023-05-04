// @ts-nocheck
import './main.css';
// import { createApp, h } from 'vue';
// import wrapper from 'vue3-webcomponent-wrapper';
// import HelloPing from './components/HelloPing/index.vue';
// import TestVue3 from './components/Test/index.vue';
// const webComponent = wrapper(HelloPing, createApp, h);
// window.customElements.define('hello-ping', webComponent);

// export default {
//   version: '0.0.1',
//   components: {
//     HelloPing,
//     TestVue,
//   },
// };

import { App } from 'vue';
import * as components from './components';

export default {
  version: '0.0.21',
  name: 'PingWidget',
  install: (app: App) => {
    Object.keys(components).map((key) => {
      const component = components[key];
      if (component.install) {
        app.use(component);
      }
    });
    return app;
  },
};
export * from './components';
