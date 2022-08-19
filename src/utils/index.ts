interface IThousandsProps {
	num?: number | string; // 需要转换的数字
	decimals?: number; // 保留几位小数
	decimal?: string; // 十进制分割
	separator?: string; // 千分位分割符
	prefix?: string; // 前缀
	suffix?: string; // 后缀
}
export function thousands({
	num,
	decimals = 0,
	decimal = '.',
	separator = ',',
	prefix = '',
	suffix = '',
}: IThousandsProps = {}): string {
	if ((num as number) <= 0) {
		return '0.00';
	}
	num = Number(num).toFixed(decimals);
	num += '';
	const x = num.split('.');
	let x1 = x[0];
	const x2 = x.length > 1 ? decimal + x[1] : '';
	const rgx = /(\d+)(\d{3})/;
	if (separator && isNaN(parseFloat(separator))) {
		while (rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' + separator + '$2');
		}
	}
	return prefix + x1 + x2 + suffix;
}

interface Icallback {
	(): void;
}

// 远程加载script脚本
export const loadScript = (url: string, callback: Icallback) => {
	const script = document.createElement('script');
	script.onload = () => {
		callback && callback();
	};
	script.src = url;
	document.body.appendChild(script);
};

// 获取url参数
export const queryUrlParams = (url = location.href): any => {
	const res = {};
	url.replace(/([^?=&#]+)=([^?=&#]+)/g, (params: any): any => {
		const arr = params.split('=');
		res[arr[0]] = arr[1];
	});
	return res;
};

// state对象直接赋值会改变引用(失去响应式)
export const deepStateCopy = (state, data) => {
	for (const key in data) {
		state[key] = data[key];
	}
};
// state对象属性
export const deleteStateKeys = state => {
	for (const key in state) {
		delete state[key];
	}
};

// 手机号输入格式化
export const mobileFormat = mobileStr => {
	const inputMobile = mobileStr.replace(/\s|\D/gi, '');
	return /(\d{3})?(\d{1,4})?(\d{1,4})?/
		.exec(inputMobile)
		?.slice(1, 4)
		.join(' ')
		.trim();
};

// 身份证输入格式化
export const cardFormat = cardStr => {
	const inputCard = cardStr.replace(/\s|\D/gi, '');
	const cardNo = /(\d{6})?(\d{1,8})?(\d{1,4})?/
		.exec(inputCard)
		?.slice(1, 4)
		.join(' ')
		.trim();
	const x = cardStr[19];
	return ['x', 'X'].includes(x) ? `${cardNo}${x}` : cardNo;
};

// 银行卡输入格式化
export const bankCardFormat = bankCardStr => {
	const inputBankCardStr = bankCardStr.replace(/\s|\D/gi, '');
	return /(\d{4})?(\d{1,4})?(\d{1,4})?(\d{1,4})?(\d{1,4})?/
		.exec(inputBankCardStr)
		?.slice(1, 6)
		.join(' ')
		.trim();
};

//获取browser类型
export const getBrowser = () => {
	const u = navigator.userAgent;
	return {
		trident: u.indexOf('Trident') > -1, //IE内核
		presto: u.indexOf('Presto') > -1, //opera内核
		webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
		gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, //火狐内核
		mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
		ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
		android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
		iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
		iPad: u.indexOf('iPad') > -1, //是否iPad
		webApp: u.indexOf('Safari') === -1, //是否web应该程序，没有头部与底部
		qq: u.match(/QQ\/[0-9]/i) ? true : false, // 是否QQ
		qqBrowser: u.indexOf('QQBrowser') > -1, // 是否QQ浏览器
		ali: u.indexOf('AlipayClient') > -1, // 是否支付宝
		weixin: u.indexOf('MicroMessenger') > -1, //是否微信
		yys: u.indexOf('UnionPay') > -1, //是否云闪付
	};
};

// 自动注入modules
export const AutoInjectModule = (
	files,
	ignore: Array<string> = [],
	suffix: '.ts' | '.js' = '.ts'
) => {
	const modules = {};
	files.keys().forEach((key: string) => {
		if (!ignore.some(item => key.includes(item))) {
			const childModule = files(key).default;
			const moduleKey = key.slice(key.lastIndexOf('/') + 1).replace(suffix, '');
			modules[moduleKey] = childModule;
		}
	});
	return modules;
};
