/**
 * type 0 localStorage | 1 sessionStorage , default 1
 */
const PREFIXKEY = 'DONUT_H5';
const types = ['localStorage', 'sessionStorage'];
export const storageGet = (key, type = 1) => {
	const result = window[types[type]].getItem(`${PREFIXKEY}${key}`);
	if (result) {
		try {
			return JSON.parse(result);
		} catch (error) {
			return result;
		}
	}
	return null;
};

export const storageSet = (key, value, type = 1) => {
	if (value instanceof Object) {
		value = JSON.stringify(value);
	}
	window[types[type]].setItem(`${PREFIXKEY}${key}`, value);
};

export const storageDelete = (key, type = 1) => {
	window[types[type]].removeItem(`${PREFIXKEY}${key}`);
};
