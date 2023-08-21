/* eslint-disable */
/**
 * 客户端交互基础模块
 * @description 客户端交互基础模块. 尽量不要修改.
 * @example import zysrf from 'zysrf-app';
 */
const ua = window.navigator.userAgent;
const isIos = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // IOS终端

/**
 * 生成随机字符串
 * @param {*} len
 */
const generateRandomAlphaNum = (len: number) => {
  let rdmString = "";
  for (
    ;
    rdmString.length < len;
    rdmString += Math.random()
      .toString(36)
      .substr(2)
  );
  return rdmString.substr(0, len);
};

/**
 * clientInteraction
 * @param {*} _json
 */
// eslint-disable-next-line no-unused-vars
const clientInteraction = (_json: any) => {
  if (typeof _json !== "object") {
    throw "参数不正确,请使用 json 格式参数";
  }
  //客户端调用方法
  try {
    console.log("bef post message: ", _json);
    if (isIos) {
      // 苹果
      (<any>window).webkit.messageHandlers.JSToNative_iOS.postMessage(_json);
    } else {
      // 安卓
      (<any>window).JSToNative.postMessage(JSON.stringify(_json));
    }
  } catch {
    console.error("app交互失败或参数不正确");
  }
};

/**
 * 获取 url 的 host 地址
 * @param url 地址
 * @returns
 */
const getHost = (url: string): string => {
  const _url = new URL(url);
  return _url.host;
};

/**
 * 替换主域名
 * DNIOS-1179 【H5】跳板域名支持
 */
const repleaseHosts = (url: string): string => {
  try {
    const hostStr = localStorage.getItem("HostCDN");
    let _url = url;
    if (hostStr) {
      const hostJson = JSON.parse(hostStr + "");
      console.log("hostJson: ", hostJson);
      const _host = getHost(url);
      const hjv = hostJson[_host];
      console.log("> replease hosts: ", _host, "->", hjv);

      if (hjv) {
        const exg = new RegExp(`\/\/${_host}`);
        _url = url.replace(exg, "//" + hjv);
      }
    }
    return _url;
  } catch (error) {
    return url;
  }
};

/**
 * api请求 base 方法
 */
const apiBase = {
  doBaseRequest: (_json: any) => {
    const callbackName = `__${generateRandomAlphaNum(8)}`;
    const failbackName = `_${callbackName}`;

    const cb_ok = _json["callback"];
    const cb_err = _json["failback"];

    _json["callback"] = callbackName;
    _json["failback"] = failbackName;

    (<any>window)[callbackName] = (res: any) => {
      console.log((_json.url || _json.method) + "==>");
      console.log(res);
      cb_ok && cb_ok(res);
      (<any>window)[callbackName] = () => {};
    };
    (<any>window)[failbackName] = (res: any) => {
      console.log((_json.url || _json.method) + "==>failback");
      console.log(res);
      cb_err && cb_err(res);
      (<any>window)[failbackName] = () => {};
    };
    clientInteraction(_json);
  }
};

/**
 * 公共的 api
 */
const api = {
  //
  initial: function() {
    console.log("app request init");
    const t = new Date();
    api.clientRequest("getHostCDNConfig", {}, res => {
      console.log("getHostCDNConfig: ", res);
      if (!res) return;
      const _json = JSON.stringify(res);
      localStorage.setItem("HostCDN", _json);
      console.log(
        "getHostCDNConfig 用时: ",
        new Date().getTime() - t.getTime()
      );
    });
  },

  /**
   * clientRequest
   */
  clientRequest: (
    _method: any,
    _params: any,
    _cb_ok = (params?: any) => {},
    _cb_err = (params?: any) => {}
  ) => {
    const _obj = {
      method: _method,
      params: _params,
      callback: _cb_ok,
      failback: _cb_err
    };
    apiBase.doBaseRequest(_obj);
  },

  /**
   * 通用的请求方法
   * @description 针对URL的请求
   * _url 请求地址
   * _params 参数
   * _cb_ok 成功回调
   * _cb_err 失败回调
   * _encryptType 请求接口类型
   * _secondAndRiskCommon 是否需要二级公参以及风控参数
   */
  commonRequest: (
    _url: string,
    _params: any,
    _cb_ok = (params?: any) => {},
    _cb_err = (params?: any) => {},
    _encryptType: "encrypt_type_php" | "encrypt_type_java" = "encrypt_type_php",
    _secondAndRiskCommon = false
  ) => {
    const __url = repleaseHosts(_url);
    const _obj = {
      method: "commonRequest",
      url: __url,
      params: {
        secondAndRiskCommon: _secondAndRiskCommon,
        encrypt_type: _encryptType,
        lt: "__lt__",
        pagekey: "",
        ..._params
      },
      callback: _cb_ok,
      failback: _cb_err
    };
    apiBase.doBaseRequest(_obj);
  }
};

api.initial();

export default api;
