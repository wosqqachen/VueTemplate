/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/interface-name-prefix */

export enum EGoodsStatus {
  Has,
  Using,
  Havenot
}

/**
 * 接口返回数据结构
 */
export interface IApiRes {
  code: number;
  message?: string;
  msg?: string;
  data: any;
}

/**
 * 用户信息
 */
export interface IUserInfo {
  accid?: string;
  mid?: string;
  mobile?: string;
  info?: Array<IUserInfoItem>;
  userinfo?: IUserInfoItem;
  userInfo?: string;
}

export interface IUserInfoItem {
  accid?: string;
  accountname?: string;
  createtime?: string;
  figureurl?: string;
  nickname?: string;
  sex?: string;
  usertype?: string;
}

export interface msgRes {
  fromHeadImage: string;
  toHeadImage: string;
  content: string;
  self?: any;
}
