import Vue from 'vue';
import monitor from 'monitor-web-sdk';
// js错误监控
monitor.errorCatch.init(err => {
	console.log('errorCatch', err);
});

// 静态资源加载错误监控
monitor.errorResource.init(err => {
	console.log('errorResource', err);
});

// 接口监控
monitor.xhrHook.init(data => {
	console.log('xhrHook', data);
});

// 资源加载耗时监控
monitor.resources.init(data => {
	console.log('resources', data);
});

// 页面加载耗时监控
monitor.perf.init(data => {
	console.log('perf', data);
});

Vue.config.errorHandler = (error, vm, info) => {
	console.log({
		error,
		type : 'vue errorHandler',
		vm,
		info
	});
};
