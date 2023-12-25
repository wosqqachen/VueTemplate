/* eslint-disable */
// 千位，分割数字
export function formatNumber(num: string | number = "") {
  let decimalPart = "";
  num = num.toString();
  if (num.indexOf(".") != -1) {
    decimalPart = "." + num.split(".")[1];
    num = parseInt(num.split(".")[0]);
  }
  const array = num.toString().split("");
  let index = -3;
  while (array.length + index > 0) {
    array.splice(index, 0, ",");
    index -= 4;
  }
  return array.join("") + decimalPart;
}

export function millisecondToTimestr(milliseconds: number, hasDay = false) {
  const c = milliseconds;
  let d, h, m, s;
  let ms = 0;
  (d = parseInt((c / 1000 / 60 / 60 / 24).toString())),
    (h = parseInt((c / 1000 / 60 / 60 - 24 * d).toString())),
    (m = parseInt((c / 1000 / 60 - 24 * 60 * d - 60 * h).toString())),
    (s = parseInt(
      (c / 1000 - 24 * 60 * 60 * d - 60 * 60 * h - 60 * m).toString()
    ));
  ms = Math.floor(
    (c -
      24 * 60 * 60 * 1000 * d -
      60 * 60 * 1000 * h -
      60 * 1000 * m -
      s * 1000) /
      100
  );
  let hh, mm: any, ss;
  let seconds = milliseconds / 1000;
  // 传入的时间为空或小于0
  if (seconds == null || seconds < 0) {
    return;
  }
  seconds = Math.ceil(seconds);
  // 得到小时
  hh = (seconds / 3600) | 0;
  seconds = seconds - hh * 3600;
  if (hh < 10) {
    hh = `0${hh}`;
  }
  // 得到分
  mm = (seconds / 60) | 0;
  if (mm < 10) {
    mm = `0${mm.toString()}`;
  }
  // 得到秒
  ss = seconds - mm * 60;
  if (ss < 10) {
    ss = `0${ss}`;
  }

  if (hasDay) {
    const day = Math.floor(Number(hh) / 24);
    const dayH = Math.floor(Number(hh) % 24);
    const dayHh = dayH < 10 ? `0${dayH}` : dayH;
    if (day) {
      return `${day}天 ${dayHh}:${mm}:${ss}.${ms}`;
    } else {
      return `${hh}:${mm}:${ss}`;
    }
  }
  return `${mm}:${ss}`;
}

export function secondsToTimestr(seconds: number, hasHour = false) {
  let hh, mm: any, ss;
  // 传入的时间为空或小于0
  if (seconds == null || seconds < 0) {
    return;
  }
  seconds = Math.ceil(seconds);
  // 得到小时
  hh = (seconds / 3600) | 0;
  seconds = seconds - hh * 3600;
  if (hh < 10) {
    hh = `0${hh}`;
  }
  // 得到分
  mm = (seconds / 60) | 0;
  if (mm < 10) {
    mm = `0${mm.toString()}`;
  }
  // 得到秒
  ss = seconds - mm * 60;
  if (ss < 10) {
    ss = `0${ss}`;
  }
  if (hasHour) {
    return `${hh}:${mm}:${ss}`;
  }
  return `${mm}:${ss}`;
}

/**
 * 秒转时间字符串
 * @param seconds
 * @param showS
 * @param showM
 * @param showH
 * @param showD
 */
export function secondsToTimestr1(
  seconds: number,
  showD: boolean = true,
  showH: boolean = true,
  showM: boolean = true,
  showS: boolean = true
) {
  let dd: number | string,
    hh: number | string,
    mm: number | string,
    ss: number | string;
  // 传入的时间为空或小于0
  if (seconds == null || seconds < 0) {
    return;
  }

  seconds = Math.ceil(seconds);
  // 得到天
  dd = ~~(seconds / 86400);
  seconds = seconds - dd * 86400;
  // 得到小时
  hh = (seconds / 3600) | 0;
  seconds = seconds - hh * 3600;
  if (hh < 10) hh = `0${hh}`;
  // 得到分
  mm = (seconds / 60) | 0;
  if (mm < 10) mm = `0${mm.toString()}`;
  // 得到秒
  ss = seconds - Number(mm) * 60;
  if (ss < 10) ss = `0${ss}`;

  const _arr: Array<number | string> = [];
  _arr[0] = dd;
  _arr[1] = hh;
  _arr[2] = mm;
  _arr[3] = ss;

  return `${showD ? _arr[0] + "天" : ""}${showH ? _arr[1] + "时" : ""}${
    showM ? _arr[2] + "分" : ""
  }${showS ? _arr[3] + "秒" : ""}`;
}

// 时间戳转时间 2018.8.29 15:30
export function toTime(timestamp: any) {
  const date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  const Y = date.getFullYear() + ".";
  const M =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + ".";
  const D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
  const h =
    (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
  const m =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  return Y + M + D + h + m;
}

export function toTimeZh(timestamp: any) {
  const date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  const Y = date.getFullYear() + "年";
  const M = date.getMonth() + 1 + "月";
  const D = date.getDate() + "日";
  const h =
    (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
  const m =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  return Y + M + D + h + m;
}

export function toTimeZh2(timestamp: any) {
  const date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  const Y = date.getFullYear() + "年";
  const M = date.getMonth() + 1 + "月";
  const D = date.getDate() + "日";
  const h =
    (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + "时";
  const m =
    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
    "分";
  return Y + M + D + h + m;
}

export function toTimeZh3(timestamp: any) {
  const date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  const Y = date.getFullYear() + "年";
  const M = date.getMonth() + 1 + "月";
  const D = date.getDate() + "号";

  return Y + M + D;
}

/**
 * 转为url参数
 */
export function parseParam(param: any) {
  let str = "";
  for (const key in param) {
    if (Object.prototype.hasOwnProperty.call(param, key)) {
      const value = param[key];
      if (value) {
        str += `&${key}=${value}`;
      }
    }
  }
  return str.replace("&", "");
}

export function getParam(link?: string) {
  const url = link || location.search; //获取url中"?"符后的字串
  const theRequest: any = {};
  if (url.indexOf("?") != -1) {
    const str = url.substr(1);
    const strs = str.split("&");
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
  }
  return theRequest;
}

// unescape 被废弃

export function getParam2() {
  const url = location.search; //获取url中"?"符后的字串
  const theRequest: any = {};
  if (url.indexOf("?") != -1) {
    const str = url.substr(1);
    const strs = str.split("&");
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = decodeURIComponent(
        strs[i].split("=")[1]
      );
    }
  }
  return theRequest;
}

export function GetRequestOptions() {
  var url = location.search; //获取url中"?"符后的字串
  var theRequest: any = new Object();
  if (url.indexOf("?") != -1) {
    let str = url.substr(1);
    let strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
    }
  }
  return theRequest;
}

// 排序
export function compare(property: string) {
  return function(a: any, b: any) {
    const value1 = parseInt(a[property]);
    const value2 = parseInt(b[property]);
    return value1 - value2;
  };
}

/**
 * 只舍不入 保留2位小数（不够位数，则用0替补）
 * @param num 数字必须为小数
 * @returns
 */
export function toDecimal2(x: number) {
  let f = Math.floor(x * 100) / 100;
  let s = f.toString();
  let rs = s.indexOf(".");
  if (rs < 0) {
    rs = s.length;
    s += ".";
  }
  while (s.length <= rs + 2) {
    s += "0";
  }
  return s;
}

export interface IImgFileToBase64Res {
  url?: string;
  base64?: string;
  clearBase64?: string;
  suffix?: string;
}

/**
 * 图片文件转base64 canvas压缩
 * @param imgItem
 * @param cb
 */
export function imgFileToBase64(
  imgItem: File,
  cb = (res: IImgFileToBase64Res) => {}
) {
  const file = imgItem;
  const reader = new FileReader();
  reader.onload = function() {
    const img: any = new Image();
    img.src = reader.result;
    img.onload = function() {
      const w = img.width,
        h = img.height;
      const canvas = document.createElement("canvas");
      const ctx: any = canvas.getContext("2d");
      canvas.setAttribute("width", w);
      canvas.setAttribute("height", h);
      ctx.drawImage(img, 0, 0, w, h);
      const base64 = canvas.toDataURL("image/jpeg", 0.5);
      const result: IImgFileToBase64Res = {
        url: window.URL.createObjectURL(file),
        base64: base64,
        clearBase64: base64.substr(base64.indexOf(",") + 1),
        suffix: base64.substring(base64.indexOf("/") + 1, base64.indexOf(";"))
      };
      cb(result);
    };
  };
  reader.readAsDataURL(imgItem);
}

// 生成随机数
export function random(b: number, e: number) {
  return b + Math.floor(Math.random() * e);
}

/**
 * 数值过万处理
 * @param dealNum 需要处理的数值
 * @param spliceText 处理后要拼接文字
 * @param numb 保留小数点后的个数
 */
export function millionDeal(
  dealNum: string | number,
  spliceText: string,
  numb: number = 1
) {
  const dealBeforeNum = Number(dealNum);
  let dealAfterNum: string | number = 0;
  if (!dealBeforeNum) return dealAfterNum;
  if (dealBeforeNum > 9999) {
    dealAfterNum = `${Math.floor(dealBeforeNum / Math.pow(10, 4 - numb)) /
      Math.pow(10, numb)}${spliceText}`;
  } else if (dealBeforeNum <= 9999 && dealBeforeNum > 0) {
    dealAfterNum = dealBeforeNum;
  }
  return dealAfterNum;
}

/**
 * 数值过万处理(小数点保留两位小数，不要向上/下取整)
 * @param dealNum 需要处理的数值
 * @param spliceText 处理后要拼接文字
 */
export function millionDealNew(dealNum: string | number, spliceText: string) {
  const dealBeforeNum = Number(dealNum)
  let dealAfterNum: string | number = 0
  if (!dealBeforeNum) return dealAfterNum
  if (dealBeforeNum > 9999) {
    const dealNum = ((dealBeforeNum / 10000) * 100) / 100
    const dealNumStr = dealNum.toString()
    if (dealNumStr.indexOf('.') > -1) {
      dealAfterNum = `${dealNumStr.substring(0, dealNumStr.indexOf('.') + 3)}${spliceText}`
    } else {
      dealAfterNum = `${dealNumStr}${spliceText}`
    }
  } else if (dealBeforeNum < 9999 && dealBeforeNum > 0) {
    dealAfterNum = dealBeforeNum
  }
  return dealAfterNum
}
