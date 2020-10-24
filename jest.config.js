module.exports = {
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.json"
        }
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: [
        "**/tests/**/*.[tj]s?(x)",
        "**/?(*.)+(spec|test).[tj]s?(x)"
    ]
};