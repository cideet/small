/**
 * Created by sf on 2017/12/19.
 */

var webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: './bin/app.bundle.js'
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