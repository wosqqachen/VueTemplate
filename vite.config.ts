import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import path from 'path';
import postcssPxToViewport from 'postcss-px-to-viewport';
import postcssImport from 'postcss-import';
import autoprefixer from 'autoprefixer';
import postcssUrl from 'postcss-url';
import postcssAspectRatioMini from 'postcss-aspect-ratio-mini';
import postcssWriteSvg from 'postcss-write-svg';
import postcssViewportUnits from 'postcss-viewport-units';
import viteImagemin from 'vite-plugin-imagemin';
// Fix dev server not rewriting the path includes a dot
import pluginRewriteAll from 'vite-plugin-rewrite-all';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

export default ({ mode }) => {
  const IS_PROD = mode === 'production';
  const env = loadEnv(mode, __dirname);
  console.log('env', env);
  return defineConfig({
    base: env.VITE_API_BASE_URL,
    build: {
      // 使用 terser 插件定制压缩选项
      terserOptions: {
        compress: {
          drop_console: IS_PROD,
          drop_debugger: IS_PROD,
        },
      },
    },
    server: {
      host: '0.0.0.0',
      open: true,
      port: 8081,
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:7878',
          changeOrigin: true, // 是否将请求header中的origin修改为目标地址
          // rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
    css: {
      postcss: {
        plugins: [
          postcssImport(),
          autoprefixer(),
          postcssUrl(),
          postcssAspectRatioMini(),
          postcssWriteSvg({ utf8: false }),
          postcssPxToViewport({
            unitToConvert: 'px', // 需要转换的单位
            viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
            viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
            unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
            viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
            fontViewportUnit: 'vw', // 字体使用的视口单位
            selectorBlackList: ['.ignore', '.hairlines', '.donut-'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
            minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
            mediaQuery: false, // 允许在媒体查询中转换`px`
            exclude: /node_modules\/vant/, // 排除 Vant 包
            // exclude: /(\/|\\)(node_modules)(\/|\\)/, // 排除node_modules文件中第三方css文件
          }),
          // vant 是按照375的尺寸
          postcssPxToViewport({
            unitToConvert: 'px', // 需要转换的单位
            viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
            viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
            unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
            viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
            fontViewportUnit: 'vw', // 字体使用的视口单位
            selectorBlackList: ['.ignore', '.hairlines', '.donut-'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
            minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
            mediaQuery: false, // 允许在媒体查询中转换`px`
            include: /node_modules\/vant/, // 只针对 Vant 包
          }),
          postcssViewportUnits({
            filterRule: (rule) =>
              rule.selector.indexOf('::after') === -1 &&
              rule.selector.indexOf('::before') === -1 &&
              rule.selector.indexOf(':after') === -1 &&
              rule.selector.indexOf(':before') === -1 &&
              rule.nodes.findIndex((i) => i.prop === 'content') === -1,
          }),
        ],
      },
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/variables.scss";',
        },
      },
    },
    plugins: [
      vue(),
      Components({
        resolvers: [VantResolver()],
      }),
      pluginRewriteAll(),
      viteImagemin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 7,
        },
        mozjpeg: {
          quality: 80,
        },
        pngquant: {
          quality: [0.8, 0.9],
          speed: 4,
        },
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/svgs')],
        symbolId: 'icon-[dir]-[name]',
      }),
    ],
  });
};
