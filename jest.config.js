/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  verbose: true,
  collectCoverage: true,
  resetMocks: true,
};

module.exports = config;
