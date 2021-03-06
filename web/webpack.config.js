const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')//构建一个绝对路径
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename:'index.html',//生成的文件夹名
            template:'./public/index.html',//生成HTML文件的模板
            favicon:'./public/book.ico'

        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif|ico)$/,
                type:'asset/resource'//使用内置Asset modules
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            }
        ]
    }
}