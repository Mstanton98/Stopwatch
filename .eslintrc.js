module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module"
    },
    extends: [
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        "plugin:prettier/recommended"
    ],
    rules: {
        camelcase: 0,
        'no-case-declarations': 0,
        complexity: ['warn', 10],
        'max-statements': ['warn', 25],
        'comma-dangle': ['error', 'always-multiline'],
    }
};