/**
 * @author ydq
 * @date 2019/05/28
 * @description 公共事件锁
 */
class _Locker {
  private _locker: any = {};

  /**
   * 设置存储位置
   * @param place
   * "session" sessionStorage
   * "local" localStorage
   * "memory" 内存中 (页面的刷新可能会导致锁数据丢失)
   */
  setSP(place: "session" | "local" | "memory" = "memory") {
    if (place == "session") this._locker = window.sessionStorage;
    if (place == "local") this._locker = window.localStorage;
  }

  clear(): void {
    this._locker = {};
  }

  // 获取锁状态
  get(key: string): boolean {
    const _key: string = `Locker_key_${key}`;
    return !!this._locker[_key];
  }
  // 锁
  lock(key: string): boolean {
    const _key: string = `Locker_key_${key}`;
    this._locker[_key] = '1';
    return true;
  }
  // 解锁
  unlock(key: string): boolean {
    const _key: string = `Locker_key_${key}`;
    this._locker[_key] = '';
    return false;
  }

  /**
   * 可以自动解锁的 锁
   * 获取 key锁 的状态
   * 如果 没有锁 则上锁,并在 500 毫秒后自动解锁
   * 如果 在锁 则返回上锁状态
   * @param {*} key
   * @param {*} time
   */
  autoLocker(key: string, time = 500): boolean {
    const _now: number = Date.now();

    const _key: string = `Locker_key_${key}`;

    // 时间阀值越界处理
    this.resetAutoLocker(_now, _key, time);

    const isLock: boolean = _now < (this._locker[_key] || 0);
    if (isLock == false) {
      this._locker[_key] = _now + time;
      return false;
    }

    return isLock;
  }

  /**
   * 因为与客户端时间相关，所以需要一个阀值范围判断
   * @param now 当前时间
   * @param key key
   * @param time 阀值范围
   */
  private resetAutoLocker(now: number, key: string, time: number) {
    const _t1 = this._locker[key];
    if (!_t1) return;

    if (Math.abs(now - _t1) > time) {
      // 当前时间 与 存储时间差 > 阀值范围
      this._locker[key] = now;
    }
  }
}

const mLocker = new _Locker();
mLocker.setSP("session");
export default mLocker;
