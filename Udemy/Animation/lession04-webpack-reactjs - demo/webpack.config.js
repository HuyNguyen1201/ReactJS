const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

const VENDOR_LIBS = [
    "axios",
    "bootstrap",
    "jquery",
    "react",
    "react-dom",
    "react-redux",
    "react-router-dom",
    "redux",
    "redux-thunk",
];

const config = {
    entry: {
        bundle: './src/index.js', // File đầu vào
        vendor: VENDOR_LIBS
    },
    output: { // File đầu ra
        filename: '[name].[chunkhash].js', // Tên file đầu ra
        path: path.resolve(__dirname, 'dist') // Nơi chưa file đầu ra
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.$': 'jquery',
            'window.jQuery': 'jquery'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        open: true,
        port: 9000
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: { test: /[\\/]node_modules[\\/]/, name: "common", chunks: "all" }
            }
        },
        runtimeChunk: {
            name: "manifest",
        }
    }
}

module.exports = config;