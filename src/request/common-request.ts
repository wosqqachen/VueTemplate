/* eslint-disable */
import request from "./zysrf-app";
import api from "@/api";
import { showLoading, toast } from "@/request/client-request";

/**
 * 他ta星球邀请码绑定详情接口 -PHP
 * @param params
 * @param _cb_ok
 */
export const get_apprentice_num = (params: any, _cb_ok: any) => {
  showLoading();
  const _url = api.path.inviteDetail.get_apprentice_num;
  request.commonRequest(_url, params, _cb_ok, () => {}, "encrypt_type_php");
};
/**
 * 他ta星球邀请码绑定接口--PHP
 * @param params
 * @param _cb_ok
 */
export const submitInviteCodePhp = (params: any, _cb_ok: any) => {
  showLoading();
  const _url = api.path.inviteDetail.submitInviteCodePhp;
  console.log(111111111111111);
  request.commonRequest(
    _url,
    params,
    _cb_ok,
    () => {},
    "encrypt_type_php",
    true
  );
};

/**
 * 他ta星球邀请码绑定详情接口
 * @param params
 * @param _cb_ok
 */
export const inviteDetail = (params: any, _cb_ok: any) => {
  showLoading();
  const _url = api.path.inviteDetail.inviteDetail;
  request.commonRequest(_url, params, _cb_ok, () => {}, "encrypt_type_java");
};

/**
 * 他ta星球邀请码绑定接口
 * @param params
 * @param _cb_ok
 */
export const submitInviteCode = (params: any, _cb_ok: any) => {
  showLoading();
  const _url = api.path.inviteDetail.submitInviteCode;
  request.commonRequest(_url, params, _cb_ok, () => {}, "encrypt_type_java");
};

export const getUserInfo = (params: any, _cb_ok: any) => {
  showLoading();
  const _url = api.path.account.getUserInfo;
  request.commonRequest(_url, params, _cb_ok, () => {}, "encrypt_type_java");
};
/**
 * 查询粉丝周榜
 * @param _cb_ok
 */
export const fansAttention = (params: any, _cb_ok: any) => {
  showLoading();
  const _url = api.path.fans.fansAttention;
  request.commonRequest(_url, params, _cb_ok, () => {}, "encrypt_type_java");
};

/**
 * 查询粉丝周榜
 * @param _cb_ok
 */
export const fansContribute = (params: any, _cb_ok: any) => {
  showLoading();
  const _url = api.path.fans.fansContribute;
  request.commonRequest(_url, params, _cb_ok, () => {}, "encrypt_type_java");
};
/**
 * 查询个人等级详情
 */
export const levelDetail = (params: any, _cb_ok: any) => {
  // showLoading();
  const _url = api.path.fans.levelDetail;
  request.commonRequest(_url, params, _cb_ok, () => {}, "encrypt_type_java");
};
/**
 * 用户反馈
 * @param _cb_ok
 */
export const userBack = (params: any, _cb_ok: any) => {
  showLoading();
  const _url = api.path.account.userBack;
  request.commonRequest(_url, params, _cb_ok);
};
/**
 * 获取腾讯云cdn相关参数
 * @param _cb_ok
 */
export const getCosParams = (_cb_ok: any) => {
  const _url = api.path.cdn.cosParams;
  console.log(_url);
  request.commonRequest(_url, {}, _cb_ok, () => {}, "encrypt_type_java");
};
//积分记录
export const getLogList = (_cb_ok: any) => {
  const _url = api.path.task.getLogList;
  console.log(_url);
  request.commonRequest(_url, {}, _cb_ok);
};
//获取连续签到天数 人物等级 新奎
export const sign = (params: any, _cb_ok: any) => {
  const _url = api.path.task.sign;
  console.log(_url);
  console.log(params, "$$$$sign params");
  request.commonRequest(_url, params, _cb_ok);
};
//任务列表
export const taskIndex = (params: any, _cb_ok: any) => {
  const _url = api.path.task.taskIndex;
  console.log(_url);
  request.commonRequest(_url, params, _cb_ok);
};
//领取奖励
export const getTaskReward = (params: any, _cb_ok: any) => {
  const _url = api.path.task.getTaskReward;
  console.log(_url);
  request.commonRequest(_url, params, _cb_ok);
};
// 商城首页
export const destroyAccount = (_cb_ok: any) => {
  showLoading();
  const _url = api.path.account.destroyAccount;
  request.commonRequest(_url, {}, _cb_ok);
};

// 商城首页
export const mallList = (_cb_ok: any, params: {}) => {
  showLoading();
  const _url = api.path.dressUp.mallList;
  request.commonRequest(_url, params, _cb_ok);
};

// 购买装扮
export const mallOrder = (_cb_ok: any, params: {}) => {
  showLoading();
  const _url = api.path.dressUp.mallOrder;
  request.commonRequest(_url, params, _cb_ok);
};

// 背包列表
export const bagList = (_cb_ok: any) => {
  showLoading();
  const _url = api.path.dressUp.bagList;
  request.commonRequest(_url, {}, _cb_ok);
};
// 使用样式
export const useProp = (_cb_ok: any, params: any) => {
  showLoading();
  const _url = api.path.dressUp.useProp;
  request.commonRequest(_url, params, _cb_ok);
};

// 钱包明细 曹金峰
export const walletList = (_cb_ok: any, params: {}) => {
  // showLoading();
  const _url = api.path.wallet.walletList;
  request.commonRequest(_url, params, _cb_ok);
};
// 充值列表 曹金峰
export const shopList = (_cb_ok: any, params: {}) => {
  // showLoading();
  const _url = api.path.wallet.shopList;
  request.commonRequest(_url, params, _cb_ok);
};
//下单
export const shopOrder = (_cb_ok: any, params: {}) => {
  // showLoading();
  const _url = api.path.wallet.shopOrder;
  request.commonRequest(_url, params, _cb_ok);
};
//支付
export const shopPay = (_cb_ok: any, params: {}) => {
  // showLoading();
  const _url = api.path.wallet.shopPay;
  request.commonRequest(_url, params, _cb_ok);
};
//ios内购
export const checkIos = (_cb_ok: any, params: {}) => {
  // showLoading();
  const _url = api.path.wallet.checkIos;
  request.commonRequest(_url, params, _cb_ok);
};
//查询支付结果
export const checkPay = (_cb_ok: any, params: {}) => {
  // showLoading();
  const _url = api.path.wallet.checkPay;
  request.commonRequest(_url, params, _cb_ok);
};
interface IApiRes {
  user_gc: number;
  code: number;
  message: string;
  data: any;
}
/**
 * 微信支付订单金额大于9000调起他ta星球小程序银联支付
 * @param order_id 订单ID
 * @param path 小程序页面路径(必须是已经发布的小程序)
 * @param query 通过 scheme 码进入小程序时的 query，最大1024个字符，只支持数字，大小写英文以及部分特殊字符：`!#$&'()*+,/:;=?@-._~%``
 * @param env_version 要打开的小程序版本。正式版为"release"，体验版为"trial"，开发版为"develop"
 * @returns
 */
export function jumpMiniApp(
  order_id: string,
  path: string,
  query: string,
  env_version: string = "release"
): Promise<IApiRes> {
  const url: string = api.path.payDouni.urlScheme;
  return new Promise((resolve, reject) => {
    request.commonRequest(
      url,
      { order_id, path, query, env_version },
      (res: IApiRes) => {
        if (res.code == 0) resolve(res);
        else reject(res);
      },
      (res: IApiRes) => {
        reject(res);
      }
    );
  });
}

// 用户信息
export function queryUserInfoByAccid() {
  return new Promise(resolve => {
    request.commonRequest(
      api.path.account.getUserInfo,
      {},
      (params: any) => {
        if (params.code == 200) {
          resolve(params.data);
        } else {
          if (params?.msg) toast(params.msg);
        }
      },
      () => {
        console.log("error");
      },
      "encrypt_type_java"
    );
  });
}
