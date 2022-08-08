const { v4 } = require('uuid');
var Mock = require('mockjs');

module.exports = router => {
	router.post('/login', async ctx => {
		return (ctx.body = {
			code: 200,
			msg: '成功',
			data: {
				token: v4(),
			},
		});
	});

	router.get('/getAccountsInfo', async ctx => {
		return (ctx.body = {
			code: 200,
			msg: '成功',
			data: [],
		});
	});

	router.get('/getList', async ctx => {
		let list = [];
		for (let index = 0; index < 40; index++) {
			list.push(index + 1);
		}
		return (ctx.body = {
			code: 200,
			msg: '成功',
			data: {
				total: 100,
				rows: list,
			},
		});
	});

	router.post('/getWxConfig', async ctx => {
		return (ctx.body = {
			code: 200,
			msg: '成功',
			data: {
				timestamp: +new Date(),
				nonceStr: 'nonceStr',
				signature: 'signature',
			},
		});
	});
};
