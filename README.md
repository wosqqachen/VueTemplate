# 他 ta 星球 - 活动集合

他 ta 星球 - 活动集合汇总项目

## 如何运行

> node 版本 `14 LTS`

```bash
# 安装依赖
npm install

# 开发
npm run dev

# 预发布（上测试）打包
npm run pre

# 发布（上线）打包
npm run build

# 代码规范校验
npm run lint

```

## 项目维护

| 角色     | 人员          |
| -------- | ------------- |
| 前端开发 | 吉燕彬 陈震伟 |
| 后端开发 | 庄晓凡 唐轶俊 |
| 产品经理 | 孙祥宇 陈思   |
| 交互设计 |               |

### 文档说明

- 需求文档
  - 好运小猫: <http://jira.tt.cn/browse/TATAAND-745>
  - 520 说爱你: <http://jira.tt.cn/browse/TATAAND-709>
  - 仲夏夜之梦: <http://wiki.tt.cn:8090/pages/viewpage.action?pageId=19840645>
- 数据接口
  - 好运小猫: <http://test-showdoc.dftoutiao.com/web/#/80?page_id=17749>
  - 520 说爱你: <http://test-showdoc.dftoutiao.com/web/#/80?page_id=17676>
  - 仲夏夜之梦: <http://test-showdoc.dftoutiao.com/web/#/80?page_id=17676>
- 设计稿
  - 好运小猫: <https://lanhuapp.com/web/#/item/project/stage?pid=98edc83f-4022-4713-91d1-0a394df6e94a&teamId=98cb24ec-afd3-4b81-b03f-19edc8ebfe16>
  - 仲夏夜之梦: <https://lanhuapp.com/web/#/item/project/stage?pid=d1b39940-340f-40e0-a536-8c58bfd131fc&image_id=3e2bdc2c-ed0e-463a-a9e2-895c6565ffba&tid=98cb24ec-afd3-4b81-b03f-19edc8ebfe16>
  -

### 页面信息

- 测试环境路径：<https://m.tataxingqiu.com/txqfe__test/mass/>
- 生产环境路径：<https://m.tataxingqiu.com/txqfe/mass/>

**链接参数(公共部分)** 说明：

- isfullscreen: 安卓隐藏 title
- isstatusbar: 安卓隐藏时间电池条
- hidenavbar: IOS 隐藏 title
- forbidSlide: IOS 禁用左滑右滑

| 代码目录              | 页面描述   | 页面链接                                                                                                                           | 参数描述（非公共） |
| --------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| src/pages/luckKitty   | 好运小猫   | [测试](https://m.tataxingqiu.com/txqfe__test/mass/luckKitty.html)、[生产](https://m.tataxingqiu.com/txqfe/mass/luckKitty.html)     |                    |
| src/pages/love23520   | 520 说爱你 | [测试](https://m.tataxingqiu.com/txqfe__test/mass/love23520.html)、[生产](https://m.tataxingqiu.com/txqfe/mass/love23520.html)     |                    |
| src/pages/summerDream | 仲夏夜之梦 | [测试](https://m.tataxingqiu.com/txqfe__test/mass/summerDream.html)、[生产](https://m.tataxingqiu.com/txqfe/mass/summerDream.html) |                    |

| | | | |

## 项目结构说明

> 以下是举例说明，请根据实际情况修改，请删除此行。

- `/src`：源代码目录
- `/pre`：测试服上打包代码目录
- `/dist`：生产上打包代码目录
- 【其他】

```bash
.
├── vue.config.js # webpack配置文件目录
├── dist # 上线打包目录
├── pre # 预发布打包目录
├── public # 公共资源目录 打包不编译
├── babel.config.js # vant ui按需加载配置
├── pages.config.ts # 多页应用配置
├── .env.dev # 本地环境配置及变量
├── .env.test # 测试环境配置及变量
├── .env.prod # 生产环境配置及变量
└── src # 源码目录
    ├── api # 公共接口目录（代码组织方式供参考）
    ├── assets # 图片资源目录
    ├── components # 组件目录
    ├── request # 接口及交互协议目录
    ├── utils # 工具方法目录
    ├── style # 公共样式及工具样式目录
    └── pages # 页面目录
        ├──down # 下载落地页
        ├──html # 隐私协议等页面
        ├──user # 用户相关页面
        ├──wallet # 钱包提现页面
        └──Demo # 页面文件目录
            ├── App.vue # vue文件
            ├── main.ts # 页面主入口
            └── store.ts # 页面状态管理
```

## 其他事项

补充说明:  
开启 gzip  
关闭生产 source map  
关闭 prefetch  
图片压缩 image-webpack-loader  
新增多环境配置  
vscode 安装 prettier 插件  
单独打包第三方插件 splitChunks  
使用 Vue.observable 进行状态管理  
`多页打包配置在vue.config.js pages配置 (创建新页面需要添加配置)`  
pages.config.ts 可配置页面入口及模板(骨架屏新建模板即可)  
骨架屏生成: public/index.html

```
<div id="app">
  <img width="100%" src="data:image/png;base64,省略"/>
</div>
```
