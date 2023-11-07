import requests from "./request";
// export function Login(data) {
// 	return requests({
// 		// url:'/oauth/login',
// 		url: '*mes/applet/login/tcpLogin',
// 		header: {
// 			// "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",
// 			"Content-Type": "application/json",
// 			"Authorization": "Basic cHJpZGVzb2Z0OjEyMzQ1Ng=="
// 		},
// 		method: 'POST',
// 		data: {
// 			...data,
// 			grant_type: 'password',
// 			scope: 'all'
// 		},
// 	})
// }
// 登出
export const LoginOut = () => {
  // 发请求：axios发请求的结果返回的是一个Promise对象
  return requests({
    url: "/logout"
    // method: 'post',
  });
};

// 仓库动态出入
export const wearHouseDynamicAccess = () => {
  return requests({
    url: "/pride-dxsx-mes/big_screen/wearHouseDynamicAccess"
  });
};
// 当前待发货物料
export const currentPendingGoods = () => {
  return requests({
    url: "/pride-dxsx-mes/big_screen/currentPendingGoods"
  });
};
// 仓库帐龄
export const wearHouseAccountAge = () => {
  return requests({
    url: "/pride-dxsx-mes/big_screen/wearHouseAccountAge"
  });
};

// 空货位数
export const voidPositionHouseAmount = () => {
  return requests({
    url: "/pride-dxsx-mes/big_screen/voidPositionHouseAmount"
  });
};
// 货位数
export const positionHouseAmount = () => {
  return requests({
    url: "/pride-dxsx-mes/big_screen/positionHouseAmount"
  });
};
// 今日出库数
export const todayOutAmount = () => {
  return requests({
    url: "/pride-dxsx-mes/big_screen/todayOutAmount"
  });
};
// 今日入库数
export const todayInAmount = () => {
  return requests({
    url: "/pride-dxsx-mes/big_screen/todayInAmount"
  });
};
// 商品品类数
export const goodsTypeAmount = () => {
  return requests({
    url: "/pride-dxsx-mes/big_screen/goodsTypeAmount"
  });
};
// 商品总数量
export const goodsAmount = () => {
  return requests({
    url: "/pride-dxsx-mes/big_screen/goodsAmount"
  });
};
// 库存统计
export const stockAmount = id => {
  return requests({
    url: "/pride-dxsx-mes/big_screen/stockAmount?work_position_id=" + id
  });
};
// 物料台数据
export const goodsTableInfo = id => {
  return requests({
    url: "/pride-dxsx-mes/big_screen/goodsTableInfo?work_position_id=" + id
  });
};
// 预警信息
export const alarmsInfo = id => {
  return requests({
    url: "/pride-dxsx-mes/big_screen/alarmsInfo?work_position_id=" + id
  });
};
// OCV参数
export const OCVParams = id => {
  return requests({
    url: "/pride-dxsx-mes/big_screen/OCVParams?work_position_id=" + id
  });
};
// 生产数量信息
export const makeQuInfo = id => {
  return requests({
    url: "/pride-dxsx-mes/big_screen/makeQuInfo?work_position_id=" + id
  });
};
// 视觉拍照
export const visualPhoto = id => {
  return requests({
    url: "/pride-dxsx-mes/big_screen/visualPhoto?work_position_id=" + id
  });
};
// 正在加工产品
export const currentMakeGoods = id => {
  return requests({
    url: "/pride-dxsx-mes/big_screen/currentMakeGoods?work_position_id=" + id
  });
};
