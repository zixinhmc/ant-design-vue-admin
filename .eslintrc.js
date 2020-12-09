module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    // 不允许使用空函数
    '@typescript-eslint/no-empty-function': 'warn',
    // 不允许对参数、变量和属性进行显式类型声明
    '@typescript-eslint/no-inferrable-types': 'off',
    // html每行的最大属性
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 10,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    // html 自闭合
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
      },
    ],
    // 单行元素的内容之前和之后需要行断
    'vue/singleline-html-element-content-newline': 'off',
  },
};
