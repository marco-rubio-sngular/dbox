module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['standard', 'eslint-config-prettier'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        semi: [2, 'always'],
        indent: ['error', 4],
        'space-before-function-paren': ['error', 'never'],
    },
};
