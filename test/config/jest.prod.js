const merge = require('webpack-merge');
const jestBaseConfig = require('./jest.base');

module.exports = merge(jestBaseConfig, {
  verbose: false,
});
