import type { App, Plugin } from 'vue';
export const withInstall = <T>(comp: T) => {
  const c = comp as any;
  c.install = function (app: App) {
    app.component(c.displayName || c.name, comp as any);
  };

  return comp as T & Plugin;
};
