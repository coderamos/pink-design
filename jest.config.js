module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/**/mock.ts',
    '!src/styles/**/*.ts(x)?',
    '!src/types/**/*.ts(x)?',
    '!src/utils/**/*.ts(x)?'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  preset: 'ts-jest'
};
