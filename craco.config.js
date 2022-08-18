const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "blue-base": "#1f46a1",
              "btn-default-color": "@blue-base",
              "btn-default-border": "@blue-base",
              "btn-height-base": "38px",
              "border-radius-base": "5px",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
