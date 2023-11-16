import VueX from "vuex";
import Vue from "vue";
import {
  currentPendingGoods,
  wearHouseAccountAge,
  stockAmount,
  wearHouseDynamicAccess,
  makeQuInfo,
  OCVParams,
  alarmsInfo,
  visualPhoto,
  currentMakeGoods,
  goodsTableInfo
} from "@/api/index";
Vue.use(VueX);

const store = new VueX.Store({
  state: {
    showPie: false,
    showBar: false,
    workId: "2023070415153194225200001",
    pendHead: ["流转卡号", "物料编码", "物料名称", "需求数", "已发数", "待发数"],
    pendingGoods: [],
    dateBar: ["7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
    wearHouseOut: [55.0, 64.0, 42.0, 50.0, 55.0, 40.0, 55.0, 60.0, 65.0, 55.0, 48.0, 65.0],
    wearHouseIn: [65.0, 60.0, 70.0, 55.0, 40.0, 58.0, 62.0, 69.0, 55.0, 42.0, 38.0, 54.0],
    stockHead: ["库存排行", "商品名称", "库存量"],
    stockList: [
      {
        goods_name: "X8S-C-US无孔",
        goods_code: "JT0142CY1000",
        total_qu: 29978.0
      },
      {
        goods_name: "9R1B-A",
        goods_code: "HX0040NC1000",
        total_qu: 1981.0
      },
      {
        goods_name: "9R1B-A巨腾",
        goods_code: "JT0344NC1000",
        total_qu: 1072.0
      },
      {
        goods_name: "百洁布",
        goods_code: "FLBJB5C15001001",
        total_qu: 900.0
      },
      {
        goods_name: "9R1B-A巨腾",
        goods_code: "JT0344CY1000",
        total_qu: 510.0
      },
      {
        goods_name: "TUFFY16-D",
        goods_code: "JT0312CY1000",
        total_qu: 100.0
      },
      {
        goods_name: "TUFFY16-D",
        goods_code: "JT0312NC1000",
        total_qu: 100.0
      },
      {
        goods_name: "凉席",
        goods_code: "BG1.8MLX0000001",
        total_qu: 10.0
      },
      {
        goods_name: "9R1B-A巨腾",
        goods_code: "JT0344DM1000",
        total_qu: 7.0
      },
      {
        goods_name: "X15C-C",
        goods_code: "HX0028CY1000",
        total_qu: 3.0
      },
      {
        goods_name: "存货名称4",
        goods_code: "004",
        total_qu: 1.0
      },
      {
        goods_name: "MS5-C-JP有孔",
        goods_code: "JT0066ZJ1GR2",
        total_qu: 0.0
      },
      {
        goods_name: "胶带",
        goods_code: "BCJDTM451001001",
        total_qu: 0.0
      }
    ],
    picUrl: "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00710-1865.jpg",
    makeInfo: {
      goods_name: "9R1B-A巨腾",
      work_card_no: "WC20231028-009",
      plan_qu: 100.0,
      goods_code: "JT0344NC1000",
      already_qu: 10.0,
      work_card_id: "2023103012102994226900001",
      status: 3,
      remain_qu: 90.0
    },
    accountAge: {
      a_year: 50,
      two_year_up: 90,
      three_month: 40,
      one_month: 40,
      half_a_year: 45,
      two_year: 70
    },
    alaInfo: [
      {
        close_date: null,
        work_position_name: "阳极工位001",
        content: "质量  超时消息  超时消息",
        start_date: "2023-11-04 11:49:28"
      }
    ],
    OkParams: [0, 0, 0],
    OCVParams: [0, 0, 0, 0],
    goodsInfo: [
      {
        goods_name: "X8S-C-US无孔",
        qu: "0.0",
        goods_code: "JT0142CY1000"
      }
    ]
  },
  getters: {
    queryType(state) {
      if (state.activeTab == "好友") {
        return "1";
      }
      if (state.activeTab == "家族") {
        return "2";
      }
      if (state.activeTab == "推荐") {
        return "3";
      }
      return "1";
    }
  },
  mutations: {
    SET_VALUE(state, params) {
      for (let key in params) {
        state[key] = params[key];
      }
    }
  },
  actions: {
    getAllBigData(store) {
      //大屏数据
      store.dispatch("getPendingGoods");
      store.dispatch("getHouseAccountAge");
      store.dispatch("getStockAmount");
      store.dispatch("getHouseDynamicAccess");
    },
    getBig10Data(store, workId) {
      //P10数据
      store.commit("SET_VALUE", {
        workId: workId
      });
      store.dispatch("getOCVParams");
      store.dispatch("getAlarmsInfo");
      store.dispatch("getVisualPhoto");
      store.dispatch("getCurrentMakeGoods");
      store.dispatch("getMakeQuInfo");
    },
    getBig30Data(store, workId) {
      //P30数据
      store.commit("SET_VALUE", {
        workId: workId
      });
      store.dispatch("getGoodsTableInfo");
      store.dispatch("getCurrentMakeGoods");
    },
    getBig40Data(store, workId) {
      //P40数据
      store.commit("SET_VALUE", {
        workId: workId
      });
      store.dispatch("getCurrentMakeGoods");
    },
    getBig50Data(store, workId) {
      //P50数据
      store.commit("SET_VALUE", {
        workId: workId
      });
      store.dispatch("getVisualPhoto");
      store.dispatch("getCurrentMakeGoods");
    },
    getBig60Data(store, workId) {
      //P60数据
      store.commit("SET_VALUE", {
        workId: workId
      });
      store.dispatch("getGoodsTableInfo");
      store.dispatch("getCurrentMakeGoods");
    },
    getBig70Data(store, workId) {
      //P70数据
      store.commit("SET_VALUE", {
        workId: workId
      });
      store.dispatch("getGoodsTableInfo");
      store.dispatch("getAlarmsInfo");
      store.dispatch("getCurrentMakeGoods");
    },
    getBig90Data(store, workId) {
      //P90数据
      store.commit("SET_VALUE", {
        workId: workId
      });
      store.dispatch("getGoodsTableInfo");
      store.dispatch("getAlarmsInfo");
      store.dispatch("getCurrentMakeGoods");
    },
    async getPendingGoods(store) {
      await currentPendingGoods().then(response => {
        console.log("当前待发货物料", response.data);
        store.pendingGoods = response.data;
        store.commit("SET_VALUE", {
          pendingGoods: response.data
        });
      });
    },
    async getHouseAccountAge(store) {
      await wearHouseAccountAge().then(response => {
        console.log("库存账龄统计", response.data);
        store.commit("SET_VALUE", {
          accountAge: response.data,
          showPie: true
        });
      });
    },
    async getStockAmount(store) {
      await stockAmount().then(response => {
        console.log("库存总量统计", response.data);
        store.stockList = response.data;
        store.commit("SET_VALUE", {
          stockList: response.data
        });
      });
    },
    async getHouseDynamicAccess(store) {
      await wearHouseDynamicAccess().then(response => {
        console.log("仓库动态出入", response.data);
        store.commit("SET_VALUE", {
          dateBar: response.data.date,
          wearHouseIn: response.data.wearHouseIn,
          wearHouseOut: response.data.wearHouseOut,
          showBar: true
        });
      });
    },
    async getAlarmsInfo(store) {
      await alarmsInfo(this.state.workId).then(response => {
        console.log("预警信息", response.data);
        if (response.data) {
          store.commit("SET_VALUE", {
            alaInfo: response.data
          });
        }
      });
    },
    async getVisualPhoto(store) {
      await visualPhoto(this.state.workId).then(response => {
        console.log("视觉拍照", response.data);
        store.commit("SET_VALUE", {
          picUrl: response.data.url
        });
      });
    },
    async getCurrentMakeGoods(store) {
      await currentMakeGoods(this.state.workId).then(response => {
        console.log("正在加工产品", response.data);
        if (response.data) {
          store.commit("SET_VALUE", {
            makeInfo: response.data
          });
        }
      });
    },
    async getMakeQuInfo(store) {
      await makeQuInfo(this.state.workId).then(response => {
        console.log("生产数量信息", response.data);
        if (response.data) {
          store.commit("SET_VALUE", {
            OkParams: [response.data.checked_qu, response.data.ok_qu, response.data.bad_qu]
          });
        }
      });
    },
    async getOCVParams(store) {
      await OCVParams(this.state.workId).then(response => {
        console.log("OCV参数", response.data);
        store.commit("SET_VALUE", {
          OCVParams: [response.data.voltage, response.data.current, response.data.resistance, response.data.ovc]
        });
      });
    },
    async getGoodsTableInfo(store) {
      await goodsTableInfo(this.state.workId).then(response => {
        console.log("物料台数据", response.data);
        if (response.data) {
          store.commit("SET_VALUE", {
            goodsInfo: response.data
          });
        }
      });
    }
  }
});
export default store;
