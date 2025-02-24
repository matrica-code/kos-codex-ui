import type { StorybookConfig } from "@storybook/react-webpack5";
import webpack from "webpack";

import * as dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

function getKosEnv() {
  const kosKeys = Object.keys(process.env).filter((key) =>
    key.startsWith("KOS_")
  );
  return kosKeys;
}

const config: StorybookConfig = {
  stories: ["../src/**/*.(stories.@(js|jsx|ts|tsx|mdx)|mdx)"],
  addons: [
    "@nx/react/plugins/storybook",
    { name: "@storybook/addon-docs", options: { transcludeMarkdown: true } },
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config: any) => {
    const finalConfig = {
      ...config,
      plugins: [
        ...config.plugins,
        new webpack.EnvironmentPlugin(["NODE_ENV", ...getKosEnv()]),
      ],
    };

    return finalConfig;
  },
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
