module.exports = {
	presets : [
		[
			'@vue/app',
			{
				useBuiltIns : 'usage' // polyfill按需引入
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
