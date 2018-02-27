let path = require('path');
let textWebpackPlugin = require('extract-text-webpack-plugin');
let htmlWebpackPlugin = require('html-webpack-plugin');
let extract = new textWebpackPlugin('build.css');
module.exports = {
    entry: {
        index:"./src/ts/index.ts"
    },
    resolve:
    {
      extensions: ['.ts', '.js', '.json']
    },
    output: {
        filename: "./dist/bundle.js",
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: "ts-loader",exclude: /node_modules/ }
        ]
    },
    plugins: [
     extract,
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devtool: 'source-map',//错误时定位源码错误
    // Other options...
    devServer: {
    contentBase: './dist',
    // 设置localhost端口
    port: 9000,
    // 自动打开浏览器
    open: true,
  }
};