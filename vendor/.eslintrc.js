module.exports = {
  root: true,
  parser: 'babel-eslint',
  "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": false,
    "codeFrame": false
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'config/webpack/configuration.js'
      }
    }
  },
  'env': {
    'browser': true,
    'node': true
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    'no-underscore-dangle' : ["error", { "allow": ["_destroy"] }],
    'no-undef' : 1,
    'prefer-template' : 0,
    'no-param-reassign' : 0,
    'no-shadow' : 0,
    'comma-dangle': ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],
    'semi': ['error', 'never'],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
