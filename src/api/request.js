// 对于axios进行二次封装
import { Loading, Message } from "element-ui";
import axios from "axios";
import Cookies from "js-cookie";
import router from "@/router";
// 利用axios的create方法创建实例
// 这里的request 就是axios 只不过再配置一下
let loadingPro;
const requests = axios.create({
  // 基础路劲
  baseURL: "http://120.27.212.89:29703/api/",
  // baseURL: "/api",
  // 请求超时的时间
  timeout: 60000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8"
    // 'Authorization': "Basic cHJpZGVzb2Z0OjEyMzQ1Ng==",
    // "client-ip" : IP
  }
  // responseType:'json'
});

let i = 0;
// 请求拦截器 在发送请求之前，请求拦截器可以拦截，做一些事情
requests.interceptors.request.use(config => {
  // console.log("请求拦截器", config);
  // console.log(config.headers)
  // 进度条开始动
  // nProgress.start()
  // console.log(config)
  // if (config.url.indexOf('/station/schedulingNew') == -1 && config.url.indexOf('/apg/scheduling') == -1 && config.url.indexOf(
  // 	'/ZMWorkPosition/pcList') == -1) {
  i++;
  loadingPro = Loading.service({
    lock: true,
    text: "Loading",
    spinner: "el-icon-loading",
    background: "rgba(0, 0, 0, 0.7)"
  });
  // }

  return config;
});

// 响应拦截器
requests.interceptors.response.use(
  res => {
    // console.log("响应拦截器", res.config.url);
    i--;
    if (i == 0) loadingPro.close();
    // if (loadingPro && res.config.url.indexOf('/station/schedulingNew') == -1 && res.config.url.indexOf('/apg/scheduling') ==
    // 	-1 && res.config.url.indexOf('/ZMWorkPosition/pcList') == -1) {
    // 	loadingPro.close()
    // }
    // if (res.config.url == 'guidance/getGuidance') {
    // 	console.log('指导书')
    // 	return res.data
    // } else

    if (res.data.code == "200" || res.data.code == "0432") {
      return res.data;
    } else {
      Message.error(`${res.data.msg}`);
    }

    // return res.data
  },
  error => {
    console.log(error);
    i--;
    if (i == 0) loadingPro.close();
    // 服务器响应失败回调 终止promise
    if (error && error.response) {
      // 1.公共错误处理
      // 2.根据响应码具体处理
      switch (error.response.status) {
        case 400:
          error.message = "错误请求";
          break;
        case 401:
          error.message = error.response.data.msg || "未授权，请重新登录";
          router.push({
            name: "advertising"
          });
          break;
        case 403:
          error.message = "拒绝访问";
          break;
        case 404:
          error.message = "请求错误,未找到该资源";
          // window.location.href = "/NotFound"
          break;
        case 405:
          error.message = "请求方法未允许";
          break;
        case 408:
          error.message = "请求超时";
          break;
        case 500:
          error.message = "服务器端出错";
          break;
        case 501:
          error.message = "网络未实现";
          break;
        case 502:
          error.message = "网络错误";
          break;
        case 503:
          error.message = "服务不可用";
          break;
        case 504:
          error.message = "网络超时";
          break;
        case 505:
          error.message = "http版本不支持该请求";
          break;
        default:
          error.message = `连接错误${error.response.status}`;
      }
    } else {
      // 超时处理
      if (JSON.stringify(error).includes("timeout")) {
        Message.error("服务器响应超时，请刷新当前页");
      }
      error.message = "连接服务器失败";
    }
    Message.error(error.message);
    /***** 处理结束 *****/
    //如果不需要错误处理，以上的处理过程都可省略
    // return Promise.resolve(error.response)
    // return console.log(error.message)
  }
);

export default requests;
