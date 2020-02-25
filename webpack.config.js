const path = require('path');
const webpackMerge = require('webpack-merge');
const hmtlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtract = require('mini-css-extract-plugin'); 

module.exports=()=>{
    return webpackMerge({
        entry:'./src/index.js',
        output:{
            path:path.resolve(__dirname,'dist'),
            filename:'bundel.js',
            libraryTarget:'umd',
            library:'CheckForApi',
            publicPath:'/'
        },
        module:{
            rules:[
                {
                    test:/\.m?js$/,
                    loader:'babel-loader'
                },
                {
                    test:/\.(css|less|scss)$/,
                    loader:[miniCssExtract.loader,'css-loader']
                },
                {
                    test:/\.(svg|png|jpe?g)$/,
                    loader:'url-loader'
                }
            ]
        },
        plugins:[
            new hmtlWebpackPlugin({
                template:'./public/index.html',
                inject:'body'}), 
                new miniCssExtract()
            ]
    });
};