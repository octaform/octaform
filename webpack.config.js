const ENV = (JSON.stringify(process.env.NODE_ENV || 'dev'));
const Package = require('./package.json');
const path = require('path');
const webpack = require('webpack');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const glob = require('glob');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    octaform: './src/index.js',
    validations: glob.sync('./src/validations/*.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [
        'babel-loader',
        'eslint-loader',
      ],
      exclude: /node_modules/,
    }],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['octaform'],
    }),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: false,
    }),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(Package.version),
      'process.env.NODE_ENV': ENV,
    }),
  ],
};
