// Babel ES6/JSX Compiler
require('babel-register');

var express = require('express');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');


app.use(logger('dev'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


var compiler = webpack(webpackConfig);
var publicPath = path.resolve(__dirname, 'public');
app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/assets/',
    stats: {
        colors: true,
    },
    historyApiFallback: true,
}));

app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
}));


app.use(express.static(publicPath));


var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});
