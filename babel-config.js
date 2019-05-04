module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					browsers: ['last 2 versions', 'safari >= 9.0', 'ie 11', '> 2%'],
				},
				modules: false,
			},
		],
	],

	plugins: [
		[
			'@babel/plugin-proposal-decorators',
			{
				legacy: true,
			},
		],
		[
			'@babel/plugin-proposal-class-properties',
			{
				loose: true,
			},
		],
		'@babel/plugin-proposal-object-rest-spread',
		'syntax-trailing-function-commas',
		[
			'@babel/plugin-transform-runtime',
			{
				helpers: true,
				corejs: 2,
				regenerator: true,
			},
		],
		'@babel/plugin-syntax-dynamic-import',
		'lodash',
	],
};
