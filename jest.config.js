/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
	globals: {
		"ts-jest": {
			tsconfig: "tsconfig.json",
		},
	},
	roots: ["<rootDir>/src"],
	testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
	transform: { "^.+\\.(ts|tsx)$": "ts-jest" },
};
