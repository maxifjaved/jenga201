var path = require('path');
var webpack = require('webpack');

var config = {
    context: path.join(__dirname, 'app'),
    entry: [
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        './main.js',
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/assets/',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            exclude: /node_modules/
        }]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
module.exports = config;
