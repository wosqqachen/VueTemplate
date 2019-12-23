/**
 * type 0 localStorage, 1 sessionStorage , default 0
 *   
 */
export default class Storage {

  static PREFIXKEY = 'ADMIN_';
  static types = ['localStorage','sessionStorage']

  static get (key,type=0) {
  	let result = window[this.types[type]].getItem(`${this.PREFIXKEY}${key}`);
  	if (result) {
  		try {
  			return JSON.parse(result);
  		} catch (error) {
  			return result;
  		}
  	}
  	return null;
  }

  static set (key, value,type=0) {
  	if (value instanceof Object) {
  		value = JSON.stringify(value);
  	}
  	window[this.types[type]].setItem(`${this.PREFIXKEY}${key}`, value);
  }

  static delete (key,type=0) {
  	window[this.types[type]].removeItem(`${this.PREFIXKEY}${key}`);
  }

  static isObjectEmpty (o) {
  	if (o instanceof Object) {
  		return Object.values(o).filter((v) => v !== '').length === 0;
  	}
  	return true;
  }
}
