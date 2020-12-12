const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(jpeg|png|jpg|svg|gif)$/i,
				loader: 'file-loader',
				options: {
					name: '[name].[hash:6].[ext]',
					outputPath: 'images',
					publicPath: 'images',
					emitFile: true,
					esModule: false,
				},
			},
		],
	},

	plugins: [new CleanWebpackPlugin()],
});
