// const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		index: './src'
	},
	output: {
		filename: 'prd.js',
	},
	devServer: {
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['env']
				}
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
			// {
			// 	test: /\.scss?$/,
			// 	loader: 'style-loader!css-loader!sass-loader'
			// },
		]
	},
	plugins: [
		new ExtractTextPlugin('prd.css')
	]
}