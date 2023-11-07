<template>
  <div class="dataScreen-container">
    <div ref="dataScreenRef" class="dataScreen">
      <div class="dataScreen-header">
        <div class="header-ct">
          <div class="header-ct-title">
            <span>立库大屏 </span>
          </div>
        </div>
      </div>
      <div class="dataScreen-main">
        <StockTable2 title="库存总量统计" :tableHead="stockHead" :tableData="stockList" />
        <StockBox4 />
        <PieChart title="库存账龄统计" v-if="showPie" :accountAge="accountAge" />
        <BarChart title="仓库动态出入" v-if="showBar" :ckData="wearHouseOut" :rkData="wearHouseIn" :xData="dateBar" />
        <KStockTable title="当前待发货物料" :tableHead="pendHead" :tableData="pendingGoods" />
      </div>
    </div>
  </div>
</template>

<script>
import StockTable2 from "./components/StockTable2.vue";
import PieChart from "./components/PieChart.vue";
import BarChart from "./components/BarChart.vue";
import KStockTable from "./components/KStockTable.vue";
import StockBox4 from "./components/StockBox4.vue";
import { currentPendingGoods, wearHouseAccountAge, stockAmount, wearHouseDynamicAccess } from "@/api/index";
export default {
  data() {
    return {
      data: "",
      showPie: false,
      showBar: false,
      pendHead: ["流转卡号", "物料编码", "物料名称", "需求数", "已发数", "待发数"],
      pendingGoods: [],
      dateBar: [
        "7:00",
        "8:00",
        "9:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00"
      ],
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
      accountAge: {},
      visible: false
    };
  },
  components: {
    StockTable2,
    KStockTable,
    StockBox4,
    PieChart,
    BarChart
  },
  methods: {
    getScale(width = 1920, height = 1080) {
      let ww = window.innerWidth / width;
      let wh = window.innerHeight / height;
      return ww < wh ? ww : wh;
    },
    allData() {
      currentPendingGoods().then(response => {
        console.log("当前待发货物料", response.data);
        this.pendingGoods = response.data;
      });
      wearHouseAccountAge().then(response => {
        console.log("库存账龄统计", response.data);
        this.accountAge = response.data;
        this.showPie = true;
      });
      stockAmount().then(response => {
        console.log("库存总量统计", response.data);
        this.stockList = response.data;
      });
      wearHouseDynamicAccess().then(response => {
        console.log("仓库动态出入", response.data);
        this.dateBar = response.data.date;
        this.wearHouseIn = response.data.wearHouseIn;
        this.wearHouseOut = response.data.wearHouseOut;
        this.showBar = true;
      });
    },
    // 监听浏览器 resize 事件
    resize() {
      if (this.$refs.dataScreenRef) {
        this.$refs.dataScreenRef.style.transform = `scale(${this.getScale()}) translate(-50%, -50%)`;
      }
      // 使用了 scale 的echarts其实不需要需要重新计算缩放比例
      // Object.values(this.$refs.dataScreenRef).forEach(chart => {
      //   chart && chart.resize();
      // });
    }
  },
  mounted() {
    // 初始化时为外层盒子加上缩放属性，防止刷新界面时就已经缩放
    if (this.$refs.dataScreenRef) {
      this.$refs.dataScreenRef.style.transform = `scale(${this.getScale()}) translate(-50%, -50%)`;
      this.$refs.dataScreenRef.style.width = `1920px`;
      this.$refs.dataScreenRef.style.height = `1080px`;
    }
    // 初始化 echarts
    // 为浏览器绑定事件
    window.addEventListener("resize", this.resize);
  },
  created() {
    this.allData();
  }
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
<style lang="scss" scoped>
.dataScreen {
  background: url("./images/bgp1.png") no-repeat;
  background-repeat: no-repeat;
  background-attachment: fixed;
  > .dataScreen-main {
    justify-content: space-between;
  }
}
</style>
