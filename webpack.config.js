const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const VENDORS = [];

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    demo: './demo/index.js',
    bundle: './src/index.js',
    vendor: VENDORS,
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract([
        'css-loader',
        'sass-loader',
      ]),
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
      ],
    }, {
      test: /\.js$/,
      use: [
        'babel-loader',
        'eslint-loader',
      ],
      exclude: /node_modules/,
    }, {
      test: /\.(jpg|png|svg)$/,
      loader: 'url-loader',
      options: {
        limit: 25000,
      },
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './demo/index.html',
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.CommonsChunkPlugin({
      names: [
        'vendor',
        'manifest',
      ],
    }),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: false,
    }),
  ],
};
