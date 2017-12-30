// const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname,
		filename: 'prd.js'
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
				test: /\.scss?$/,
				loader: 'style-loader!css-loader!sass-loader'
			},
			// {
			// 	test: /\.css$/,
			// 	loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
			// },
			// {
			// 	test: /\.scss$/,
			// 	loader: ExtractTextPlugin.extract('style-loader', 'css-loader!scss-loader')
			// }
		]
	},
	// plugins: [
	// 	new ExtractTextPlugin('prd.css')
	// ]
}