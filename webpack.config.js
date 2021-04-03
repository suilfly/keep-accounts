const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
    mode:'development',
    entry:'./web/src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname+'/web/','dist')//构建一个绝对路径
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/,
                type:'asset/resource'//使用内置Asset modules
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            }
        ]
    }
}