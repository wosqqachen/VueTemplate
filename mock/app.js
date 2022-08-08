const Koa = require('koa');
const fs = require('fs');
const path = require('path');
const app = new Koa();

const koaBody = require('koa-body');
const axios = require('axios'); //解析上传文件的 //解析上传文件的插件
const statics = require('koa-static');
const router = require('koa-router')({
	prefix: '/api',
});
const modules = require('./modules');
axios.defaults.baseURL = 'http://10.123.78.82:48101/'; // 如果服务端接口能通调用服务端，否则调用自己mock
axios.defaults.withCredentials = true; // 需要跨域携带认证
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
app.use(
	koaBody({
		multipart: true,
		formidable: {
			multipart: true,
			maxFileSize: 10 * 1024 * 1024,
		},
	})
);

app.use(statics(path.resolve('./mock')));
app.use(statics(path.resolve('./')));
let httpAxios = async ctx => {
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
			headers: { Authorization: ctx.headers.authorization || '' },
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

function uploadHandler(file, urls) {
	const uploadFile = path.resolve('./mock/upload');
	if (!fs.existsSync(uploadFile)) {
		fs.mkdirSync(uploadFile);
	}
	const reader = fs.createReadStream(file.filepath);
	const ext = file.originalFilename.split('.').pop();
	const fileName = `${Math.random().toString()}.${ext}`;
	const upStream = fs.createWriteStream(`${uploadFile}/${fileName}`);
	reader.pipe(upStream);
	urls.push(`http://127.0.0.1:7878/upload/${fileName}`);
}
router.post('/upload', async ctx => {
	const file = ctx.request.files.file;
	let urls = [];
	if (Array.isArray(file)) {
		file.map(f => {
			uploadHandler(f, urls);
		});
	} else {
		uploadHandler(file, urls);
	}

	return (ctx.body = {
		code: 200,
		msg: '成功',
		data: {
			urls,
		},
	});
});

modules(router);
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(7878, () => {
	console.log('服务已启动端口:7878');
});
