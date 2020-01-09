const merge = require('webpack-merge');
const jestBaseConfig = require('./jest.base');

module.exports = merge(jestBaseConfig, {
  verbose: true,
  coverageDirectory: 'test/coverage/',
  coverageReporters: ['html'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js', '!**/node_modules/**'],
});
