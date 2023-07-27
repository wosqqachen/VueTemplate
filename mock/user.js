import koaRouter from 'koa-router';
import { v4 as uuidv4 } from 'uuid';
const router = koaRouter();

router.post('/user/login', async (ctx) => {
  return (ctx.body = {
    code: 0,
    message: '成功',
    data: {
      username: 'hu.lei',
      token: uuidv4(),
      refreshToken: uuidv4(),
      userId: uuidv4(),
    },
  });
});

router.get('/user/refresh', async (ctx) => {
  return (ctx.body = {
    code: 0,
    message: '成功',
    data: {
      token: uuidv4(),
      refreshToken: uuidv4(),
    },
  });
});
let code = '0200002';
let a = true;
router.get('/user/list', async (ctx) => {
  const currentTimeStamp = Date.now() + 3000;

  while (Date.now() < currentTimeStamp) {
    //
  }
  if (a) {
    a = false;
    code = '0200002';
  } else {
    code = 0;
  }
  return (ctx.body = {
    code: code,
    message: '成功',
    data: [],
  });
});

export default router;
