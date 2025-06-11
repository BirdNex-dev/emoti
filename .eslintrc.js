module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  plugins: ['react', '@typescript-eslint'],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'expo', // only if using Expo
  ],
  rules: {
    'react/jsx-no-undef': 'error',
    'react/react-in-jsx-scope': 'off', // <-- disable this rule
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
