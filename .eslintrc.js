// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  // "off" or 0  将规则关闭
  // "warn" or 1  将规则视为一个警告
  // "error" or 2  将规则视为一个错误
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 指定数组的元素之间要以空格隔开(,后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
    "array-bracket-spacing": [2, "never"],
    // 控制逗号前后的空格
    "comma-spacing": [2, {"before": false, "after": true}],
    // "indent": [2, 2, {"SwitchCase": 1}],
    "indent": [2, 4],
    //语句强制分号结尾
    // "semi": [1, "always"],
    // 不允许声明的变量未使用
    "no-unused-vars": 0,
    // 不允许使用未声明的变量
    "no-undef": 0,
    //禁止修改const声明的变量
    "no-const-assign": 2,
    //函数定义时括号前面要不要有空格
    "space-before-function-paren": [0, "never"],
    // 禁止在非赋值或条件语句中使用 new 操作符
    "no-new": 0,
    // 禁止对 Function 对象使用 new 操作符
    "no-new-func": 0,
    // 禁止对 String，Number 和 Boolean 使用 new 操作符
    "no-new-wrappers": 0,
    "no-control-regex": 0,//禁止在正则表达式中使用控制字符
    "no-div-regex": 0,//不能使用看起来像除法的正则表达式/=foo/
    "no-empty-character-class": 0,//正则表达式中的[]内容不能为空
    "no-invalid-regexp": 0,//禁止无效的正则表达式
    "no-regex-spaces": 0,//禁止在正则表达式字面量中使用多个空格 /foo bar/
    "no-useless-escape": 0,
    "no-unneeded-ternary": 0,
    "eqeqeq": 0,
    "no-tabs": 0,
  }
}
