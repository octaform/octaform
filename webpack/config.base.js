const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const path = require('path');
const Package = require('../package.json');
const npmConfig = require('./config.npm');

module.exports = {
  entry: {
    octaform: Package.main,
  },
  resolve: {
    alias: {
      // Root Aliases
      '@': path.resolve('./src'),
      '@actions': path.resolve('./src/actions'),
      '@constants': path.resolve('./src/constants'),
      '@entries': path.resolve('./src/entries'),
      '@models': path.resolve('./src/models'),
      '@rules': path.resolve('./src/rules'),
      '@states': path.resolve('./src/states'),
      '@utils': path.resolve('./src/utils'),
    },
    modules: ['./node_modules'],
    extensions: ['.js'],
  },
  output: {
    library: Package.name,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    filename: '[name].min.js',
    path: path.resolve('./dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin(['./LICENSE', './README.md']),
    new GenerateJsonPlugin('package.json', npmConfig.package),
    new webpack.DefinePlugin({
      REPO_URL: JSON.stringify(Package.repository.url),
      VERSION: JSON.stringify(Package.version),
    }),
  ],
};
