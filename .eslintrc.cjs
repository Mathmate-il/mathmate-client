module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    'linebreak-style': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-console': 'off',
    'object-curly-newline': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'comma-dangle': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/function-component-definition': 'off',
  },
};
