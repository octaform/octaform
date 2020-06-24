const jestBaseConfig = require('./jest.base');

const config = {
  verbose: false,
};

module.exports = Object.assign({}, jestBaseConfig, config);
