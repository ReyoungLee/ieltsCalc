// const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var cssLoader = process.env.NODE_ENV == 'dev' ? {
	test: /\.scss?$/,
	loader: 'style-loader!css-loader!sass-loader'
} : {
	test: /\.scss$/,
	exclude: /node_modules/,
	use: ExtractTextPlugin.extract({
		fallback: 'style-loader',
		use: ['css-loader', 'sass-loader']
	})
};

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
			cssLoader
		]
	},
	plugins: [
		new ExtractTextPlugin('prd.css')
	]
}