const CircularDependencyPlugin = require('circular-dependency-plugin');
const webpackBase = require('./config.base');
const banner = require('./banner');

module.exports = Object.assign({}, webpackBase, {
  devtool: 'inline-source-map',
  plugins: [
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: false,
    }),
    banner(),
  ],
});
