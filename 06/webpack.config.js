let path = require("path") //获取当前的目录
let HtmlWebpackPlugin = require("html-webpack-plugin")

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
            },{
                // 图片文件
                test: /\.(jpg|png|gif)$/,
                loader: "url-loader",
                // 图片小于8k，base64处理，减少请求数量，会使得体积更大
                options:{
                    limit: 8*1024, //8k
                    esModule: false, //关闭ES6解析
                    name: '[hash:10].[ext]' //取图片哈希的前10位和扩展名
                }
            },{
                // 处理HTML
                test: /\.html$/,
                loader: "html-loader"
            }
        ]
    },

    // plugin配置
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    // 
    devServer: {
        // 项目构建路径
        contentBase: path.resolve(__dirname, "dist"),
        // 启动编码压缩
        compress: true,
        port: 3000,
        open: true //自动打开浏览器
    }
}