const path = require('node:path');
const express = require('express');
const app = express();
const webpack = require('webpack');
const HTMLPlug = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssEXtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

app.use(express.static(path.join(__dirname, 'docs')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'docs', 'index.html'));
});

app.listen(9000);

function optimization() {
    const obj = {
        splitChunks: {
            chunks: 'all',
        },
    };
    if (!isDev) {
        obj.minimizer = [new CssMinimizerWebpackPlugin(), new TerserWebpackPlugin()];
    }

    return obj;
}

function createLoader(load) {
    if (load) {
        return [{ loader: MiniCssEXtractPlugin.loader }, 'css-loader', load];
    } else {
        return [{ loader: MiniCssEXtractPlugin.loader }, 'css-loader'];
    }
}

function createBable(pres) {
    if (pres) {
        return { loader: 'babel-loader', options: { presets: ['@babel/preset-env', pres] } };
    } else {
        return { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } };
    }
}

let i = 0;
module.exports = {
    resolve: {
        alias: {
            '@js': path.resolve(__dirname, 'maket/js'),
            '@maket': path.resolve(__dirname, 'maket'),
            '@docs': path.resolve(__dirname, 'docs'),
            '@localTypes': path.resolve(__dirname, 'maket/js/types'),
            '@state': path.resolve(__dirname, 'maket/js/state'),
            '@constants': path.resolve(__dirname, 'maket/js/constants'),

            '@components': path.resolve(__dirname, 'maket/js/components'),
            '@mainComponents': path.resolve(__dirname, 'maket/js/components/mainComponents'),
            '@middleComponents': path.resolve(__dirname, 'maket/js/components/middleComponents'),
            '@microComponets': path.resolve(__dirname, 'maket/js/components/microComponets'),

            '@allFunctions': path.resolve(__dirname, 'maket/js/allFunctions'),
            '@middleFunctions': path.resolve(__dirname, 'maket/js/middleFunctions'),

            '@events': path.resolve(__dirname, 'maket/js/mainFunctions/events'),
            '@firebaseInit': path.resolve(__dirname, 'maket/js/firebase/firebaseInit'),
        },
        extensions: ['', '.ts', '.tsx', '.js'],
    },
    entry: '@js/script.js',
    output: {
        asyncChunks: true,
        filename: pathData => {
            let newI = i;
            i++;
            return `bundle.${pathData.hash}${newI}.js`;
        },
        path: path.resolve(__dirname, 'docs'),
        publicPath: '/',
    },
    devtool: isDev ? 'source-map' : false,
    devServer: {
        port: 3000,
        hot: isDev,
        historyApiFallback: true,
    },
    plugins: [
        new HTMLPlug({ template: './maket/index.html', minify: { collapseWhitespace: !isDev } }),
        new CleanWebpackPlugin(),
        new MiniCssEXtractPlugin(),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'maket/img'),
                    to: path.resolve(__dirname, 'docs/img'),
                    noErrorOnMissing: true,
                },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: createLoader(),
                type: 'javascript/auto',
            },
            {
                test: /\.m?jsx?$/,
                exclude: /node_modules/,
                use: createBable(),
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: createBable('@babel/preset-typescript'),
            },
        ],
    },
    optimization: optimization(),
};
