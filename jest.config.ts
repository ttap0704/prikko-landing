import type { Config } from "@jest/types";
import nextJest from "next/jest";

const createJestConfig = nextJest({
	dir: "./",
});

const config: Config.InitialOptions = {
	testEnvironment: "jsdom",
	setupFilesAfterSetup: ["<rootDir>/src/test/setup.ts"],
	testMatch: ["<rootDir>/src/**/*.test.{ts,tsx}", "<rootDir>/app/**/*.test.{ts,tsx}"],
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
	},
};

export default createJestConfig(config);
