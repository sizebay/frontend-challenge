module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
	transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
	moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

}
