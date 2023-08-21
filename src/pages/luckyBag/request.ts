import { IApiRes, IUserInfo } from "./interface";
import api from "@/api";
import request from "@/request/zysrf-app";
import {
  getAccountInfo as _getAccountInfo,
  toast
} from "@/request/client-request";

export const isLocText = false;

// 获取用户信息
export function getAccountInfo(): Promise<IUserInfo> {
  return new Promise(resolve => {
    if (isLocText) {
      resolve({
        accid: "5afadb8f1e9ef10c1ltp5Q",
        mid: "",
        info: [
          {
            accountname:
              "7270E5B1E925AD1C38BDA3F6BCBADB0759bB16260C572CF350436E775062E1B98E9D",
            createtime: "1623925044",
            figureurl: "",
            nickname: "176****0612",
            sex: "0",
            usertype: "1"
          }
        ],
        mobile: "176****0612"
      });
    }

    _getAccountInfo((res: any) => {
      resolve(res);
    });
  });
}
export function getidolIndexRes(params: object) {
  return new Promise(resolve => {
    if (isLocText) {
      const res = {
        time: {
          range: ["2023-02-25 15:00:00", "2023-03-12 23:59:59"],
          status: 1,
          cd: 996965
        },
        gift: [
          {
            gift_id: "100627",
            item_name: "爱心巧克力2",
            static_icon:
              "https://resource.tataxingqiu.com//tataxingqiu/cloud/resources/1675406595929.7/static_icon.png",
            dPrice: "520"
          },
          {
            gift_id: "100627",
            item_name: "恋爱铃",
            static_icon:
              "https://resource.tataxingqiu.com//tataxingqiu/cloud/resources/1675406892843.9/static_icon.png",
            dPrice: "3344"
          },
          {
            gift_id: "100627",
            item_name: "浪漫热气球",
            static_icon:
              "https://resource.tataxingqiu.com//tataxingqiu/cloud/resources/1675407342409.7/static_icon.png",
            dPrice: "131400"
          }
        ],
        pop_status: {
          "2": {
            title: "每日进3个房间",
            num: 3,
            cid: 100,
            status: 0,
            strategyData: {
              cid: 100,
              name: null,
              icon: null,
              expireType: null,
              expireTime: null
            }
          },
          "3": {
            title: "每日光点值达到520",
            num: 520,
            cid: 100,
            status: 0,
            strategyData: {
              cid: 100,
              name: null,
              icon: null,
              expireType: null,
              expireTime: null
            }
          },
          "4": {
            title: "每日光点值达到33440",
            num: 33440,
            cid: 100,
            status: 0,
            strategyData: {
              cid: 100,
              name: null,
              icon: null,
              expireType: null,
              expireTime: null
            }
          },
          "5": {
            title: "每日光点值达到131400",
            num: 131400,
            cid: 100,
            status: 0,
            strategyData: {
              cid: 100,
              name: null,
              icon: null,
              expireType: null,
              expireTime: null
            }
          },
          "10": {
            title: "花蕊",
            num: 1,
            cid: "",
            status: 0,
            strategyData: []
          }
        },
        accid: "37036a272f8af8aa1p0HwP"
      };
      resolve(res);
    } else {
      request.commonRequest(
        api.path.idol.idolIndex,
        params,
        (res: any) => {
          if (res.code == 0) {
            resolve(res.data);
          } else {
            if (res.msg) toast(res.msg);
          }
        },
        () => {
          console.log("error");
        },
        "encrypt_type_php"
      );
    }
  });
}

export function getApplicationRes(params: object) {
  return new Promise(resolve => {
    if (isLocText) {
      const res = {};
      resolve(res);
    } else {
      request.commonRequest(
        api.path.idol.application,
        params,
        (res: any) => {
          if (res.code == 0) {
            resolve(res.data);
          } else {
            if (res.msg) toast(res.msg);
          }
        },
        () => {
          console.log("error");
        },
        "encrypt_type_php"
      );
    }
  });
}

export function sendBarrageRes(params: object) {
  return new Promise(resolve => {
    if (isLocText) {
      const res = {};
      resolve(res);
    } else {
      request.commonRequest(
        api.path.idol.sendBarrage,
        params,
        (res: any) => {
          if (res.code == 0) {
            resolve(res.data);
          } else {
            if (res.msg) toast(res.msg);
            if (res.message) toast(res.message);
          }
        },
        () => {
          console.log("error");
        },
        "encrypt_type_php"
      );
    }
  });
}

export function barrageListRes() {
  return new Promise(resolve => {
    if (isLocText) {
      const res = {};
      resolve(res);
    } else {
      request.commonRequest(
        api.path.idol.barrageList,
        {},
        (res: any) => {
          if (res.code == 0) {
            resolve(res.data);
          } else {
            if (res.msg) toast(res.msg);
          }
        },
        () => {
          console.log("error");
        },
        "encrypt_type_php"
      );
    }
  });
}

export function idolListRes(params: object) {
  return new Promise(resolve => {
    if (isLocText) {
      const res = {};
      resolve(res);
    } else {
      request.commonRequest(
        api.path.idol.idolList,
        params,
        (res: any) => {
          if (res.code == 0) {
            resolve(res.data);
          } else {
            if (res.msg) toast(res.msg);
          }
        },
        () => {
          console.log("error");
        },
        "encrypt_type_php"
      );
    }
  });
}

export function pickSearchRes(params: object) {
  return new Promise(resolve => {
    if (isLocText) {
      const res = {};
      resolve(res);
    } else {
      request.commonRequest(
        api.path.idol.pickSearch,
        params,
        (res: any) => {
          if (res.code == 0) {
            resolve(res.data);
          } else {
            if (res.msg) toast(res.msg);
          }
        },
        () => {
          console.log("error");
        },
        "encrypt_type_php"
      );
    }
  });
}

export function reservationRes() {
  return new Promise(resolve => {
    if (isLocText) {
      const res = {};
      resolve(res);
    } else {
      request.commonRequest(
        api.path.idol.reservation,
        {},
        (res: any) => {
          if (res.code == 0) {
            resolve(res.data);
          } else {
            if (res.msg) toast(res.msg);
          }
        },
        () => {
          console.log("error");
        },
        "encrypt_type_php"
      );
    }
  });
}

export function getRankListRes(params: object) {
  return new Promise(resolve => {
    if (isLocText) {
      const res = {
        rank_list: [
          {
            rank: 1,
            points: 523130,
            user: [
              {
                nickName: "",
                headImage: "",
                accid: "accid_129"
              },
              {
                nickName: "",
                headImage: "",
                accid: "accid_129"
              }
            ]
          },
          {
            rank: 2,
            points: 129,
            user: [
              {
                nickName: "",
                headImage: "",
                accid: "accid_129"
              },
              {
                nickName: "",
                headImage: "",
                accid: "accid_129"
              }
            ]
          }
        ],
        my_rank: {
          rank: 0,
          points: 0,
          user: [
            {
              nickName: "",
              headImage: "",
              accid: "accid_129"
            },
            {
              nickName: "",
              headImage: "",
              accid: "accid_129"
            }
          ]
        }
      };
      resolve(res);
    } else {
      request.commonRequest(
        api.path.idol.userRankList,
        params,
        (res: any) => {
          if (res.code == 0) {
            resolve(res.data);
          } else {
            if (res.msg) toast(res.msg);
          }
        },
        () => {
          console.log("error");
        },
        "encrypt_type_php"
      );
    }
  });
}
export function rewardUserRes() {
  return new Promise(resolve => {
    if (isLocText) {
      const res = {
        idol: [
          {
            rank: 1,
            points: 9,
            user: {
              nickName: "",
              headImage: "",
              accid: ""
            },
            family_name: "",
            relation: 0 // s是否已关注
          },
          {
            rank: 2,
            points: 8,
            user: {
              nickName: "",
              headImage: "",
              accid: ""
            },
            family_name: "",
            relation: 0
          },
          {
            rank: 3,
            points: 7,
            user: {
              nickName: "",
              headImage: "",
              accid: ""
            },
            family_name: "",
            relation: 0
          }
        ],
        fans: [
          {
            rank: 1,
            points: 819428,
            user: {
              nickName: "",
              headImage: "",
              accid: ""
            }
          },
          {
            rank: 2,
            points: 86554,
            user: {
              nickName: "",
              headImage: "",
              accid: ""
            }
          },
          {
            rank: 3,
            points: 33776,
            user: {
              nickName: "",
              headImage: "",
              accid: ""
            }
          }
        ]
      };
      resolve(res);
    } else {
      request.commonRequest(
        api.path.idol.rewardUser,
        {},
        (res: any) => {
          if (res.code == 0) {
            resolve(res.data);
          } else {
            if (res.msg) toast(res.msg);
          }
        },
        () => {
          console.log("error");
        },
        "encrypt_type_php"
      );
    }
  });
}

export function followUserRes(params: object) {
  return new Promise(resolve => {
    if (isLocText) {
      const res = {};
      resolve(res);
    } else {
      request.commonRequest(
        api.path.idol.followUser,
        params,
        (res: any) => {
          if (res.code == 200) {
            resolve({});
          } else {
            if (res.msg) toast(res.msg);
          }
        },
        () => {
          console.log("error");
        },
        "encrypt_type_java"
      );
    }
  });
}
