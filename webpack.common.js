const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
	// context: path.resolve(__dirname, 'src'),
	entry: {
		main: './src/index.js',
		vendor: './src/vendor.js',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},

	module: {
		rules: [
			{
				test: /\.(jsx|js)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-env',
								{ useBuiltIns: 'usage', corejs: 3, targets: 'defaults' },
							],
							'@babel/preset-react',
						],
					},
				},
			},
			{
				test: /\.(scss|css)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			minify: true,
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[hash:6].css',
		}),
		new MinifyPlugin(
			{},
			{
				comments: false,
			}
		),
	],
};
