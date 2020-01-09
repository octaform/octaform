const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const merge = require('webpack-merge');
const webpackBase = require('./config.base');

module.exports = merge(webpackBase, {
  devtool: 'inline-source-map',
  plugins: [new BundleAnalyzerPlugin()],
});
