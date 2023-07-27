import { resolve } from 'path';
import Koa from 'koa';
import { koaBody } from 'koa-body';
import koaRouter from 'koa-router';
import statics from 'koa-static';
import axios from 'axios'; //解析上传文件的 //解析上传文件的插件
import cors from '@koa/cors';

import commonRouter from './common.js';
import userRouter from './user.js';

axios.defaults.headers.common['Content-Type'] =
  'application/json;charset=UTF-8';
axios.defaults.baseURL = 'https://www.test.api'; // 如果服务端接口能通调用服务端，否则调用自己mock
axios.defaults.withCredentials = true; // 需要跨域携带认证
axios.defaults.headers.common['Content-Type'] =
  'application/json;charset=UTF-8';

const router = koaRouter({ prefix: '/api' });
// const router = koaRouter();
const app = new Koa();
app.use(cors());
app.use(
  koaBody({
    multipart: true,
    formidable: {
      multipart: true,
      maxFileSize: 10 * 1024 * 1024,
    },
  }),
);

app.use(statics(resolve('./dist')));

let httpAxios = async (ctx) => {
  let url = ctx.request.url;
  let method = ctx.request.method;
  let body = ctx.request.body;
  let query = JSON.stringify(ctx.query);
  if (ctx.request.url !== '/favicon.ico') {
    console.log(method, '接口地址:', url, '请求参数:', method, body || query);
  }

  let resData;
  let status;
  let paramsType = method.toLocaleUpperCase() === 'GET' ? 'params' : 'data';
  try {
    let res = await axios({
      headers: {
        Authorization: ctx.headers.authorization || '',
      },
      url,
      method,
      [paramsType]: method.toLocaleUpperCase() === 'GET' ? query : body,
    });
    resData = res.data;
  } catch (error) {
    status = error.response.status;
  }
  return new Promise((resolve, reject) => {
    if (status == 404) {
      reject();
    } else {
      resolve(resData);
    }
  });
};

app.use(async (ctx, next) => {
  if (ctx.request.url !== '/favicon.ico') {
    try {
      let res = await httpAxios(ctx);
      return (ctx.body = res);
    } catch (error) {
      next();
    }
  }
});

app.use(router.routes());
app.use(router.allowedMethods());
router.use(commonRouter.routes(), commonRouter.allowedMethods());
router.use(userRouter.routes(), userRouter.allowedMethods());
app.listen(7878, () => {
  console.log('服务已启动端口:7878');
});
