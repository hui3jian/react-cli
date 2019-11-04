module.exports = {
    "eslintIntegration": true,
    // 设置prettier单行输出（不折行）的（最大）长度
    "printWidth": 120,
    // 在语句末尾添加分号；
    "semi": true,
    // 使用单引号而非双引号；
    "singleQuote": true,
    // 在任何可能的多行中输入尾逗号，none-无尾逗号，es5-添加es5中被支持的尾逗号，all-所有可能的地方都被添加尾逗号
    "trailingComma": "none",
    // 在对象字面量声明所使用的的花括号后（{）和前（}）输出空格
    "bracketSpacing": true,
    "jsxBracketSameLine": true,
    "arrowParens": "avoid",
    // 文件的顶部插入一个 @format的特殊注释，以表明改文件已经被Prettier格式化过了
    "insertPragma": false,
    // 设置工具每一个水平缩进的空格数
    "tabWidth": 4,
    // 使用tab（制表位）缩进而非空格；
    "useTabs": false
};