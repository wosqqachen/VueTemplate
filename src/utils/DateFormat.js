import dayjs from 'dayjs';

export default class DateFormat{
	// 日期/时间戳转YYYY-MM-DD HH:mm:ss
	static YYYYMMDDHHmmss (d){
		return dayjs(this._correct(d)).format('YYYY-MM-DD HH:mm:ss');
	}
	// 日期/时间戳转YYYY-MM-DD
	static YYYYMMDD (d){
		return dayjs(this._correct(d)).format('YYYY-MM-DD');
	}
	 // 日期/时间戳转HH:mm:ss
	 static HHmmss (d){
		return dayjs(this._correct(d)).format('HH:mm:ss');
	}
	// 日期转时间戳
	static dateTime (d){
		return dayjs(this._correct(d)).valueOf();
	}

	static _correct (d){
		return d = typeof d === 'string' ? Number(d) : d;
	}

}
