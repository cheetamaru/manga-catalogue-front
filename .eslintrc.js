module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.vue'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  plugins: [
    'vue',
  ],
  parser: 'vue-eslint-parser',
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-multi-spaces': ['error'],
    indent: ['error', 2],
    'comma-dangle': ['error', 'always-multiline'],
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'block-like', next: 'return' },
      { blankLine: 'always', prev: 'const', next: 'return' },
      { blankLine: 'always', prev: 'let', next: 'return' },
    ],
    'vue/multi-word-component-names': ['error', {
      'ignores': ['index', '[id]', 'default'],
    }],
    'vue/html-indent': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'no-trailing-spaces': 'error',
  },
}
