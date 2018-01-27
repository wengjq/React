var path = require('path');
var webpack = require('webpack');
var fs = require('fs');
var cssnano = require('cssnano');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); 

module.exports = {
    devtool: 'source-map',
    entry: {
        app: ['./src/app'],
        vendors: ['react', 'react-dom', 'react-router']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                include: [
                    path.resolve(__dirname, 'src')
                ]
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css!postcss!sass'),
                include: [
                    path.resolve(__dirname, 'src')
                ]
            }
        ]
    },
    postcss: [
        cssnano({
            sourcemap: true,
            autoprefixer: {
                add: true,
                remove: true,
                browers: ['last 2 version', 'Chrome 31', 'Safari 8'],
                discardComments: {
                    removeAll: true
                }
            }
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss', '.css']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors', 
            filename: 'vendors.js'
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            __DEV__: false,
        }),
        new ExtractTextPlugin('style.css', {
            allChunks: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                unused: true,
                dead_code: true
            }
        })
    ]
}