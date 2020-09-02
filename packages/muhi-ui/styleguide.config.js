const path = require('path');
const { version, description } = require('./package.json');

module.exports = {
  title: description,
  version,
  webpackConfig: require('./config/webpack.config.js'),
  ignore: [
    '**/__tests__/**',
    '**/src/test.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/*.d.ts',
  ],
};