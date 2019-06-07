const path = require('path');
const webpack = require('webpack');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
const {
	getPreLoaders,
	getTypeScriptLoader,
	getLibLoader,
} = require('tree-shakeable-lib/tools/webpack-app.config');

const ROOT = path.resolve(__dirname, 'src');
const DESTINATION = path.resolve(__dirname, `dist`);

module.exports = (env, argv) => {
	return {
		mode: 'development',
		context: ROOT,

		entry: './index.ts',

		output: {
			filename: 'index.js',
			path: DESTINATION,
		},

		resolve: {
			extensions: ['.ts', '.js'],
			modules: [ROOT, 'node_modules'],
			plugins: [new TsConfigPathsPlugin({ configFileName: `tsconfig.${env.TARGET}.json` })],
		},

		module: {
			rules: [
				...getPreLoaders(),
				getTypeScriptLoader(ROOT, `tsconfig.${env.TARGET}.json`),
				getLibLoader(),
			],
		},

		devtool: argv.mode === 'production' ? 'source-map' : 'cheap-module-source-map',
	};
};
