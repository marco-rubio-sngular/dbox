module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: ['standard', 'eslint-config-prettier'],
    overrides: [],
    parserOptions: {
        "ecmaVersion": 6,
        "ecmaFeatures": {
          "experimentalObjectRestSpread": true
        }
      },
    rules: {
        semi: [2, 'always'],
        indent: ['error', 4],
        'space-before-function-paren': ['error', 'never'],
    },
};
