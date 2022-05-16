module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/graphql/**/*.ts',
    '<rootDir>/libs/**/*.ts',
    '!<rootDir>/graphql/**/*.d.ts',
    '!<rootDir>/graphql/**/*.test.ts',
    '!<rootDir>/graphql/**/*.ts.snap',
    '!<rootDir>/libs/**/*.d.ts',
    '!<rootDir>/libs/**/*.test.ts',
    '!<rootDir>/libs/**/*.ts.snap',
  ],
  coverageDirectory: '<rootDir>/coverage',
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 50,
    },
  },
  preset: 'ts-jest',
  roots: ['<rootDir>'],
  testMatch: ['**/?(*.)+(spec|test).[t]s?(x)'],
  verbose: true,
  setupFiles: ['<rootDir>/jest.setup.js'],
};
