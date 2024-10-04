module.exports = {
    verbose: true,
    transform: {
        "^.+\\.jsx?$": "babel-jest"
    },
    transformIgnorePatterns: [
        "/node_modules/(?!undici)"
    ],
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"]
};