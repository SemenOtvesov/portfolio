/* eslint-disable no-undef */
const path = require('path')
const HTMLPlug = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssEXtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

function optimization(){
    const obj = { splitChunks: {
        chunks: 'all'
    }}
    if(!isDev){
        obj.minimizer = [
        new CssMinimizerWebpackPlugin(),
        new TerserWebpackPlugin()
        ]
    }

    return obj
}

function createLoader(load){
    if(load){return [{loader: MiniCssEXtractPlugin.loader},'css-loader', load]}
    else{return [{loader: MiniCssEXtractPlugin.loader},'css-loader']}
}

function jsLoaders(){
    const loaders = [{
        loader: 'babel-loader',
        options: {presets: ['@babel/preset-env']},
    }]
    return loaders
}

module.exports = {
    resolve: {
        alias: {
            '@js': path.resolve(__dirname, 'maket/js'),
            '@maket': path.resolve(__dirname, 'maket'),
            '@core': path.resolve(__dirname, 'maket/core'),
            '@components': path.resolve(__dirname, 'maket/components'),
        }
    },
    entry:'@js/script.js',
    output:{
        filename: 'bundle.[chunkhash].js',
        path: path.resolve(__dirname, 'public')
    },
    devtool: isDev ? 'source-map' : false,
    devServer:{
        port: 3000,
        hot: isDev
    },
    plugins:[
        new HTMLPlug({template:'./maket/index.html',  minify: {collapseWhitespace: !isDev}}),
        new CleanWebpackPlugin(),
        new MiniCssEXtractPlugin(),
        new CopyPlugin({
            patterns: [
                {from: path.resolve(__dirname, 'maket/img'), to: path.resolve(__dirname, 'public')}
            ]
        })
    ],
    module:{
        rules:[
            {
                test: /\.css$/,
                use:  createLoader(),
                type: 'javascript/auto'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: jsLoaders()
            }
            ]
    },
    optimization: optimization(),
}