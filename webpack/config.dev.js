const CircularDependencyPlugin = require('circular-dependency-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const merge = require('webpack-merge');
const webpackBase = require('./config.base');
const banner = require('./banner');

module.exports = merge(webpackBase, {
  devtool: 'inline-source-map',
  plugins: [
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: false,
    }),
    new BundleAnalyzerPlugin(),
    banner(),
  ],
});
