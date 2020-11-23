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
    mode: "development",  //or `production`
    // loader的配置
    module: {
        // 对某个格式的文件进行转换处理
        rules: [
            {
                test: /\.css$/,  //正则
                use: [
                    // use数组中的loader顺序为从下到上执行
                    "style-loader", //将js样式内容插入到style标签里
                    "css-loader"    //将css文件转为js
                ]
            }
        ]
    }
}