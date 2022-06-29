module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/server.ts',
    '!<rootDir>/src/**/*.d.ts',
    '!<rootDir>/src/**/*.test.ts',
    '!<rootDir>/src/**/*.ts.snap',
  ],
  coverageDirectory: '<rootDir>/coverage',
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 80,
      functions: 90,
      lines: 90,
    },
  },
  preset: 'ts-jest',
  roots: ['<rootDir>'],
  testMatch: ['**/?(*.)+(spec|test).[t]s?(x)'],
  verbose: true,
  setupFiles: ['<rootDir>/jest.setup.js'],
};
