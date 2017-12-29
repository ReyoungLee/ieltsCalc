// const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'prd.js'
    },
    devServer: {
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['env']
            }
        },{
            test: /\.scss?$/,
            loader: 'style-loader!css-loader!sass-loader'
        },]
    }
}