module.exports = {
  extends: ['universe/native', 'universe/shared/typescript-analysis'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  plugins: [
    'unused-imports',
    'simple-import-sort',
    'import',
    '@typescript-eslint',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
      },
    ],
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
    ],
    '@typescript-eslint/no-misused-promises': [
      0,
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    'react-hooks/exhaustive-deps': 2,
    'react-native/no-inline-styles': 0,
    'import/first': 'error',
    'no-bitwise': 'off',
    'no-useless-escape': 'off',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'simple-import-sort/exports': 'error',
    'unused-imports/no-unused-imports': 'error',
    'no-console': 'warn',
  },
};
