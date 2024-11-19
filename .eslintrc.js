module.exports = {
  root: true,
  env: {
    node: true,
    jquery: true // 這樣頁面中才不會出現 '$' is not defined. (no-undef)
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
