import VueX from "vuex";
import Vue from "vue";
import { currentPendingGoods, wearHouseAccountAge, stockAmount, wearHouseDynamicAccess } from "@/api/index";
Vue.use(VueX);

const store = new VueX.Store({
  state: {
    showPie: false,
    showBar: false,
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
    accountAge: {}
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
  mutations: {},
  actions: {
    async getPendingGoods(store) {
      await currentPendingGoods().then(response => {
        console.log("当前待发货物料", response.data);
        store.pendingGoods = response.data;
      });
    },
    async getHouseAccountAge(store) {
      await wearHouseAccountAge().then(response => {
        console.log("库存账龄统计", response.data);
        store.accountAge = response.data;
        store.showPie = true;
      });
    },
    async getStockAmount(store) {
      await stockAmount().then(response => {
        console.log("库存总量统计", response.data);
        store.stockList = response.data;
      });
    },
    async getHouseDynamicAccess(store) {
      await wearHouseDynamicAccess().then(response => {
        console.log("仓库动态出入", response.data);
        store.dateBar = response.data.date;
        store.wearHouseIn = response.data.wearHouseIn;
        store.wearHouseOut = response.data.wearHouseOut;
        store.showBar = true;
      });
    },
    getAllBigData(dispatch) {
      this.dispatch;
    }
  }
});
export default store;
