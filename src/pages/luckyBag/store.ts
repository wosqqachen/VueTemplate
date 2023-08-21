import { defineStore } from "pinia";
import {
  uploadActivityLog,
  toast,
  openPage,
  getAccountInfo as _getAccountInfo
} from "@/request/client-request";
import request from "@/request/zysrf-app";
import api from "@/api";
export const bagStore = defineStore({
  id: "bag",
  state: () => ({
    name: "超级管理员",
    showDialog: 0,
    dialogType: 0,
    pageNum: 1,
    bagList: [] as any,
    bagInfo: {} as any,
    bagReward: {} as any,
    rewardInfo: {
      cid: 1,
      name: "心花待放", //奖励名称
      icon:
        "https://resource.tataxingqiu.com//tataxingqiu/gmtest/20230227/1815508024.png", // 奖励Icon
      num: 1,
      expireTime: 3 // 有效期
    },
    playing: 0,
    glazeCd: 0,
    stage: 0,
    pickUser: "",
    levelInfo: [
      //阶段时间信息
      {
        level: 1,
        status: 1,
        time: ["2023-07-10 00:00:00", "2023-07-12 23:59:59"]
      },
      {
        level: 2,
        status: 0,
        time: ["2023-07-11 15:00:00", "2023-07-12 23:59:59"]
      },
      {
        level: 3,
        status: 0,
        time: ["2023-07-13 00:00:00", "2023-07-14 23:59:59"]
      },
      {
        level: 4,
        status: 0,
        time: ["2023-07-15 00:00:00", "2023-07-16 23:59:59"]
      },
      {
        level: 5,
        status: 0,
        time: ["2023-08-17 19:00:00", "2023-08-31 23:59:59"]
      }
    ],
    actInfo: "" as any,
    skillList: {
      //技能选择列表
      "1": "唱歌",
      "2": "Rap",
      "3": "脱口秀",
      "4": "相声",
      "5": "乐器",
      "6": "弹窗",
      "7": "其它"
    },
    dmList: [] as Array<any>,
    selfDm: {
      sendNum: 2, //已发送弹幕数
      restNum: 18, //剩余可发送弹幕数
      giftValue: 1200, //当前剩余加油值
      costNum: 100 //每次发送弹幕需要加油值
    },
    idolList: [] as Array<any>,
    pageSize: 1,
    pickInfo: "" as any,
    loading: false,
    loadingEnd: false,
    giftInfo: "",
    allTimes: 0,
    allHeart: {
      fullSurplusTimes: 0,
      ownerSurplusTimes: 0
    },
    rankIndex: 1,
    userInfo: "" as any,
    userObj: "" as any,
    msgList: [] as Array<any>,
    sendList: [] as Array<any>,
    rankList: [] as Array<any>,
    selfRank: {
      rank: 10,
      points: 5540,
      user: [
        {
          nickName: "鹤顶红2",
          headImage:
            "https://cdn-douni.tt.cn/resource-test/userimg/img_256846828_1660633198_1.jpeg",
          accid: "accid_129"
        },
        {
          nickName: "乖乖的",
          headImage:
            "https://cdn-douni.tt.cn/resource-test/userimg/img_256846828_1660633198_1.jpeg",
          accid: "accid_129"
        }
      ]
    },
    championInfo: {},
    godInfo: {},
    taskInfo: {},
    rankGiftList: [] as Array<any>,
    userRank: [
      {
        value: "",
        rank: 0,
        accid: "",
        headImage: "",
        nickName: ""
      }
    ],
    seachInfo: [],
    topRank: {
      value: "",
      rank: 0,
      accid: "",
      headImage: "",
      nickName: ""
    },
    cdTime: {
      range: {
        sTime: 0,
        eTime: 0
      },
      status: 0,
      cd: 0,
      count_down: 0
    },
    cdTxt: "",
    myHeadImage: "",
    cddown: 0,
    day: 1,
    nowDay: 0,
    dayName: "",
    tabIndex: 1,
    rkPageNo: 1,
    log: {
      1: "1130002"
    },
    rankTabIndex: "1"
  }),
  actions: {
    changeDialog(t: number) {
      const log = {
        1: "10900004",
        3: "10900002",
        6: "10900004",
        7: "10900003"
      } as any;
      if (t == 0 && this.showDialog > 0) {
        uploadActivityLog(
          log[this.showDialog],
          "",
          "",
          "page",
          "",
          "close",
          ""
        );
      } else {
        uploadActivityLog(log[t], "", "", "page", "", "show", "");
      }
      console.log("first", log[t]);
      this.showDialog = t;
    },
    clickHandlerOpenPage(type: any) {
      console.log("clickHandlerOpenPage", this.userObj, this.userInfo);
      uploadActivityLog("10900002", "", "", "page", "", "click", "");
      if ([0, 1, 5].includes(type)) {
        openPage("audioRoom", "", {
          roomid: "888",
          formType: 8,
          activeName: "萌新福袋",
          showGiftPanel: type == 5 ? true : false
        });
      } else {
        openPage("mainPageMessage", "", {});
      }
      uploadActivityLog("10900002", "", "", "page", "", "click", "");
    },
    async getAccountInfoData() {
      _getAccountInfo((res: any) => {
        this.userInfo = JSON.parse(res.userInfo);
        this.userObj = res;
      });
    },
    async getBagInfoData(type: any) {
      await request.commonRequest(
        api.path.activity.luckyBag.index,
        { reward_info: type },
        (res: any) => {
          if (res.code == 0) {
            console.log("getBagInfoData", type == 1, res.data);
            this.bagInfo = res.data;
            this.glazeCd = res.data.freshData.glaze_cd;
            if (this.glazeCd > 0) {
              window.setInterval(() => {
                //  console.log("计时啊 》》》》》", this.glazeCd);
                this.glazeCd = this.glazeCd - 1;
                if (this.glazeCd == 0) {
                  window.location.reload();
                }
              }, 1000);
            }
            if (type == "1") this.bagReward = res.data.rewardInfo;
            if (res.data.freshData.first == 1) {
              this.showDialog = 6;
            }
            if (!res.data.freshData.onoff) {
              toast("活动已结束!");
            }
          } else {
            if (res.message) toast(res.message);
          }
        },
        () => {
          console.log("error");
        },
        "encrypt_type_php"
      );
    },
    async getOpenBagData(param: any) {
      console.log("first领>>>取", param);
      uploadActivityLog("10900001", "", "", "page", "3", "click", "");
      if (param.num > 0) {
        await request.commonRequest(
          api.path.activity.luckyBag.openBag,
          { type: param.type },
          (res: any) => {
            if (res.code == 0) {
              console.log("first领取", res);
              this.rewardInfo = res.data.reward;
              this.changeDialog(7);
              this.getBagInfoData("0");
            } else {
              if (res.message) toast(res.message);
            }
          },
          () => {
            console.log("error");
          },
          "encrypt_type_php"
        );
      } else {
        this.changeDialog(3);
        return false;
      }
    },
    async getBagListData() {
      await request.commonRequest(
        api.path.activity.luckyBag.openList,
        { page: this.pageNum, size: 10 },
        (res: any) => {
          if (res.code == 0 && res.data) {
            this.bagList = [...this.bagList, ...res.data];
            this.pageNum++;
            console.log("奖励", res, this.pageNum);
          }
        },
        () => {
          console.log("error");
        },
        "encrypt_type_php"
      );
    }
  },
  getters: {
    //  getJdbg(state) {
    //    console.log(state.day, state.nowDay);
    //    return state.day === state.nowDay;
    //  },
    //  getAllTimes(state) {
    //    console.log("allHeart总次数", state.allHeart);
    //    return (
    //      state.allHeart?.fullSurplusTimes +
    //      state.allHeart.ownerSurplusTimes
    //    );
    //  }
  }
});
