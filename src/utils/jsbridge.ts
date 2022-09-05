import { getBrowser } from '@fe-hl/utils';

const { android: isAndroid, ios: isIos } = getBrowser();
function setupWebViewJavascriptBridge(callback) {
	// Android
	if (isAndroid) {
		if (window['WebViewJavascriptBridge']) {
			callback(window['WebViewJavascriptBridge']);
		} else {
			document.addEventListener(
				'WebViewJavascriptBridgeReady',
				function () {
					callback(window['WebViewJavascriptBridge']);
				},
				false
			);
		}
	} else if (isIos) {
		// iOS
		if (window['WebViewJavascriptBridge']) {
			return callback(window['WebViewJavascriptBridge']);
		}

		if (window['WVJBCallbacks']) {
			return window['WVJBCallbacks'].push(callback);
		}

		window['WVJBCallbacks'] = [callback];
		const WVJBIframe = document.createElement('iframe');
		WVJBIframe.style.display = 'none';
		WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
		document.documentElement.appendChild(WVJBIframe);
		setTimeout(function () {
			document.documentElement.removeChild(WVJBIframe);
		}, 0);
	}
}
// js调用原生方法
export function appInvoked(name, params, cb?, errcb?) {
	if (typeof params === 'object') {
		params = JSON.stringify(params);
	} else {
		try {
			params = eval('(' + params + ')');
			if (typeof params === 'object') {
				params = JSON.stringify(params);
			}
		} catch (e) {
			console.log(e);
		}
	}
	if (
		window['WebViewJavascriptBridge'] &&
		window['WebViewJavascriptBridge'].callHandler
	) {
		window['WebViewJavascriptBridge'].callHandler(name, params, function (res) {
			try {
				res = JSON.parse(res);
			} catch (e) {
				console.log(e);
			}
			const code = res.code;
			if (code === 'success') {
				cb && cb(res.result);
			} else {
				errcb && errcb(res);
			}
		});
	} else if (isIos || isAndroid) {
		// 如果首次调用时候webviewbridge未能初始化成功，需要主动再初始化一下
		setupWebViewJavascriptBridge(function () {
			appInvoked(name, params, cb, errcb);
		});
	} else {
		if (name === 'appOpenWebview') {
			window.location.href = JSON.parse(params).url;
		}
		console.log('请在APP内调用' + name + params);
	}
}

// 原生调用方法
export function appGetInvoked(name, cb) {
	if (
		window['WebViewJavascriptBridge'] &&
		window['WebViewJavascriptBridge'].registerHandler
	) {
		window['WebViewJavascriptBridge'].registerHandler(name, cb);
	} else if (isIos || isAndroid) {
		// 如果首次调用时候webviewbridge未能初始化成功，需要主动再初始化一下
		setupWebViewJavascriptBridge(function (bridge) {
			bridge.registerHandler(name, cb);
		});
	} else {
		console.log('请在APP内调用' + name);
	}
}

// 自动初始化jsBridge
setupWebViewJavascriptBridge(function () {
	appInvoked('appWVJBCompleted', { completed: true });
});
