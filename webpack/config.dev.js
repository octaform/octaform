const CircularDependencyPlugin = require('circular-dependency-plugin');
const merge = require('webpack-merge');
const webpackBase = require('./config.base');

module.exports = merge(webpackBase, {
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.js$/,
      use: [
        'eslint-loader',
      ],
    }],
  },
  plugins: [
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: false,
    }),
  ],
});
