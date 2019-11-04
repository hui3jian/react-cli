module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        // 'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'prettier',
        'prettier/@typescript-eslint',
        // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
        // 此行必须在最后
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        // 支持最新 JavaScript
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    env: {
        es6: true,
        node: true,
    },
    globals: {
        $: true
    },
    rules: {
        // note you must disable the base rule as it can report incorrect errors
        'no-unused-vars': 0,
        "@typescript-eslint/no-unused-vars": 0,
        "@typescript-eslint/no-var-requires": 0
    }
}