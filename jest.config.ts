import type { Config } from "jest";

const config: Config = {
    preset: "ts-jest",
    testEnvironment: "node",
    roots: ["<rootDir>/test"],
    testMatch: ["<rootDir>/test/**/*-spec.ts"],
    collectCoverage: true,
    coverageDirectory: "coverage",
    moduleFileExtensions: ["ts", "tsx", "js"],
    verbose: true,
    collectCoverageFrom: ["src/**/*.ts", "!src/index.ts"],
};

export default config;
