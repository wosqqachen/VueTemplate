// 高频使用的组件这样来引用

//首字母大写方法
function changeStr(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
// webpack 读取文件方法
const requireComponent = require.context("./", false, /\.vue$/);
// 返回上下模块所有可能请求的数组
const install = Vue => {
  requireComponent.keys().forEach(fileName => {
    const config = requireComponent(fileName);
    const componentName = changeStr(
      fileName.replace(/^\.\//, "").replace(/\.\w+$/, "")
    );
    Vue.component(componentName, config.default || config);
  });
};

export default {
  install
};
