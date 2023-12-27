module.exports = {
  env: {
      browser: true,
      es2021: true,
      jest: true,
      "jest/globals": true
  },
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "jest"
  ],
    extends: [    
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  overrides: 
  {
    "rules": {
      "@nrwl/nx/enforce-module-boundaries": [
        "error",
        {
          "depConstraints": [
            {
              "sourceTag": "type:utils",
              "onlyDependOnLibsWithTags": ["type:utils"]
            },
            {
              "sourceTag": "type:domain",
              "onlyDependOnLibsWithTags": ["type: domain", "type:utils"]
            },
            {
              "sourceTag": "domain:products",
              "onlyDependOnLibsWithTags": ["domain:products", "domain:orders"]
            }
          ]
        }
      ]
    }
  },
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