export function registerTheme(
  themeName,
  app,
  routes,
  store,
  config,
  ssrContext
) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const themeEntryPoint = require('theme/index.js');
  if (themeEntryPoint != null && themeEntryPoint.initTheme) {
    themeEntryPoint.initTheme(app, routes, store, config, ssrContext); // register theme
  } else {
    throw new Error('Wrong theme name: ' + themeName);
  }
}
