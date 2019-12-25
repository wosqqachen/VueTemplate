const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
const resolve = dir => path.join(__dirname, dir);
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
module.exports = {
	publicPath : IS_PROD ? '/' : '/', //如果部署不在是根路径需要做修改
	lintOnSave : IS_PROD,
	productionSourceMap : false,
	parallel : require('os').cpus().length > 1,
	devServer : {
		open : true,
		port : 8081,
		proxy : {
			'/api' : {
				target : 'http://localhost:7878',
				ws : false,
				changOrigin : true // 是否将请求header中的origin修改为目标地址
				// pathRewrite: {
				//   '^/api': ''
				// }
			}
		},
		overlay : {
			warnings : true,
			errors : true
		}
	},
	css : {
		loaderOptions : {
			sass : {
				data : `
          @import "@/assets/css/variables.scss";
        `
			}
		}
	},
	configureWebpack : config => {
		config.resolve.extensions = ['.js', '.vue', '.scss', '.json'];
		if (IS_PROD) {
			config.plugins.push(
				new webpack.DllReferencePlugin({
					context : process.cwd(),
					manifest : resolve('dll/dll_manifest.json')
				}),
				new webpack.DllReferencePlugin({
					context : process.cwd(),
					manifest : resolve('dll/vue_manifest.json')
				}),
				new AddAssetHtmlPlugin({
					filepath : resolve('dll/*.js')
				})
			);
			config.optimization = {
				splitChunks : {
					chunks : 'all',
					minSize : 30000,
					minChunks : 1,
					maxAsyncRequests : 5,
					maxInitialRequests : 3,
					automaticNameDelimiter : '~',
					name : true,
					cacheGroups : {
						vendors : {
							test : /[\\/]node_modules[\\/]/,
							priority : -10,
							name : 'vendors'
						},
						default : {
							minChunks : 2,
							priority : -20,
							reuseExistingChunk : true,
							name : 'commons'
						}
					}
				},
				minimizer : [
					new TerserPlugin({
						terserOptions : {
							ecma : undefined,
							warnings : false,
							parse : {},
							compress : {
								drop_console : true,
								drop_debugger : true,
								pure_funcs : ['console.log'] // 移除console
							}
						}
					})
				]
			};
			config.plugins.push(
				//开启gzip压缩
				new CompressionWebpackPlugin({
					filename : '[path].gz[query]',
					algorithm : 'gzip',
					test : productionGzipExtensions,
					threshold : 10240,
					minRatio : 0.8
				}),
			);
		}
	},
	chainWebpack : config => {
		// 修复HMR
		config.resolve.symlinks(true);
		config.resolve.alias
			.set('@', resolve('src'))
			.set('@components', resolve('src/components'));
		// 打包分析
		if (process.env.IS_ANALYZ) {
			config.plugin('webpack-report')
				.use(BundleAnalyzerPlugin, [{
					analyzerMode : 'server',
					openAnalyzer : true
				}]);
		}
		if (IS_PROD) {
			// 压缩图片
			config.module
				.rule('images')
				.use('image-webpack-loader')
				.loader('image-webpack-loader')
				.options({
					mozjpeg : {
						progressive : true,
						quality : 65
					},
					optipng : {
						enabled : false
					},
					pngquant : {
						quality : [0.65, 0.90],
						speed : 4
					},
					gifsicle : {
						interlaced : false
					},
					webp : {
						quality : 75
					}
				});
		}
	}
};
