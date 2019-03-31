module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'beansmile/vue-rule',
    'plugin:vue/essential',
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      legacyDecorators: true
    },
  },
  globals: {
    SentryIgnore: true
  }
}
