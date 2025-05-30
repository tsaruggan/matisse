export default {
  preset: 'ts-jest/presets/default-esm', // Use ESM preset
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      useESM: true,
      // ts-jest configuration items go here
      // e.g., isolatedModules: true (if you want faster compilation but less type checking during tests)
    }],
  },
  moduleNameMapper: {
    // Example: '^@/(.*)$': '<rootDir>/src/$1'
    // If you have path aliases in tsconfig.json, map them here
    // For ESM, you might need to adjust how Jest handles module resolution for these paths,
    // ensuring they correctly point to .js files if your tsconfig outDir is different.
    // However, for direct .ts execution with ts-jest, this might not be an issue.
  },
  extensionsToTreatAsEsm: ['.ts'], // Treat .ts files as ES modules
  testMatch: [ // Explicitly target only .ts test files in the test directory
    "<rootDir>/test/**/*.test.ts"
  ],
  // 'globals' for 'ts-jest' is deprecated, options are now passed directly to the transformer.
};
