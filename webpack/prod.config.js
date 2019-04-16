const webpack = require('webpack');
const merge = require('webpack-merge');
const npmConfig = require('./npm.config');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const webpackBase = require('./base.config');
const banner = require('./banner');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(webpackBase, {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      test: /\.js$/,
      exclude: /node_modules/,
      sourceMap: false,
      minimize: true,
      extractComments: true,
      ecma: 5,
      warnings: false,
      compress: {
        drop_console: true,
        drop_debugger: true,
        toplevel: true,
        pure_getters: true,
        warnings: false,
      },
      mangle: false,
      ie8: true,
      safari10: true,
      toplevel: true,
    }),
    new webpack.BannerPlugin({
      banner: banner(),
      raw: true,
    }),
    new GenerateJsonPlugin('package.json', npmConfig.package),
    new CopyWebpackPlugin([
      './LICENSE',
      './README.md',
    ]),
  ],
});
