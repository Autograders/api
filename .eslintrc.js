const tsconfig = require('./tsconfig.json');

const tscpaths = Object.keys(tsconfig.compilerOptions.paths || {}).map((p) =>
  p.split('/')[0].trim()
);

module.exports = {
  env: {
    es2021: true
  },
  extends: ['plugin:prettier/recommended'],
  ignorePatterns: ['.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  rules: {
    'comma-dangle': 'off',
    'no-use-before-define': 'off',
    'import/no-extraneous-dependencies': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error'
  },
  overrides: [
    {
      files: ['src/**/*.ts'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              ['^\\u0000'],
              ['^@?\\w'],
              ['^'],
              [`^(${tscpaths.join('|')})`],
              ['^\\.']
            ]
          }
        ]
      }
    }
  ]
};
