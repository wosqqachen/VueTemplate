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
		[
			'component',
			{
				'libraryName' : 'mint-ui',
				'style' : true
			}
		]
	]
};
