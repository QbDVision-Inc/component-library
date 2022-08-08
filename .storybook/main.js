module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-dark-mode",
    {
      name: "@storybook/preset-create-react-app",
      options: {
        craOverrides: {
          fileLoaderExcludes: ["less"],
        },
      },
    },
    {
      name: "@storybook/preset-ant-design",
      options: {
        lessOptions: {
          modifyVars: {
            "blue-base": "#1f46a1",
            "btn-default-color": "@blue-base",
            "btn-default-border": "@blue-base",
            "btn-height-base": "38px",
            "border-radius-base": "5px",
            "btn-padding-horizontal-lg": "@padding-md",
            "btn-padding-horizontal-sm": "@padding-md",
          },
        },
      },
    },
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
