module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'double'],
    semi: ['error', 'always'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'prettier/prettier': 'error',
    'space-before-function-paren': 'off',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-no-comment-textnodes': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-uses-react': 'off'
  }
};
