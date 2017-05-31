const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
	context: resolve(__dirname, 'app'),
  	entry: [
  		'react-hot-loader/patch',
  		'webpack-dev-server/client?http://localhost:8080',
  		'webpack/hot/only-dev-server',
  		'./index.js'
 	],
	output: {
		filename: 'bundle.js',
		path: resolve(__dirname, 'app'),
		publicPath: '/'
	},

	devtool: 'inline-source-map',

	devServer: {
		hot: true,
		contentBase: resolve(__dirname, 'public'),
		publicPath: '/'
	},

	module: {
		rules: [
			{ 
				test: /\.js$/,
				use: [ 'babel-loader', ],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader?modules', ],
			},
		],
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
	],
};
