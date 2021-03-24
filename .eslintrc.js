module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    "eslint:recommended",
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12
  },
  plugins: [
    'react',
  ],
  rules: {
    'semi': [2, "always"],
    'react/prop-types': ['off'],
    'no-prototype-builtins': ['off']
  },
  settings: {
    'react': {
      'version': 'detect'
    }
  }
}
