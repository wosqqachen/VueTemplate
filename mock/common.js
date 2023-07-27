import { resolve } from 'path';
import { existsSync, mkdirSync, createReadStream, createWriteStream } from 'fs';
import koaRouter from 'koa-router';

const router = koaRouter();

router.get('/common/ts', async (ctx) => {
  return (ctx.body = {
    code: 0,
    message: '成功',
    data: new Date().getTime(),
  });
});

function uploadHandler(file, urls) {
  const uploadFile = resolve('./mock/upload');
  if (!existsSync(uploadFile)) {
    mkdirSync(uploadFile);
  }
  const reader = createReadStream(file.filepath);
  const ext = file.originalFilename.split('.').pop();
  const fileName = `${Math.random().toString()}.${ext}`;
  const upStream = createWriteStream(`${uploadFile}/${fileName}`);
  reader.pipe(upStream);
  urls.push(`http://127.0.0.1:7878/upload/${fileName}`);
}

router.post('/upload', async (ctx) => {
  const file = ctx.request.files.file;
  let urls = [];
  if (Array.isArray(file)) {
    file.map((f) => {
      uploadHandler(f, urls);
    });
  } else {
    uploadHandler(file, urls);
  }

  return (ctx.body = {
    code: 0,
    message: '成功',
    data: {
      urls,
    },
  });
});

export default router;
