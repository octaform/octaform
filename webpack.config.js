const ENV = (JSON.stringify(process.env.NODE_ENV || 'dev'));
const Package = require('./package.json');
const path = require('path');
const webpack = require('webpack');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    demo: './demo/vanilla/index.js',
    bundle: './src/index.js',
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
  externals: {
    window: 'window',
    document: 'document',
  },
  devServer: {
    contentBase: './src',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './demo/vanilla/index.html',
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.CommonsChunkPlugin({
      names: [
        'bundle',
      ],
    }),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: false,
    }),
    new webpack.ProvidePlugin({}),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(Package.version),
      'process.env.NODE_ENV': ENV,
    }),
  ],
};
