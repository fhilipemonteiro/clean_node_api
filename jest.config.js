/** @type {import('jest').Config} */
const config = {
  collectCoverageFrom: ['<rootDir>/src/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jest-environment-node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}

module.exports = config
