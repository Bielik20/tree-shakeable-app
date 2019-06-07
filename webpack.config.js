const path = require('path');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
const babelConfig = require('tree-shakeable-lib/tools/babel-config');

const ROOT = path.resolve(__dirname, 'src');
const DESTINATION = path.resolve(__dirname, `dist`);

function getPreLoaders() {
	return [
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
	];
}

function getTypeScriptLoader(include, tsconfig, transpileOnly = false) {
	return {
		test: /\.(js|ts)$/,
		include: include,
		exclude: [/node_modules/],
		use: [
			{
				loader: 'awesome-typescript-loader',
				options: {
					transpileOnly,
					configFileName: tsconfig,
					useBabel: true,
					babelCore: '@babel/core',
					babelOptions: {
						babelrc: false /* Important line */,
						...babelConfig,
					},
				},
			},
		],
	};
}

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
			rules: [...getPreLoaders(), getTypeScriptLoader(ROOT, `tsconfig.${env.TARGET}.json`)],
		},

		devtool: argv.mode === 'production' ? 'source-map' : 'cheap-module-source-map',
	};
};
