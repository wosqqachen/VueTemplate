module.exports = {
  printWidth: 80,             // 指定每行代码的最大长度
  tabWidth: 2,                 // 缩进长度
  useTabs: false,              // 使用空格代替tab缩进
  semi: true,                  // 句末使用分号
  singleQuote: true,           // 使用单引号
  quoteProps: 'as-needed',     // 对象字面量属性是否使用引号
  jsxSingleQuote: true,        // jsx中使用单引号
  trailingComma: 'all',        // 对象和数组字面量的最后一个元素后是否添加尾随逗号
  bracketSpacing: true,        // 在对象前后添加空格-eg: { foo: bar }
  jsxBracketSameLine: false,    // 多属性html标签的‘>’折行放置
  arrowParens: 'always',       // 单参数箭头函数参数周围使用圆括号-eg: (x) => x
  requirePragma: false,        // 无需顶部注释即可格式化
  insertPragma: false,         // 在已被preitter格式化的文件顶部加上标注
  proseWrap: 'preserve',       // 控制是否将 Markdown 段落包装在一行内
  htmlWhitespaceSensitivity: 'ignore', // 对HTML全局空白不敏感
  vueIndentScriptAndStyle: false,      // 不对vue中的script及style标签缩进
  endOfLine: 'lf',                     // 结束行形式
  embeddedLanguageFormatting: 'auto',  //对引用代码进行格式化
};
