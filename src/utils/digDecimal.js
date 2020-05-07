import * as math from 'mathjs';
/**
 * 给input 复制不需要转换
 * 非input 需要toNumber()
 * 	如:(DigDecimal.add(1,2)).toNumber()
 */
export default class DigDecimal {
	// 加
	static add (numA, numB) {
		return math.bignumber(math.chain(math.bignumber(numA)).add(math.bignumber(numB)).done());
	}
	// 减
	static subtract (numA, numB) {
		return math.bignumber(math.chain(math.bignumber(numA)).subtract(math.bignumber(numB)).done());
	}
	// 乘
	static multiply (numA, numB) {
		return math.bignumber(math.chain(math.bignumber(numA)).multiply(math.bignumber(numB)).done());
	}
	// 除
	static divide (numA, numB) {
		return math.bignumber(math.chain(math.bignumber(numA)).divide(math.bignumber(numB)).done());
	}
	// 分转元
	static fenToYuan (fen) {
		return DigDecimal.divide(fen,100);
	}
	// 元转分
	static yuanToFen (yuan) {
		return DigDecimal.multiply(yuan,100);
	}
}
