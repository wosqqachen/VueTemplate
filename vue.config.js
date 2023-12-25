const pages = require("./pages.config.ts");
const CompressionPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = ["js", "css"];
const isProduction = process.env.NODE_ENV === "production";
const isProductionBuild = process.env.VUE_APP_CURRENTMODE === "prod";
const path = require("path");
function resolve(dir) {
  //此处使用path.resolve 或path.join 可自行调整
  return path.join(__dirname, dir);
}

function getConfig() {
  const config = {};
  // 获取自定义参数
  let idx = 2;

  if (process.env.npm_config_argv) {
    const argv = JSON.parse(process.env.npm_config_argv);
    const cooked = argv.cooked;
    const length = argv.cooked.length;
    while ((idx += 2) <= length) {
      config[cooked[idx - 2]] = cooked[idx - 1];
    }
  } else {
    // 兼容高版本 npm (npm > 6)
    const _env = Object.keys(process.env);
    for (const n of _env) {
      if (n.indexOf("npm_config_") == 0) {
        const _key = n.slice("npm_config_".length);
        config["--" + _key] = process.env[n];
      }
    }
  }
  return config;
}

function getPages() {
  const configs = getConfig();
  const runPage = configs["--pages"];
  // if (process.env.VUE_APP_CURRENTMODE === "dev") {
  //   for (const key in pages) {
  //     if (!pages[key].isDev) {
  //       delete pages[key];
  //     }
  //   }
  // }
  console.log("开发配置", pages);
  if (!runPage) return pages;
  const _pagesC = {};
  runPage.split(",").forEach(item => {
    if (!_pagesC["index"]) _pagesC["index"] = pages[item];
    _pagesC[item] = pages[item];
  });
  return _pagesC;
}

module.exports = {
  // 基本路径
  publicPath: "./",
  // 输出文件目录
  outputDir: isProductionBuild ? "dist" : "pre",
  lintOnSave: process.env.NODE_ENV !== "production",
  devServer: {
    // 当出现编译器错误或警告时，在浏览器中显示

    overlay: {
      warnings: true,
      errors: true
    }

    // proxy: {
    //   "/shop": {
    //     target: "https://test-p-douni.tt.cn/", //接口域名
    //     changeOrigin: true, //是否跨域
    //     ws: true, //是否代理 websockets
    //     secure: true, //是否https接口
    //     pathRewrite: {
    //       //路径重置
    //       "^/shop": "/shop"
    //     }
    //   }
    // }
  },
  // 生产环境sourceMap
  productionSourceMap: false,
  pages: getPages(),
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract:
      process.env.NODE_ENV === "production"
        ? {
            ignoreOrder: true
          }
        : false,
    // 开启 CSS source maps?
    sourceMap: false
  },
  configureWebpack: config => {
    if (isProduction) {
      // 利用splitChunks单独打包第三方模块
      config.optimization = {
        splitChunks: {
          cacheGroups: {
            // vendors: {
            //   test: /[\\/]node_modules[\\/]/, // 指定是node_modules下的第三方包
            //   name: "chunk-vendors",
            //   chunks: "all",
            //   priority: -10 // 抽取优先级
            // },
            // // 抽离自定义工具库
            // utilCommon: {
            //   name: "chunk-common",
            //   minSize: 1024, // 将引用模块分离成新代码文件的最小体积
            //   minChunks: 2, // 表示将引用模块如不同文件引用了多少次，才能分离生成新chunk
            //   priority: -20
            // }
          }
        }
      };
      // 打包分析工具
      // config.plugins.push(new BundleAnalyzerPlugin());
      // 打包生产.gz包
      config.plugins.push(
        new CompressionPlugin({
          algorithm: "gzip",
          test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
          threshold: 10240,
          minRatio: 0.8
        })
      );
    }
  },
  chainWebpack: function  (config) {
                                     config.resolve.alias
                                       .set("@", resolve("./src"))
                                       .set("assets", resolve(".src/assets"))
                                       .set(
                                         "components",
                                         resolve("./src/components")
                                       );
                                     config.plugins.delete("prefetch");
                                     config.module
                                     .rule('svga')
                                     .test(/\.svga$/)
                                     .use('url-loader')
                                     .loader('url-loader')
                                     .tap((options) => Object.assign(options || {}, { limit: 1 , name: 'svga/[name].[hash:8].[ext]',esModule:false}))
                                     .end();

                                     // config.module
                                     //   .rule("images")
                                     //   .use("image-webpack-loader")
                                     //   .loader("image-webpack-loader")
                                     //   .options({
                                     //     bypassOnDebug: true
                                     //   })
                                     //   .end();
                                   }
};
