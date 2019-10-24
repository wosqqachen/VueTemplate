import Vue from 'vue';
import monitor from 'monitor-web-sdk';

let formatError = (errObj) => {
	let col = errObj.column || errObj.columnNumber; // Safari Firefox
	let row = errObj.line || errObj.lineNumber; // Safari Firefox
	let message = errObj.message;
	let name = errObj.name;

	// 获取堆栈信息
	let { stack } = errObj;
	if (stack) {
		let matchUrl = stack.match(/https?:\/\/[^\n]+/);
		let urlFirstStack = matchUrl ? matchUrl[0] : '';
		let regUrlCheck = /https?:\/\/(\S)*\.js/;

		let resourceUrl = '';
		if (regUrlCheck.test(urlFirstStack)) {
			resourceUrl = urlFirstStack.match(regUrlCheck)[0];
		}

		let stackCol = null;
		let stackRow = null;
		let posStack = urlFirstStack.match(/:(\d+):(\d+)/);
		if (posStack && posStack.length >= 3) {
			[, stackCol, stackRow] = posStack;
		}

		return {
			stack : stack,
			col : Number(col || stackCol),
			row : Number(row || stackRow),
			message,
			name,
			resourceUrl
		};
	}

	return {
		row,
		col,
		message,
		name
	};
};

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

// vue错误捕捉
Vue.config.errorHandler = (error, vm, info) => {
	console.log({ type : 'vue_error', page : location.href, componentName : vm.$options ? vm.$options.name : '', content : info, ...formatError(error) });
};
