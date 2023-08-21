import request from "./zysrf-app";
import Os from "@/utils/os";

/**
 * 使客户端更新用户信息
 */
export function refreshUserInfo() {
  request.clientRequest("refreshUserInfo", {});
}

/**
 * 打开分享模块
 * @param gameId
 */
export function openShareModule() {
  request.clientRequest("openShareModule", {});
}

export function copyToClipboard(content = "") {
  request.clientRequest("copyToClipboard", { content });
}

/* eslint-disable */
// 打开新页面
// "pageName":"h5",//userCenter个人中心，exchangeToCash  体现,  rechargePay 充值支付页的中转页面(todoPay)
// showNavBar 是否显示导航栏
// * userCenter 【参数：accid 】【TA个人中心：别人的个人主页】
//  * gamelist 【游戏：游戏列表页】
//  * audioRoom 【参数：roomid  form】【语音房：进入语音房内】
//  * imChat 【参数：id 获取聊天唯一标识  accid 用户accid  chatName：获取聊天的标题，单聊一般为对方名称，群聊为群名字】【1对1聊天：私聊界面内】
//  * scheduleDetail 【参数：id 日程id 】【日程列表页-弹出日程详情：先进入到日程列表，再拉起日程详情弹窗】
//  * minePage 【用户自己的用户中心】
//  * mainPageVoice【首页（语音房首页）】
//  * mainPageMessage【消息列表页面】
//  * mainCricle【主页-抖圈】
//  * realNameAuth【打开实名认证】
//  * rechargeDialog 充值 参数：isDamondsRecharge【boolean】是否是星钻充值否则为星币，entranceId 【string】【充值入口】，formType 【Int】//0 或者不传正常充值，1：余额不足 1.1.9
//  * SeiYuuPagerActivity 【声优列表】
//  * editUserInfo 【编辑信息】
//  * bindPhone 【手机绑定】
//  * giftPanel 【礼物弹框】
//  * familyDetail 【家族】

// useDefaultBack 使用默认返回
interface IOpenPageParams {
  [key: string]: any;
  showNavBar?: boolean;
  useDefaultBack?: boolean;
  accid?: any;
  roomid?: any;
  id?: any;
  chatName?: any;
  headImg?: string;
  pageName?: any;
  circle_name?: any;
  circle_id?: any;
  circle_level?: any;
  isDamondsRecharge?: any;
  entranceId?: any;
  formType?: any;
  activeName?: string; // 跳转到语音房时，需要传入 活动名称, DNAND-2522【客户端】进房通知优化
  familyId?: string; //家族id
  showGiftPanel?: boolean //跳转到房间时
}

/**
 * 上传图片到cdn
 * @param pageName
 * @param url
 * @param params
 * @param _cb_ok
 */
export function uploadImageToOSS(img: string, _cb_ok: any = () => {}) {
  request.clientRequest(
    "uploadImageToOSS",
    {
      img
    },
    _cb_ok
  );
}
/**
 * 上传文件到cdn
 * @param fileType
 * @param selectFileCallBack 注册回调方法接收url
 */
export function uploadFileToOSS(fileType: string, _cb_ok: any = () => {}) {
    request.clientRequest(
      "selectFile",
      {
        fileType
      },
      _cb_ok
    );
  }

export function openPage(
  pageName: string,
  url = "",
  params: IOpenPageParams = {},
  _cb_ok: any = () => {}
) {
  request.clientRequest(
    "openPage",
    {
      pageName,
      url,
      ...params
    },
    _cb_ok
  );
}

// 打开游戏h5
// gameId, 游戏的gameId,  1. sheep 2. xoxo 3. hexagonal
export function startShakeUGame(gameId: string) {
  request.clientRequest("startShakeUGame", {
    gameId
  });
}

// 预览图片
export function previewImages(urls: Array<string>, startIndex: number = 0) {
  request.clientRequest("previewImages", {
    images: urls,
    startIndex
  });
}

// 公共缓存
// "action":"1",//1保存，2，读取，3，删除
//     "key":"aa",
//     "value":"111"
export function nativeCache(action: string, key: string, value: string) {
  request.clientRequest("nativeCache", {
    action,
    key,
    value
  });
}

// 返回
export function goBack() {
  request.clientRequest("goBack", {});
}

// 语音房内关闭每日任务弹框
export function dismissVoiceGameDialog() {
  request.clientRequest("dismissVoiceGameDialog", {});
}

// 任务中心签到后弹起客户端奖励弹框
export function openSignReward(params: any) {
  request.clientRequest("openSignReward", { ...params });
}

// 获取公共参数
export function getCommonParams(_cb_ok: any) {
  request.clientRequest("getCommonParams", {}, _cb_ok);
}

// 获取用户信息
export function getAccountInfo(_cb_ok: any) {
  request.clientRequest("getAccountInfo", {}, res => {
    if (res.userinfo) {
      res.accid = res.userinfo.accid;
      res.info = res.userinfo.info;
      res.mobile = res.userinfo.mobile;
    }
    _cb_ok(res);
  });
}
// 检查权限是否开启
export function checkAppPermissionStatus(_cb_ok: any) {
  request.clientRequest("checkAppPermissionStatus", {}, _cb_ok);
}
// 申请权限
export function requestAppPermission(_cb_ok: any, params = {}) {
  request.clientRequest("requestAppPermission", params, _cb_ok);
}
//点击跳转到 疯狂猜成语 的手机设置-隐私管理 的位置
export function openAppPermissionSetting(_cb_ok: any) {
  request.clientRequest("openAppPermissionSetting", {}, _cb_ok);
}
// 活动日志上报
export function uploadActivityLog(
  actentryid: string,
  visitplatform: string,
  actid: string,
  entrytype: string,
  materialid: string,
  type: string,
  subactid = "null",
  f: string | null = ""
) {
  console.log(
    actentryid,
    visitplatform,
    actid,
    entrytype,
    materialid + f,
    type,
    subactid
  );
  request.clientRequest("uploadActivityLog", {
    actentryid,
    visitplatform,
    actid,
    entrytype,
    materialid: materialid + f,
    type,
    subactid
  });
}

// 更新客户端缓存
export function fetchOrUpdateCoins(coin: number) {
  request.clientRequest("fetchOrUpdateCoins", {
    action: "1",
    currentCoins: coin
  });
}

// toast
export function toast(msg: string) {
  request.clientRequest("alert", {
    msg
  });
}

// 更改状态栏颜色
export function changeStatusBarTextColor(type: number) {
  request.clientRequest("changeStatusBarTextColor", { type });
}

// 退出登录
export function goToViewLogin() {
  request.clientRequest("goToViewLogin", {});
}

// 打开qq群
export function openQQGroup(num: number) {
  let params: any = {};
  if (Os.android) {
    params = {
      android_key: "1XJSALqu_YBqHAByk-7ODdBoSSjub-XB"
    };
  } else {
    params = {
      uin: num,
      ios_key:
        "adad1b988baa37fc2692d44d9d48429d79a0e510c9136aa350ab38c247003ee5"
    };
  }
  request.clientRequest("openQQGroup", params);
}

// 云控
export function getPollingData(_cb_ok: any) {
  request.clientRequest("getPollingData", {}, _cb_ok);
}

// 打开微信
export function openWechat() {
  request.clientRequest("openWechat", {});
}

// 填写邀请码
export function inviteCodeSuccess() {
  request.clientRequest("inviteCodeSuccess", {});
}

// loading
export function showLoading() {
  request.clientRequest("showLoading", {});
}

// 取消loading
export function hideLoading() {
  request.clientRequest("hideLoading", {});
}

// 绑定微信
export function bindWechat(_cb_ok: any) {
  request.clientRequest("bindWechatWithAuthorizationInfo", {}, _cb_ok);
}

// 调用原生震动
export function openVibrate() {
  request.clientRequest("openVibrate", {});
}

// 邀请好友    -------------------------6.0.5  改新
export function inviteFriend(
  from: string,
  qid: string,
  _cb_ok: any = () => {}
) {
  request.clientRequest(
    "inviteFriend",
    {
      platform: "weChat",
      from: from,
      qid: qid
    },
    _cb_ok
  );
}

// 鼠卡分享
export function shareMousePoster(index: number, _cb_ok: any = () => {}) {
  request.clientRequest(
    "shareMousePoster",
    {
      platform: "weChat",
      from: "3",
      qid: "ccyyaoqing2",
      imageIndex: index
    },
    _cb_ok
  );
}
// --------------------------------6.0.4--------------------------------
// 保存图片
export function saveBase64Img(imageDataBase64: string, _cb_ok: any = () => {}) {
  request.clientRequest(
    "saveBase64Img",
    {
      imageDataBase64,
      fileType: "png"
    },
    _cb_ok
  );
}

// 分享图片
export function shareBase64Img(
  imageDataBase64: string,
  platform: string,
  _cb_ok: any = () => {}
) {
  request.clientRequest(
    "shareBase64Img",
    {
      imageDataBase64,
      platform, //weChat  weChatZone
      fileType: "png" //png jpg 文件后缀
    },
    _cb_ok
  );
}

// 微信卡片分享
export function shareCard(
  webpageUrl: string,
  title: string,
  description: string,
  platform: string,
  shareThumb: string,
  _cb_ok: any = () => {}
) {
  request.clientRequest(
    "shareCard",
    {
      webpageUrl,
      title,
      description,
      platform, //weChat  weChatZone
      shareThumb //卡片分享 图片 base64
    },
    _cb_ok
  );
}

// banner广告
export function showBanner(position: string, _cb_ok: any = () => {}) {
  request.clientRequest("showBanner", { position }, _cb_ok);
}

export function hideBanner(position: string, _cb_ok: any = () => {}) {
  request.clientRequest("hideBanner", { position }, _cb_ok);
}

// 视频广告
export function excitationVideo(type: string, _cb_ok: any = () => {}) {
  request.clientRequest("excitationVideo", { type }, _cb_ok);
}

// --------------------------------6.0.5--------------------------------
// 取消loading
export function goRoot() {
  request.clientRequest("goRoot", {});
}

// --------------------------------6.0.6--------------------------------

// 获取面对面的二维码图片
export function getQRInviteStr(from: string, qid: string, _cb_ok: any) {
  request.clientRequest(
    "getQRInviteStr",
    {
      platform: "weChat",
      from: from,
      qid: qid
    },
    _cb_ok
  );
}

// --------------------------------6.1.3--------------------------------
export function activeShare(params: any) {
  request.clientRequest("activeShare", { ...params });
}
// --------------------------------6.1.5--------------------------------
//是否存在京东金融app
export function isApkInstalled(pkgName: string, _cb_ok: any) {
  request.clientRequest("isApkInstalled", { pkgName }, _cb_ok);
}

//唤醒app
export function wakeUpAppByPackageName(pkgName: string) {
  request.clientRequest("wakeUpAppByPackageName", { pkgName });
}

//京东app下载
export function appDownload(downloadUrl: string, pkgName: string, _cb_ok: any) {
  request.clientRequest("appDownload", { downloadUrl, pkgName }, _cb_ok);
}

// openUrl
export function openUrl(url = "", _cb_ok: any = () => {}) {
  request.clientRequest("openUrl", { url }, _cb_ok);
}

// ---------------------------------- shakeu 1.0.8 --------------------------
/**
 * 获取当前用户是否绑定了手机号
 * 0 未绑定
 * 1 已绑定
 * res: isBindPhone: 0 | 1
 */
export function getBindPhoneStatus(_cb_ok: any = () => {}) {
  request.clientRequest("getBindPhoneStatus", {}, _cb_ok);
}

/**
 * 显示绑定手机的操作页
 * @param _cb_ok 客户端会在关闭操作页时回调，但结果不明 (需要H5再次查询)
 */
export function showBindPhone(_cb_ok: any = () => {}) {
  request.clientRequest("showBindPhone", {}, _cb_ok);
}

/**
 * 判断是否验证身份
 * 0 未绑定
 * 1 已绑定
 * res: verifiedStatus: 0 | 1  认证调openPage==>realNameAuth 结束后h5用viewDidAppear重新刷新数据
 */
export function getVerifiedStatus(_cb_ok: any = () => {}) {
  request.clientRequest("getVerifiedStatus", {}, _cb_ok);
}

// ---------------------------------- shakeu 1.0.8 end --------------------------

// ---------------------------------- shakeu 1.2.0 ------------------------------
/**
 * 上传错误日志
 * @param page 页面
 * @param content 内容描述
 * @description 给客户端上传错误日志 typeId 使用固定值 10000
 */
export function uploadErrorLog(page: string, content: string) {
  request.clientRequest("uploadErrorLog", {
    typeId: "10000",
    content: `${page}: ${content}`
  });
}
// ---------------------------------- shakeu 1.2.0 end ------------------------------

// ---------------------------------- shakeu 1.1.9 --------------------------
// giftPress// 价格
// giftName // 礼物名
// giftIcon //礼物url
// relationName // 关系名称
// relationId /// 关系ID
// inviteId ///邀请记录ID
export function intimacyInvitatDidSend(params: any, _cb_ok: any = () => {}) {
  request.clientRequest(
    "intimacyInvitatDidSend",
    {
      ...params
    },
    _cb_ok
  );
}

// 1.4.0
// 亲密关系 同意
export function intimacyActionSend(params: any, _cb_ok: any = () => {}) {
  request.clientRequest(
    "intimacyActionSend",
    {
      ...params
    },
    _cb_ok
  );
}
// 1.4.0

// ---------------------------------- shakeu 1.1.9 end --------------------------

// ---------------------------------- shakeu 1.3.7 --------------------------
// 获取云控实名认证配置
export function getRealNameAuthenticationSceneSwitch(_cb_ok: any = () => {}) {
  request.clientRequest("getRealNameAuthenticationSceneSwitch", {}, _cb_ok);
}
// 打开实名认证弹框
export function showRealNameAuthenticationDialog(_cb_ok: any = () => {}) {
  request.clientRequest("showRealNameAuthenticationDialog", {}, _cb_ok);
}
/**
 * 获取当前用户所在的记录id
 * @param _cb_ok (param){roomId}
 */
export function currentRoomInfo(_cb_ok: any = () => {}) {
  request.clientRequest('currentRoomInfo', {}, _cb_ok)
}
// ---------------------------------- shakeu 1.3.7 end --------------------------
//1.1.2
//获取麦上男用户
export function getVoiceRoomData(_cb_ok: any = () => {}) {
  request.clientRequest('getVoiceRoomData', {}, _cb_ok)
}
//获取萌新邀请信息
export function getMengXinZbData(_cb_ok: any = () => {}) {
  request.clientRequest('getMengXinZbData', {}, _cb_ok)
}