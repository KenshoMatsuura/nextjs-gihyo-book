const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin'); // インポート
const path = require('path');

module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss',
    '@chromatic-com/storybook',
  ],

  staticDirs: ['public'],

  babel: async (options) => ({
    ...options,
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-private-methods',
      '@babel/plugin-proposal-private-property-in-object',
    ],
    presets: [...options.presets],
  }),

  webpackFinal: async (config) => {
    config.resolve.plugins = [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      }),
    ];

    return config;
  },

  typescript: { reactDocgen: false },

  framework: {
    name: '@storybook/nextjs',
    options: {},
  },

  core: {
    builder: '@storybook/builder-webpack5',
  },

  docs: {},
};
