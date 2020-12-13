const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'build'),
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'src'),
		compress: true,
		port: 3000,
		historyApiFallback: true,
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.(jpeg|png|jpg|svg|gif)$/i,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'images',
					publicPath: 'images',
					emitFile: true,
					esModule: false,
				},
			},
		],
	},

	plugins: [],
});
