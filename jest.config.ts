import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    "^.+\\.(css|scss|sass)$": "identity-obj-proxy",
    // Handle static assets
    "^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$": "<rootDir>/__mocks__/fileMock.js",
    // Handle module aliases (if you use @/ for src)
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!(next-intl)/)"],
};

export default createJestConfig(config);
