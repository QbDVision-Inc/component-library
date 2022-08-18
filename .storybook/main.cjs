const {mergeConfig} = require('vite');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  async viteFinal(config, {configType}) {
    // customize the Vite config here
    config.css = {
      preprocessorOptions: {
        less: {
          modifyVars: require('../themeVars.json'),
          javascriptEnabled: true,
        },
      },
    };

    return config;
  },
}
