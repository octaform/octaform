const jestBaseConfig = require('./jest.base');

const config = {
  verbose: true,
  coverageDirectory: 'test/coverage/',
  coverageReporters: ['html'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js', '!**/node_modules/**'],
};

module.exports = Object.assign({}, jestBaseConfig, config);
