// eslint-disable-next-line
module.exports = {
  // this is a workaround that jest does not create a jest_0/ folder in the project root dir!
  cacheDirectory: '/tmp/jest-cache',
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/*.stories.js',
    '!src/**/*.jsx',
    '!src/index.js',
    '!src/serviceWorker.js',
  ],
  coverageDirectory: './coverage/',
  coverageReporters: ['html', 'lcov', 'lcovonly', 'text'],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
  testMatch: [
    '**/test/unit/**/*.test.js',
  ],
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '<rootDir>/test/data/.*',
  ],
  verbose: true,
};
