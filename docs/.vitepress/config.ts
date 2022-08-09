import { defineConfig } from 'vitepress'

export default defineConfig({
	base: '/',
	title: '业务组件文档',
	description: '业务组件文档',
	lastUpdated: true,
	markdown: {
    theme: 'material-palenight',
    lineNumbers: false,
  },
	themeConfig: {
    logo: "images/logo.svg",
		nav: [
			{ text: '主页', link: '/' },
			{ text: '指南', link: '/pages/guide' },
			{ text: '更新日志', link: '/pages/updateLog' },
		],

		socialLinks: [
			{ icon: "github", link: "https://gitee.com/javaweb-h5/donut-h5" },
    ],
		sidebar: [
      {
				collapsible: true,
        items: [
          {
            text: "开发指南",
            link: "/pages/guide",
          },
        ],
      },
			{
				text:'业务组件',
				collapsible: true,
        items: [
					{
            text: "   表单组件",
            link: "/pages/bcForm",
          },
					{
            text: " 分页组件",
            link: "/pages/bcList",
          },
					{
            text: " 金额组件",
            link: "/pages/bcDigitalAnimation",
          },
					{
            text: " 协议组件",
            link: "/pages/bcPaction",
          },
        ]
      }
			,
			{
				text:'hooks',
				collapsible: true,
        items: [
					{
            text: "dialog弹框",
            link: "/pages/useDialog",
          },
					{
            text: "文字复制",
            link: "/pages/useClipboard",
          },
					{
            text: "生成二维码",
            link: "/pages/useQrcode",
          },
					{
            text: "倒计时",
            link: "/pages/useCountDown",
          },
        ]
      }
    ],

	},
})
