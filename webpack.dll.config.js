const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
	mode : 'production',
	entry : {
		dll : [
			'axios',
			'core-js'
		],
		vue : [
			'vue',
			'vue-router',
			'vuex'
		]
	},
	output : {
		path : resolve('dll'),
		filename : '[name]_[chunkhash:4].js',
		library : '[name]_[chunkhash:4]'
	},
	plugins : [
		new CleanWebpackPlugin({
			root : ['dll'],
			verbose : true
		}),
		new webpack.DllPlugin({
			name : '[name]_[chunkhash:4]',
			path : resolve('dll') + '/[name]_manifest.json'
		})
	]
};
