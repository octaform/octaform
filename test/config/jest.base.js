module.exports = {
  rootDir: '../../',
  testURL: 'http://localhost:3000',
  globals: {
    REPO_URL: 'http://localhost:3000',
    VERSION: '1.0.0',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src$1',
    '^@actions(.*)$': '<rootDir>/src/actions$1',
    '^@constants(.*)$': '<rootDir>/src/constants$1',
    '^@entries(.*)$': '<rootDir>/src/entries$1',
    '^@models(.*)$': '<rootDir>/src/models$1',
    '^@rules(.*)$': '<rootDir>/src/rules$1',
    '^@states(.*)$': '<rootDir>/src/states$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
  },
};
