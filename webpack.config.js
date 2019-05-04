const path = require('path');
const webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const babelConfig = require('./babel-config');

const ROOT = path.resolve(__dirname, 'src');
const DESTINATION = path.resolve(__dirname, `dist`);

module.exports = (env, argv) => {
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
			plugins: [new TsconfigPathsPlugin({ configFile: `tsconfig.${env.TARGET}.json` })],
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
					use: [
						{
							loader: 'awesome-typescript-loader',
							options: {
								configFile: `tsconfig.${env.TARGET}.json`,
								useBabel: true,
								babelCore: '@babel/core',
								babelOptions: {
									babelrc: false /* Important line */,
									...babelConfig,
								},
							},
						},
					],
				},
				{
					test: /\.js$/,
					exclude: /node_modules\/(?![tree-shakeable-lib])/,
					use: [
						{
							loader: 'babel-loader',
							options: {
								...babelConfig,
								plugins: [],
							},
						},
					],
				},
			],
		},

		devtool: argv.mode === 'production' ? 'source-map' : 'cheap-module-source-map',
	};
};
