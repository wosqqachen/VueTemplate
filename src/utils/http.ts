import { parseParam } from "@/utils/util";
import { jsonp } from "vue-jsonp";
import axios from "axios";

export function ajaxPost(url: string, params?: object): Promise<any> {
  return new Promise((resolve, reject) => {
    const ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
      if (ajax.readyState == 4 && ajax.status == 200) {
        const msg = ajax.responseText;
        const json = JSON.parse(msg);
        console.log("ajax success: ", json);
        resolve(json);
      }
    };
    ajax.onerror = function(res: any) {
      console.log("ajax error: ", res);
      reject(res);
    };
    ajax.open("post", url);
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    const strParams = parseParam(params);
    ajax.send(strParams);
  });
}

export function ajaxPost2(url: string, params?: any): Promise<any> {
  console.log(url, params);
  return new Promise(resolve => {
    axios({
      method: "post",
      url: url + "?" + parseParam(params),
      data: params
    }).then(res => {
      resolve(res.data);
    });
  });
}

/**
 * jsonp 请求
 * @param url
 * @param params
 * @returns
 */
export function ajaxJsonp(url: string, params?: object): Promise<any> {
  return jsonp(url, params);
}
