const webpack = require('webpack');
const merge = require('webpack-merge');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');
const webpackBase = require('./config.base');
const banner = require('./banner');

module.exports = merge(webpackBase, {
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new UnminifiedWebpackPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      test: /\.js$/,
      exclude: /node_modules/,
      sourceMap: false,
      minimize: true,
      extractComments: true,
      mangle: false,
      compress: {
        booleans: true,
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        drop_console: true,
        drop_debugger: true,
        toplevel: true,
        pure_getters: true,
      },
      output: {
        comments: false
      }
    }),
    banner()
  ],
});
