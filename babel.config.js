module.exports = {
	presets : [
		[
			'@vue/app',
			{
				useBuiltIns : 'entry' // polyfill
			}
		]
	],
	plugins : [
		'@babel/plugin-transform-runtime',
		[
			'component',
			{
				'libraryName' : 'mint-ui',
				'style' : true
			}
		]
	]
};
