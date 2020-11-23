let path = require("path") //获取当前的目录

module.exports = {
    // 入口文件
    entry: "./src/index.js",
    output: {
        // 输出文件名称
        filename: "bundle.js",
        // 输出的路径，绝对路径
        path: path.resolve(__dirname, 'dist')
    },
    mode: "development"  //or `production`
}