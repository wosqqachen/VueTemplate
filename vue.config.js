const { defineConfig } = require('@vue/cli-service');
const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');
const BundleAnalyzerPlugin =
	require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const path = require('path');
// const resolve = dir => path.join(__dirname, dir);

const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
module.exports = defineConfig({
	transpileDependencies: true,
	publicPath: IS_PROD ? '/donut-h5' : '/',
	lintOnSave: IS_PROD,
	productionSourceMap: false,
	parallel: require('os').cpus().length > 1,
	devServer: {
		open: true,
		port: 8081,
		compress: true,
		hot: true,
		proxy: {
			'/api': {
				target: 'http://127.0.0.1:7878',
				ws: false,
				changOrigin: true, // 是否将请求header中的origin修改为目标地址
				// pathRewrite: {
				//   '^/api': ''
				// }
			},
		},
		client: {
			progress: true,
			overlay: {
				errors: true,
				warnings: true,
			},
		},
	},
	css: {
		loaderOptions: {
			sass: {
				additionalData: '@import "@/assets/css/variables.scss";',
			},
		},
	},
	configureWebpack: {
		resolve: {
			extensions: ['.ts', '.js', '.vue', '.scss', '.json'],
		},
		plugins: [
			ComponentsPlugin({
				resolvers: [VantResolver()],
			}),
		],
	},
	chainWebpack: config => {
		// 关闭i18警告
		config.resolve.alias.set('vue-i18n', 'vue-i18n/dist/vue-i18n.cjs.js');
		// 打包分析
		if (process.env.IS_ANALYZ) {
			config.plugin('webpack-report').use(BundleAnalyzerPlugin, [
				{
					analyzerMode: 'server',
					openAnalyzer: true,
				},
			]);
		}
		config.module
			.rule('vue')
			.test(/\.vue$/)
			.use('postcss-style-px-to-viewport')
			.loader('postcss-style-px-to-viewport')
			.options({
				unitToConvert: 'px', // 需要转换的单位
				viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
				viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
				unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
				viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
				fontViewportUnit: 'vw', // 字体使用的视口单位
				selectorBlackList: ['.ignore', '.hairlines', '.donut-'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
				minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
				mediaQuery: false, // 允许在媒体查询中转换`px`
				exclude: /(\/|\\)(node_modules)(\/|\\)/, // 排除node_modules文件中第三方css文件
			});
	},
});
