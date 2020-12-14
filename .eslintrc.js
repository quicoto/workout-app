module.exports = {
  globals: {
    cy: true,
    expect: true,
    describe: true,
    it: true,
  },
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
    'no-console': 'error',
    'no-debugger': 'error',
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
