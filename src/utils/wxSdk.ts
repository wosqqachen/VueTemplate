import { getWxConfigApi } from '@/api/common';
import wx from 'weixin-js-sdk';

interface ShareProps {
	title: string;
	link: string;
	imgUrl: string;
	desc?: string;
	success?: typeof Function;
	fail?: typeof Function;
	cancel?: typeof Function;
	complete?: typeof Function;
}

export class WxSdk {
	private appid = 'wx9ef90d15b25f3df1';
	private wxSdkSingleton;
	constructor() {
		this.init();
	}
	static Singleton(): WxSdk {
		if (WxSdk.prototype.wxSdkSingleton) {
			return WxSdk.prototype.wxSdkSingleton;
		}
		WxSdk.prototype.wxSdkSingleton = new WxSdk();
		return WxSdk.prototype.wxSdkSingleton;
	}

	private async init() {
		const res = await getWxConfigApi({
			appid: this.appid,
			url: location.href,
		});
		const { timestamp, nonceStr, signature } = res.data;
		wx.config({
			debug: false,
			appid: this.appid,
			timestamp,
			nonceStr,
			signature: signature,
			jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'],
			openTagList: ['wx-open-launch-weapp'],
		});
		wx.ready(function () {
			console.info('wx.ready');
		});
		wx.error(function (res) {
			console.error('wx.error', res);
		});
	}

	// 自定义“分享给朋友”及“分享到QQ”按钮的分享内容
	updateAppMessageShareData(share: ShareProps) {
		wx.updateTimelineShareData(share);
	}
	// 自定义“分享到朋友圈”及“分享到 QQ 空间”按钮的分享内容
	updateTimelineShareData(share: ShareProps) {
		wx.updateTimelineShareData(share);
	}
}
