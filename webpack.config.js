const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports= {
    context: path.resolve(__dirname, 'docs'),
    mode:'development',
    entry: ['@babel/polyfill', './assets/js/index.js'],
    output: {
        filename: '[name].[hash].js',
        path:path.resolve(__dirname,'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template:'./index.html'
        }),
        new CleanWebpackPlugin()    ,
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
        })
    ],
    devServer: {
        port: 3000
      },
    module : {
        rules: [
            {
                test:/\.css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test:/\.s[ac]ss$/,
                use:[MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader']
            },
            {  
                 test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                 loader: "file-loader"
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
        ]
    }
}   