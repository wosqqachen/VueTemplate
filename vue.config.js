const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,//关闭语法检查
  devServer: {
    // host:getNetworkIp(),
    https: false,
    proxy: {
      '/api': {//代理标识，一般是每个接口前的相同部分
        target: 'http://192.168.1.250:86', // 这里写的是访问接口的域名和端口号
        changeOrigin: true, // 允许跨域请求
        secure: false,
        pathRewrite: { // 重写路径，替换请求地址中的指定路径
          '^/api': ''
        }
      }
    }
  },
  // productionSourceMap: true,
  // outputDir: "dist",
  // assetsDir: "static",
  // filenameHashing: false,
  publicPath: './'
})
