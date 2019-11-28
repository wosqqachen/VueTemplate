import Vue from 'vue';
import monitor from 'monitor-web-sdk';

new monitor({
	isErrorCatch : true, // js错误监控
	isErrorResource : true, // 静态资源加载错误监控
	isXhrHook : true, // 接口监控
	isResources : true, // 资源加载耗时监控
	isPerf : true, // 页面加载耗时监控
	vue : Vue // vue 错误收集
}).init(err => {
	// 错误回调
	console.log(err);
});
