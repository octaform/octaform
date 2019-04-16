const Package = require('../package.json');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    library: Package.alias,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    filename: '[name].js',
    path: path.resolve('./dist'),
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['index'],
    }),
  ],
};
