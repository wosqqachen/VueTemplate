// 检验手机号码
export const patternMobile = /^(1[3-9])\d{9}$/i;
export const isMobile = (value: string): boolean => {
	return patternMobile.test(value);
};

// 检验短信
export const patternSMs = /^\d{6}$/;
export const isSMs = (value: string): boolean => {
	return patternSMs.test(value);
};

// 非纯数字
export const patternNumber = /\D+/g;
// 非数字替换为空
export const noNumericToBlank = (value: string): string =>
	value.replace(patternNumber, '');

// 身份证号
export const patternCard = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{2})(\d)(\d|X|x)$/;
export const isCard = (value: string): boolean => {
	return patternCard.test(value);
};
