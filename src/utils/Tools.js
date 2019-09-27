
export default class Tool {
	// 节流
	static throttle (fn, delay) {
		let timer = null;
		let starTime = new Date();
		return () => {
			let curTime = new Date();
			clearInterval(timer);
			// 规定的时间触发，不然用户一直操作就一直不会触发
			if (curTime - starTime >= delay) {
				starTime = curTime;
				fn();
			} else {
				timer = setTimeout(fn, delay);
			}
		};
	}

	// 防抖
	static debounce (fn, delay) {
		let timer = null;
		return () => {
			clearInterval(timer);
			timer = setTimeout(fn, delay);
		};
	}
}
