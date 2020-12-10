module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    indent: ['error', 2, {
      ignoredNodes: ['TemplateLiteral'],
    }],
    'template-curly-spacing': 'off',
    'prefer-destructuring': 'off',
    'no-plusplus': 'off',
    'func-names': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',
    'vue/require-v-for-key': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 8,
    sourceType: 'module',
  },
};
