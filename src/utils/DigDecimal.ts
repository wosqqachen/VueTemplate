import Big from 'big.js';
export default class DigDecimal {
	// 加
	static add(numA, numB) {
		return new Big(numA).plus(new Big(numB)).toString();
	}
	// 减
	static subtract(numA, numB) {
		return new Big(numA).minus(new Big(numB)).toString();
	}
	// 乘
	static multiply(numA, numB) {
		return new Big(numA).times(new Big(numB)).toString();
	}
	// 除
	static divide(numA, numB) {
		if (Number(numA) === 0 && Number(numB) === 0) return 0;
		return new Big(numA).div(new Big(numB)).toString();
	}
	// 四舍五入
	static round(num, digits = 2) {
		return new Big(num).round(digits).toString();
	}

	// 分转元
	static fenToYuan(fen) {
		const amt = Number(DigDecimal.divide(fen, 100));
		return amt.toFixed(2);
	}
	// 元转分
	static yuanToFen(yuan) {
		const amt = Number(DigDecimal.multiply(yuan, 100));
		return amt.toFixed(2);
	}
	// 元转万
	static yuanTowan(yuan, digits = 2) {
		if (yuan) {
			return Number(DigDecimal.divide(yuan, 10000)).toFixed(digits);
		}
		return digits == 2 ? '0.00' : 0;
	}
}
