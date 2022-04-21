module.exports = {
  testEnvironment: "node",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  preset: "ts-jest",
  clearMocks: true,
  setupFilesAfterEnv: ["<rootDir>/test/jest-setup.ts"],
};
