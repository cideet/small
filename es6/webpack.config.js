/**
 * Created by sf on 2017/12/19.
 */

var webpack = require('webpack');

module.exports = {
    entry: './app.js',
    output: {
        filename: './app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};