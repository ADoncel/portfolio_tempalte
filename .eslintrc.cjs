module.exports = {
  root: true,
  env: { browser: true, es2020: true, es6: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "react-app",
    "plugin:prettier/recommended",
    "prettier"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  plugins: ['react-refresh',
            "react",
            "@typescript-eslint",
            "autofix",
            "react-hooks"],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "no-console": "warn",
    "no-eval": "error",
    "import/first": "error",
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",
          "external",
          "parent",
          "sibling",
          "index",
          "object",
          "type"
        ],
        "pathGroups": [
          {
            "pattern": "@/**/**",
            "group": "parent",
            "position": "before"
          }
        ],
        "alphabetize": {
          "order": "asc"
        }
      }
    ],
    "react-hooks/exhaustive-deps": "error",
    "react/self-closing-comp": [
      "error",
      {
        "component": true,
        "html": true
      }
    ]
  },
}