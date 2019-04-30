const path = require('path');
const webpack = require('webpack');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

const ROOT = path.resolve(__dirname, 'src');
const DESTINATION = path.resolve(__dirname, `dist`);

module.exports = (env) => {
	return {
		mode: 'development',
		context: ROOT,

		entry: ['@babel/polyfill/noConflict', './index.ts'],

		output: {
			filename: 'main.bundle.js',
			path: DESTINATION,
		},

		resolve: {
			extensions: ['.ts', '.js'],
			modules: [ROOT, 'node_modules'],
			plugins: [new TsConfigPathsPlugin({ configFileName: `tsconfig.${env}.json` })],
		},

		module: {
			rules: [
				/****************
				 * PRE-LOADERS
				 *****************/
				{
					enforce: 'pre',
					test: /\.js$/,
					use: 'source-map-loader',
				},
				{
					enforce: 'pre',
					test: /\.ts$/,
					exclude: /node_modules/,
					use: 'tslint-loader',
				},

				/****************
				 * LOADERS
				 *****************/
				{
					test: /\.ts$/,
					exclude: [/node_modules/],
					loader: 'awesome-typescript-loader',
					options: {
						configFileName: `tsconfig.${env}.json`,
					},
				},
				{
					test: /\.(js|ts)$/,
					exclude: [/node_modules/],
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-env',
								{
									modules: false,
									targets: {
										browsers: ['last 2 versions', 'safari >= 9.0', 'ie 11', '> 2%'],
									},
									exclude: [
										'@babel/plugin-transform-regenerator',
										'@babel/transform-async-to-generator',
									],
								},
							],
						],
					},
				},
			],
		},

		devtool: 'cheap-module-source-map',
		devServer: {},
	};
};
