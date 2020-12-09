module.exports = {
  // 单行代码的最大宽度
  printWidth: 80,
  // 使用 2 个空格缩进
  tabWidth: 2,
  // 不使用缩进符，而使用空格
  useTabs: false,
  // 行尾需要有分号
  semi: true,
  // vue 文件 script 和 style 缩进
  vueIndentScriptAndStyle: true,
  // 使用单引号
  singleQuote: true,
  // 对象的 key 仅在必要时用引号
  quoteProps: 'as-needed',
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  // 末尾不需要逗号
  trailingComma: 'all',
  // jsx 标签的反尖括号需要换行
  jsxBracketSameLine: false,
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: false,
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: 'always',
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 使用默认的折行标准
  proseWrap: 'preserve',
  // HTML空白灵敏度
  htmlWhitespaceSensitivity: 'strict',
  // 行结束符
  endOfLine: 'lf',
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  overrides: [
    {
      files: '*.md',
      options: {
        tabWidth: 2,
      },
    },
  ],
};
