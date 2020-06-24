const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const webpackBase = require('./config.base');

module.exports = Object.assign({}, webpackBase, {
  devtool: 'inline-source-map',
  plugins: [new BundleAnalyzerPlugin()],
});
