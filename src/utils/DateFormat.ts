import dayjs from 'dayjs';

export default class DateFormat {
	/**
	 * describe 日期格式化
	 * @param {*} d {Date|Number}日期/时间戳
	 * @param {*} format 自定义的格式
	 * @returns {String} YYYY-MM-DD HH:mm:ss
	 */
	static dateFormat(d = new Date(), format = 'YYYY-MM-DD') {
		return dayjs(this._correct(d)).format(format);
	}
	/**
	 * describe 日期格式化 YYYY-MM-DD HH:mm:ss
	 * @param d {Date|Number}日期/时间戳
	 * @returns {String} YYYY-MM-DD HH:mm:ss
	 */
	static YYYYMMDDHHmmss(d) {
		return dayjs(this._correct(d)).format('YYYY-MM-DD HH:mm:ss');
	}
	/**
	 * describe 日期格式化 YYYY-MM-DD
	 * @param d {Date|Number}日期/时间戳
	 * @returns {String} YYYY-MM-DD
	 */
	static YYYYMMDD(d) {
		return dayjs(this._correct(d)).format('YYYY-MM-DD');
	}
	/**
	 * describe 日期格式化 HH:mm:ss
	 * @param d {Date|Number}日期/时间戳
	 * @returns {String} HH:mm:ss
	 */
	static HHmmss(d) {
		return dayjs(this._correct(d)).format('HH:mm:ss');
	}
	/**
	 * describe 日期/时间戳转=>时间戳
	 * @param d {Date|Number}日期/时间戳
	 * @returns {Number} 时间戳转
	 */
	static dateTime(d) {
		return dayjs(this._correct(d)).valueOf();
	}
	/**
	 * describe 加天数
	 * @param n {Number} 天数
	 * @param d {String|Date} 日期
	 * @returns {Date} YYYYMMDD
	 */
	static addDay(n, d = new Date()) {
		return DateFormat.YYYYMMDD(dayjs(d).add(n, 'day'));
	}

	/**
	 * describe 减天数
	 * @param n {Number} 天数
	 * @param d {String|Date} 日期
	 * @returns {Date} YYYYMMDD
	 */
	static subtractDay(n, d = new Date()) {
		return DateFormat.YYYYMMDD(dayjs(d).subtract(n, 'day'));
	}

	/**
	 * describe 加月份
	 * @param n {Number} 月数
	 * @param d {String|Date} 日期
	 * @returns {Date} YYYYMMDD
	 */
	static addMonth(n, d = new Date()) {
		return DateFormat.YYYYMMDD(dayjs(d).add(n, 'month'));
	}

	/**
	 * describe 减月份
	 * @param n {Number} 月数
	 * @param d {String|Date} 日期
	 * @returns {Date} YYYYMMDD
	 */
	static subtractMonth(n, d = new Date()) {
		return DateFormat.YYYYMMDD(dayjs(d).subtract(n, 'month'));
	}

	/**
	 * describe 加年份
	 * @param n {Number} 年数
	 * @param d {String|Date} 日期
	 * @returns {Date} YYYYMMDD
	 */
	static addYears(n, d = new Date()) {
		return DateFormat.YYYYMMDD(dayjs(d).add(n, 'years'));
	}

	/**
	 * describe 减年份
	 * @param n {Number} 年数
	 * @param d {String|Date} 日期
	 * @returns {Date} YYYYMMDD
	 */
	static subtractYears(n, d = new Date()) {
		return DateFormat.YYYYMMDD(dayjs(d).subtract(n, 'years'));
	}

	/**
	 * describe 年差
	 * @param d {String|Date} 日期
	 * @param diffDate {String|Date} 对比的日期
	 * @returns {Number} 几年
	 */
	static diffYears(diffDate, d = new Date()) {
		return dayjs(d).diff(dayjs(diffDate), 'years');
	}
	/**
	 * describe 月差
	 * @param d {String|Date} 日期
	 * @param diffDate {String|Date} 对比的日期
	 * @returns {Number} 几月
	 */
	static diffMonth(diffDate, d = new Date()) {
		return dayjs(d).diff(dayjs(diffDate), 'month');
	}

	/**
	 * describe 天差
	 * @param d {String|Date} 日期
	 * @param diffDate {String|Date} 对比的日期
	 * @returns {Number} 几天
	 */
	static diffDay(diffDate, d = new Date()) {
		return dayjs(d).diff(dayjs(diffDate), 'day');
	}

	/**
	 * describe 时差
	 * @param d {String|Date} 日期
	 * @param diffDate {String|Date} 对比的日期
	 * @returns {Number} 小时
	 */
	static diffHour(diffDate, d = new Date()) {
		return dayjs(d).diff(dayjs(diffDate), 'hour');
	}

	static _correct(d) {
		return (d = typeof d === 'string' ? Number(d) : d);
	}
}
