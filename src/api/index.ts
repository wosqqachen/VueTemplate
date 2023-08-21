import { devApi } from "./dev.api";
import { prodApi } from "./prod.api";

let API;

if (process.env.VUE_APP_CURRENTMODE === "prod") {
  API = prodApi;
} else {
  API = devApi;
}
const apiList = {
  common: {
    // 站外打点上报
    activityReport: API.activityReport + "/wappubog/activity",
    // 用户是否有支持的房间，即是否房主或个播
    personalityRoom:
      API.liveRoom2 + "/tastar-live-room/v1/room/room-personality-owner"
  },
  inviteDetail: {
    get_apprentice_num:
      API.shareInviteCode + "/invite_earnings/Earnings_info/get_apprentice_num", //徒弟列表
    submitInviteCodePhp:
      API.shareInviteCode + "/shoutu/invitation/type_invitation_code", //他ta星球邀请码绑定接口
    inviteDetail:
      API.inviteDetail + "/tastar-user-api/user/bind/invite-code/detail", //他ta星球邀请码绑定详情接口
    submitInviteCode:
      API.inviteDetail + "/tastar-user-api/user/bind/invite-code" //他ta星球邀请码绑定接口
  },
  fans: {
    fansAttention:
      API.fansAttention + "/ugctastar/relationship/v1/batch-follow",
    fansContribute: API.fansContribute + "/tastar-crowd/v1/rank/member-weekly",
    levelDetail:
      API.fansContribute + "/tastar-crowd/v1/team/member-level-detail", //童晓明
    memberRole: API.fansContribute + "/tastar-crowd/v1/team/member-role",

    // 王义州
    myFansInfo: API.liveRoom2 + "/tastar-live-room/v1/aBroadcast/myFansInfo", // 王义州
    exitFans: API.liveRoom2 + "/tastar-live-room/v1/aBroadcast/exitFans" // 退出粉丝团 王义州
  },
  //cdn 相关接口
  cdn: {
    cosParams: API.cosParams
  },
  //装扮部分接口
  dressUp: {
    mallList: API.address + "/index/index/mall_list", //商城首页
    bagList: API.address + "/index/index/Knapsack", //背包列表
    mallOrder: API.address + "/index/order/mall_order", //购买下单
    useProp: API.address + "/index/index/use_prop", //使用装扮
    cancelProp: API.address + "/index/index/cancel_prop", //取消使用装扮
    // 首页接口 http://xmjs-apidev.tt.cn/index.do#/interface/detail?projectId=161468577050107018292&id=168483143762412033516
    bagHome:
      API.liveRoom + "/tastar-nobility/v1/decoration/personality-center/index",
    // myBag接口 http://xmjs-apidev.tt.cn/index.do#/interface/detail?projectId=161468577050107018292&id=168483215445112033521
    myBag:
      API.liveRoom +
      "/tastar-nobility/v1/decoration/personality-center/details",
    // 所有商品列表 http://xmjs-apidev.tt.cn/index.do#/interface/detail?projectId=161468577050107018292&id=168483201721812033519
    myBagGoods:
      API.liveRoom +
      "/tastar-nobility/v1/decoration/personality-center/my-page",
    // 装扮中心查询
    personalityCenter:
      API.liveRoom + "/tastar-nobility/v1/decoration/personality-center",
    // 使用装扮
    useDecoration:
      API.liveRoom + "/tastar-nobility/v1/decoration/useDecoration",
    // 取消装扮
    cancelDecoration:
      API.liveRoom + "/tastar-nobility/v1/decoration/cancelDecoration"
  },
  account: {
    getUserInfo: API.user, //获取用户信息
    userBack: API.userBack + "/feedback/index", //用户反馈
    destroyAccount: API.account + "/login/main_login/destroy_account", //账号注销-刘新军
    violation_user: API.userBack + "/violation/users", //违规用户列表,
    violation_info: API.userBack + "/violation/info", //违规用户详情
    add_reason: API.account + "/login/Destruction_reason/add_reason", //添加注销原因
    ownerRoomInfo: API.liveRoom2 + "/tastar-live-room/v1/h5/ownerRoomInfo"
  },
  wallet: {
    shopList: API.wallet + "/pay/order/shop_list", //充值列表
    shopOrder: API.wallet + "/pay/order/shop_order", //下单
    shopPay: API.wallet + "/pay/order/shop_pay", //支付
    checkIos: API.wallet + "/pay/order/check_ios", //ios内购
    checkPay: API.wallet + "/pay/order/check", //查询支付结果
    walletList: API.wallet + "/pay/wallet/wallet_list", //钱包明细

    homeBalance: API.walletDouni + "/wallet/select_bonus/balance" // 钱包首页 余额
  },
  //任务中心 倪新奎
  task: {
    getLogList: API.task + "/index/getLogList",
    sign: API.task + "/sign/index",
    taskIndex: API.task + "/index/index",
    getTaskReward: API.task + "/reward/getTaskReward"
  },

  // 新版任务中心-倪新奎
  newTask: {
    // 任务列表
    taskList: API.task + "/task_new/index/index",
    // 签到列表
    signList: API.task + "/task_new/sign/index",
    // 商品列表
    storeList: API.task + "/task_new/store/index",
    // 签到
    sign: API.task + "/task_new/sign/sign",
    // 抖豆兑换礼物
    exchange: API.task + "/task_new/store/exchange",
    // 抖豆历史记录
    getHistory: API.task + "/task_new/store/getHistory",
    // 领取任务奖励
    getTaskReward: API.task + "/task_new/reward/getTaskReward",
    // 任务通知上报
    taskNotify: API.task + "/task_new/notify/task_notify",
    // 语音房任务列表
    roomTaskIndex: API.task + "/task_new/index/roomTaskIndex",
    // 获取娃娃机奖品列表-温泉
    luckIndex: API.task + "/task_draw/luck/get_conf",
    // 抽取娃娃机奖品-温泉
    luckDraw: API.task + "/task_draw/luck/index",
    // 抖豆余额-温泉
    getBalance: API.task + "/task_draw/luck/balance",
    // 抖豆抽奖记录-温泉
    luckGetHistory: API.task + "/task_draw/luck/get_history"
  },

  // 语音房排行榜 王义州
  voiceRank: {
    memberDaily:
      API.fansContribute + "/tastar-live/v1/h5/room/member-daily-rank", //个人排行榜 日榜
    memberWeek: API.fansContribute + "/tastar-live/v1/h5/room/member-week-rank", //个人排行榜 周榜
    roomDaily: API.fansContribute + "/tastar-live/v1/h5/room/daily-rank", //房间排行榜 日榜
    roomWeek: API.fansContribute + "/tastar-live/v1/h5/room/week-rank", //房间排行榜 周榜
    rankPosition: API.fansContribute + "/tastar-live/v1/h5/room/rank-position", //查询当前房间或用户在榜单中的位置
    collect: API.fansContribute + "/tastar-live/v2/room/collect" //收藏房间
  },
  fansAttention: {
    follow: API.fansAttention + "/ugctastar/relationship/v1/follow"
  },
  // 星币商城
  store: {
    goodsList: API.mallDouni + "/index/index/items",
    goodsOrder: API.mallDouni + "/index/index/order",
    attireUseState:
      API.headframeDouni + "/tastar-headframe/headframeuser/user/alterheadstate"
  },
  // 我的背包
  myBag: {
    // 所有的商品
    goodsList:
      API.headframeDouni +
      "/tastar-headframe/headframeuser/user/getuserheadframe",
    // 修改使用商品
    updateUsingGoods:
      API.headframeDouni + "/tastar-headframe/headframeuser/user/alterheadstate"
  },
  // 星币记录
  income: {
    getList: API.walletDouni + "/wallet/detail_bonus/index",
    getMoreList: API.walletDouni + "/wallet/detail_bonus/index_more"
  },
  // 兑换 曹金峰
  exchange: {
    items: API.p + "/bonus_mall/index/items",
    create: API.p + "/bonus_mall/order/create",
    vip_gold: {
      items: API.p + "/shop/vip_gold/items",
      order: API.p + "/shop/vip_gold/order"
    },
    vip: {
      items: API.p + "/shop/vip/items",
      order: API.p + "/shop/vip/order"
    }
  },
  // 提现 曹金峰
  tx: {
    balance: API.tx + "/cash/balance",
    bind: API.tx + "/captcha/bind",
    get_bank: API.tx + "/account/get_bank",
    check_bank: API.tx + "/account/check_bank",
    save_bank: API.tx + "/account/save_bank",
    create_order: API.tx + "/cash/create_order"
  },
  // 礼物  曹金峰
  gift: {
    luckyGiftInfo: API.g + "/gift/index/luckyGiftInfo",
    week_gift: API.g + "/gift/week_star/week_gift",
    charm_rank: API.liveRoom2 + "/tastar-live-room/v1/week-star/charm-rank",
    hat_rank: API.liveRoom2 + "/tastar-live-room/v1/room/pk-hat-rank",
    wealth_rank: API.liveRoom2 + "/tastar-live-room/v1/week-star/wealth-rank"
  },
  payDouni: {
    goodsList: API.payDouni + "/shop/index/items",
    order: API.payDouni + "/shop/order/order",
    doPay: API.payDouni + "/shop/order/pay",
    urlScheme: API.payDouni + "/shop/wxa/urlscheme", //小程序获取openlink
    payReward: API.payDouni + "/shop/index/pay_reward",

    // 站外获取小程序的 scheme openlink
    outSetUrlScheme: API.payDouni + "/wx/wxa/urlscheme_new"
  },
  indexShakeu: {
    // 奏帅
    mobileCheck: API.indexShakeu + "/games/mobile_check/index", // 手机号验证场景开关
    get_member_union: API.indexShakeu + "/live/get_member_union/index" //查询主播签约信息 温泉
  },

  // 盲盒纸条 曹金峰
  misteryBox: {
    // 首页接口 判断是否有免费机会
    index: API.misteryBox + "/box/index/index",
    // 数美 验证 text
    verifyText: API.misteryBox + "/box/sm/verify_text",
    // 数美 验证 img
    verifyImg: API.misteryBox + "/box/sm/verify_img",
    // 放入纸条
    putNote: API.misteryBox + "/box/index/put_note",
    // 获取纸条
    drawNote: API.misteryBox + "/box/index/draw_note",
    // 销毁纸条
    destroyNote: API.misteryBox + "/box/index/destroy",
    // 放入/抽到的纸条列表
    myNotes: API.misteryBox + "/box/index/my_note",
    //他ta星球，交友盲盒 随机查询主播信息接口(罗少兵)
    queryAnchorInfoByRandom:
      API.userHost + "/tastar-user-api/user/queryAnchorInfoByRandom"
  },

  // 星座盲盒 曹金峰
  starBox: {
    // 首页接口
    index: API.misteryBox + "/box/zodiac/index",
    // 用户抽到的星座用户列表
    my_zodiac_list: API.misteryBox + "/box/zodiac/my_zodiac_list",
    // 抽取盲盒
    draw_zodiac_user: API.misteryBox + "/box/zodiac/draw_zodiac_user",
    // 任务列表
    task_list: API.misteryBox + "/box/zodiac/task_list",
    // 领取奖励
    get_reward: API.misteryBox + "/box/zodiac/get_reward",
    // 退出盲盒挽留弹框
    out_zodiac: API.misteryBox + "/box/zodiac/out_zodiac",
    // 领取免费机会
    get_free: API.misteryBox + "/box/zodiac/get_free",
    // 设置生日-刘新军
    set_day: API.account + "/userinfo/web_user_info/edit_info"
  },

  //订单盲盒 倪新奎
  heartbeatBox: {
    //首页接口
    index: API.misteryBox + "/box/friend/index",
    //放入纸条
    put_friend: API.misteryBox + "/box/friend/put_friend",
    //抽取纸条
    draw_friend: API.misteryBox + "/box/friend/draw_friend",
    //放入纸条列表
    note_list: API.misteryBox + "/box/friend/note_list",
    //销毁纸条
    destroy: API.misteryBox + "/box/friend/destroy",
    //获取声优个人技能-王义州
    skill_query: API.userHost + "/tastar-user-api/user/private-chat-card",
    //声优技能全局配置查询-王义州
    skill_config_query:
      API.userHost + "/tastar-user-api/seiyuu-skill/config/query",
    //下单-王义州
    make_order: API.skillOrder + "/tastar-order/v2/order/make-order",
    //获取用户交友类订单数量-王义州
    get_order_count:
      API.skillOrder + "/tastar-order/v2/order/get-dating-order-count"
  },

  // web 充值 曹金峰
  webRecharge: {
    user_info: API.payDouni + "/web/index/user_info",
    goods: API.payDouni + "/web/index/items",
    order: API.payDouni + "/web/order/order",
    doPay: API.payDouni + "/web/order/pay"
  },
  // cp 曹
  blind: {
    invite_list: API.blind + "/love/index/invite_list",
    passive_list: API.blind + "/love/index/passive_list",
    act_invite: API.blind + "/love/index/act_invite",
    cp_rank: API.blind + "/love/index/cp_rank",
    love_wall: API.blind + "/love/index/love_wall",
    write_wall: API.blind + "/love/index/write_wall",
    cancel_cp: API.blind + "/love/index/cancel_cp",
    invite_status: API.blind + "/love/index/invite_status"
  },
  // 亲密关系 王义州
  userIntimacy: {
    batchQuery: API.liveRoom3 + "/tastar-user-biz/v1/userIntimacy/batchQuery",
    invitationIntimacy:
      API.liveRoom3 + "/tastar-user-biz/v1/userIntimacy/invitationIntimacy",
    bind_invite: API.p + "/shop/close_degree/bind_invite",
    bind_agree: API.p + "/shop/close_degree/bind_agree"
  },
  activity: {
    index: API.activity + "/index/snow_carnival/index",
    exchange_gold: API.activity + "/index/snow_carnival/exchange_gold",
    exchange_reward: API.activity + "/index/snow_carnival/exchange_reward",
    gold_list: API.activity + "/index/snow_carnival/gold_list",
    quality: {
      get_reward_config:
        API.activity + "/sound_excellence/index/get_reward_config",
      exchange: API.activity + "/sound_excellence/index/exchange",
      exchange_log: API.activity + "/sound_excellence/index/exchange_log",
      get_tops: API.activity + "/sound_excellence/rank/get_tops"
    },
    decorate: {
      headFrameList: API.activity + "/decorate/head_frame/headFrameList",
      diyHeadFrame: API.activity + "/decorate/head_frame/diyHeadFrame"
    },
    close_degree: {
      draw_info: API.activity + "/close_degree/index/draw_info",
      address_info: API.activity + "/close_degree/index/address_info",
      add_address: API.activity + "/close_degree/index/add_address",
      luck_draw: API.activity + "/close_degree/reward/luck_draw",
      reward_record: API.activity + "/close_degree/index/reward_record",
      goods_list: API.activity + "/close_degree/index/goods_list",
      edit_goods_address:
        API.activity + "/close_degree/index/edit_goods_address",
      index: API.activity + "/close_degree/index/index"
    },
    //恋恋好春光
    springLove: {
      index: API.activity + "/index/spring_light_act/index",
      get_spokesman_list_by_type:
        API.activity + "/index/spring_light_act/get_spokesman_list_by_type",
      get_room_list_by_rank:
        API.activity + "/index/spring_light_act/get_room_list_by_rank",
      randomRoomInfo: API.liveRoom2 + "/tastar-live-room/v1/h5/randomRoomInfo" //随机获取一个   语音房id
    },
    //劳动最光荣
    workerDay: {
      index: API.activity + "/labor_day/index/index",
      go_work: API.activity + "/labor_day/index/go_work",
      search_user_info: API.activity + "/labor_day/index/search_user_info",
      book_list: API.activity + "/labor_day/index/book_list",
      market_list: API.activity + "/labor_day/index/market_list",
      hire_work: API.activity + "/labor_day/work/hire_work",
      seed_bean: API.activity + "/labor_day/work/seed_bean",
      seed_rank: API.activity + "/labor_day/work/seed_rank",
      shop: API.activity + "/labor_day/shop/index",
      exchange: API.activity + "/labor_day/shop/exchange",
      exchange_record: API.activity + "/labor_day/shop/exchange_record",
      flower_record: API.activity + "/labor_day/shop/flower_record",
      labor_record: API.activity + "/labor_day/shop/labor_record"
    },
    //520活动
    love23520: {
      index: API.activity + "/index/love_day/index",
      get_cp_rank_list: API.activity + "/index/love_day/get_cp_rank_list",
      get_room_rank_list: API.activity + "/index/love_day/get_room_rank_list"
    },
    //仲夏夜之梦
    summerDream: {
      index: API.activity + "/index/summer_night_act/index",
      get_cp_man: API.activity + "/index/summer_night_act/get_c_spokesman",
      get_cp_rank_list:
        API.activity + "/index/summer_night_act/get_spokesman_list_by_type",
      get_room_rank_list:
        API.activity + "/index/summer_night_act/get_room_list_by_rank"
    },
    //好运小猫
    luckKitty: {
      index: API.activity + "/index/lucky_cat/index",
      cat_exchange: API.activity + "/index/lucky_cat/cat_exchange",
      cat_draw: API.activity + "/index/lucky_cat/draw",
      draw_reward: API.activity + "/index/lucky_cat/draw_reward",
      get_user_rank_list: API.activity + "/index/lucky_cat/get_user_rank_list",
      get_room_rank_list: API.activity + "/index/lucky_cat/get_room_rank_list"
    },
    //端午
    dragon23: {
      index: API.activity + "/index/dragon_boat_act/index",
      get_scratch: API.activity + "/index/dragon_boat_act/scratch",
      join_team: API.activity + "/index/dragon_boat_act/join_team",
      get_pk_man: API.activity + "/index/dragon_boat_act/team_index",
      get_user_rank_list:
        API.activity + "/index/dragon_boat_act/user_rank_list",
      get_room_rank_list: API.activity + "/index/dragon_boat_act/room_rank_list"
    },
    //最头条
    topStory: {
      giftTopNews: API.liveRoom2 + "/tastar-live-room/v1/topNews/giftTopNews",
      giftNewestNews:
        API.liveRoom2 + "/tastar-live-room/v1/topNews/giftNewestNews",
      giftTopNewsHeadlines:
        API.liveRoom2 + "/tastar-live-room/v1/topNews/giftTopNewsHeadlines",
      rankHeadlines:
        API.liveRoom2 + "/tastar-live-room/v1/topNews/rankHeadlines"
    },
    //萌新福袋
    luckyBag: {
      index: API.activity + "/index/fortune_bag/index",
      openBag: API.activity + "/index/fortune_bag/open_bag",
      openList: API.activity + "/index/fortune_bag/get_open_bag_list"
    }
  },
  roomShakeu: {
    roomSendMessage:
      API.liveRoom3 + "/tastar-user-biz/v1/user/send-private-text-msg", //童晓明
    addTag: API.liveRoom3 + "/tastar-user-biz/v1/user/add-tag" //童晓明
  },
  dtap: {
    host: API.userHost,
    deviceBindInfo:
      API.userHost + "/tastar-user-api/dtap/preview/device-bind-info", // 站外 黄晨晨
    clearBindInfo: API.userHost + "/tastar-user-api/dtap/clear/bind-info", // 站外 黄晨晨
    updateDeviceInfo: API.userHost + "/tastar-user-api/dtap/update/bind-info", // 站外 黄晨晨
    updateCardName: API.userHost + "/tastar-user-api/dtap/card-name/update", //站内 黄晨晨
    deleteCollect: API.userHost + "/tastar-user-api/dtap/card-case/delete", // 站内 取消收藏 黄晨晨
    addCollect: API.userHost + "/tastar-user-api/dtap/card-case/create" // 站内 添加收藏 黄晨晨
  },

  // topList 排行榜总榜
  topList: {
    // 罗志勇
    rank: API.liveRoom2 + "/tastar-live-room/v1/rank/all"
  },
  signedAgreement: API.userHost + "/tastar-user-api/user/family-anchor/confirm", //签约协议 黄晨晨

  // 家族
  family: {
    // 家族--日榜 java 王义州
    rankContributionDay:
      API.familyDouni + "/tastar-family/v1/family/member/dayRank",
    // 家族—-周榜 java 王义州
    rankContributionWeek:
      API.familyDouni + "/tastar-family/v1/family/member/weekRank",
    // 家族 -- 甜蜜榜 php 曹
    rankSweet: API.p + "/shop/sweet/sweet_rank",
    dayRank: API.familyDouni + "/tastar-family/v1/family/day-rank", //王义州
    weekRank: API.familyDouni + "/tastar-family/v1/family/week-rank"
  },

  // 调查问卷
  questionnaire: {
    index: API.indexShakeu + "/question/question/question_list", // 获取题库
    submit: API.indexShakeu + "/question/question/submit_answer" // 提交问卷
  },
  //新年有你
  newYearMass: {
    room_rank: API.activity + "/new_year/spring_festival/index"
  },
  // 星座男友
  horo: {
    querySet:
      API.liveRoom3 +
      "/tastar-user-api/userConstellation/query/identity-setting", // 查询身份
    setting:
      API.userHost +
      "/tastar-user-api/userConstellation/update/identity-setting", // 设置身份
    quotation:
      API.liveRoom3 + "/tastar-user-biz/v1/userConstellation/quotation", // 语录匹配
    hisList:
      API.liveRoom3 + "/tastar-user-biz/v1/userConstellation/history-list", // 我的男友
    search: API.liveRoom3 + "/tastar-user-biz/v1/userConstellation/search", // 寻找星座男友
    match: API.liveRoom3 + "/tastar-user-biz/v1/userConstellation/searchV1", // 匹配星座男友
    unlock:
      API.liveRoom3 + "/tastar-user-biz/v1/constellation-boyfriend/unlock-him", // 解锁男友
    index: API.liveRoom3 + "/tastar-user-biz/v1/userConstellation/home-list" // 首页
  },
  // 情人节
  valentines23: {
    loveIndex: API.activity + "/valentine/love/index", //cp
    cpList: API.activity + "/valentine/love/cp_list", //甜蜜榜单
    heartbeat:
      API.liveRoom3 + "/tastar-user-biz/v1/valentinesday/heartbeat-confession", // 心动告白墙
    userSearch:
      API.liveRoom3 + "/tastar-user-biz/v1/valentinesday/confession-search", // 告白对象搜索
    sendMsg: API.liveRoom3 + "/tastar-user-biz/v1/valentinesday/confess", // 发送告白信息
    record:
      API.liveRoom3 + "/tastar-user-biz/v1/valentinesday/confession-record" // 告白记录
  },
  goddess: {
    godIndex: API.activity + "/index/women_day/index", //女神节首页
    listByGift: API.activity + "/index/women_day/get_list_by_gift", //女神冠名榜
    setAnonymous: API.activity + "/index/women_day/set_anonymous", //神秘人
    rankList: API.activity + "/index/women_day/get_list_by_rank" //降临日榜 (豪气榜/魅力榜)
  },
  mycall: {
    uplog: API.liveRoom3 + "/tastar-user-biz/v1/mysterious-call/seiyuu-show", //卡片上报
    distribute:
      API.liveRoom3 + "/tastar-user-biz/v1/mysterious-call/seiyuu-distribute" //神秘来电首页
  },
  securityCenter: {
    config: API.userBack + "/safe_center/top",
    history: API.userBack + "/safe_center/get_history",
    set_read: API.userBack + "/safe_center/set_read",
    announcement_list: API.userBack + "/safe_center/announcement",
    detail: API.userBack + "/safe_center/announcement_info",
    behaviour_list: API.userBack + "/safe_center/behaviour"
  },
  //1元互动
  extractMan: {
    index: API.activity + "/index/mengxin/index", //是否新用户
    interaction: API.activity + "/index/mengxin/interaction", //抽互动
    confirm: API.activity + "/index/mengxin/anchor_confirm", //主播确认
    getGift: API.activity + "/index/mengxin/get_user_interaction", //玫瑰花数量
    update: API.userHost + "/tastar-user-api/user/one-dollar-tag/update", //更改签名
    getList: API.activity + "/index/mengxin/get_interaction_list" //列表
  },
  idol: {
    idolIndex: API.activity + "/index/talent_act/index", //偶像诞生
    application: API.activity + "/index/talent_act/application", //报名参赛
    sendBarrage: API.activity + "/index/talent_act/send_barrage", //发送应援弹幕
    barrageList: API.activity + "/index/talent_act/barrage_list", //弹幕列表
    idolList: API.activity + "/index/talent_act/idol_list", //主播列表
    pickSearch: API.activity + "/index/talent_act/pick_search", //PICK搜索
    userRankList: API.activity + "/index/talent_act/user_rank_list", //用户排行榜单
    rewardUser: API.activity + "/index/talent_act/reward_user", //诞生前三
    followUser: API.fansAttention + "/ugctastar/relationship/v1/follow", //关注前三
    reservation: API.activity + "/index/talent_act/reservation" //冠军之夜
  },
  bridge: {
    bridgeIndex: API.activity + "/index/magpie_bridge/index", //神鹊献礼
    exchange: API.activity + "/index/magpie_bridge/exchange", //兑换
    exchangeList: API.activity + "/index/magpie_bridge/exchange_log", //兑换记录
    treasure: API.activity + "/index/magpie_bridge/treasure", //七夕探宝
    sendBarrage: API.activity + "/index/magpie_bridge/send_barrage", //发送应援弹幕
    barrageList: API.activity + "/index/magpie_bridge/barrage_info", //弹幕列表
    draw: API.activity + "/index/magpie_bridge/draw", //幸运抽奖
    drawList: API.activity + "/index/magpie_bridge/draw_list", //抽奖记录
    getLeapList: API.activity + "/index/magpie_bridge/get_leap_rank_list", //鹊跃榜单
    getCpRankList: API.activity + "/index/magpie_bridge/get_cp_rank_list" //鹊囍榜单
  }
};

export default {
  name: API.name,
  address: API.address,
  mAddress: API.mAddress,
  pcAddress: API.pcAddress,
  path: apiList
};
