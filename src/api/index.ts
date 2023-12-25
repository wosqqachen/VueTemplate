import { devApi } from "./dev.api";
import { prodApi } from "./prod.api";

let API;

if (process.env.VUE_APP_CURRENTMODE === "prod") {
  API = prodApi;
} else {
  API = devApi;
}
const apiList = {
  activity: {
    //万圣
    halloween: {
      index: API.activity + '/index/halloween/index', // 活动基础数据
      lottery: API.activity + '/index/halloween/draw', // 祈愿
      exchange_history: API.activity + '/index/halloween/draw_list', // 兑换列表
      task: API.activity + '/index/mid_autumn/task', // 获取任务
      exchange: API.activity + '/index/halloween/white_recharge', // 兑换
      lottery_history: API.activity + '/index/mid_autumn/lottery_history', // 祈愿列表
      room_rank: API.activity + '/index/halloween/user_rank_list', // 主播榜
      god_rank: API.activity + '/index/halloween/get_cp_rank_list', // 神豪榜
      super_moon_level: API.activity + '/index/mid_autumn/super_moon_level', // 超级月亮
      super_moon_reward_list: API.activity + '/index/mid_autumn/super_moon_reward_list', // 满月轮
      super_moon_rank: API.activity + '/index/mid_autumn/super_moon_rank', // 月亮排行榜
      give_dress: API.activity + '/index/mid_autumn/give_list', // 获取赠送信息
      invite_code: API.activity + '/index/mid_autumn/get_user_info', // 根据邀请码获取用户信息
      give: API.activity + '/index/mid_autumn/give' // 赠送
    },
  },
};

export default {
  name: API.name,
  path: apiList
};
