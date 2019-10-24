export default class Storage {
	static get (key) {
		let result = localStorage.getItem(key);
		if (result) {
			try {
				return JSON.parse(result);
			} catch (error) {
				return result;
			}
		}
		return null;
	}

	static set (key, value) {
		if (value instanceof Object) {
			value = JSON.stringify(value);
		}
		localStorage.setItem(key, value);
	}

	static delete (key) {
		localStorage.removeItem(key);
	}

	static isObjectEmpty (o) {
		return Object.values(o).filter((v) => v !== '').length === 0;
	}
}
