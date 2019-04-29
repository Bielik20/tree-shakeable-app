const path = require('path');
const webpack = require('webpack');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
const { version } = require('./package');

const ROOT = path.resolve(__dirname, 'src');
const DESTINATION = path.resolve(__dirname, `dist/${version}`);

module.exports = (env) => {
	return {
		mode: 'development',
		context: ROOT,

		entry: {
			main: './index.ts',
		},

		output: {
			filename: '[name].bundle.js',
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
			],
		},

		devtool: 'cheap-module-source-map',
		devServer: {},
	};
};
