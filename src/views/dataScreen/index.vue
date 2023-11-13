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
import { mapState } from "vuex";
export default {
  data() {
    return {
      data: "",
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
  computed: {
    ...mapState([
      "showPie",
      "showBar",
      "pendHead",
      "pendingGoods",
      "dateBar",
      "wearHouseOut",
      "wearHouseIn",
      "stockHead",
      "stockList",
      "accountAge"
    ])
  },
  methods: {
    getScale(width = 1920, height = 1080) {
      let ww = window.innerWidth / width;
      let wh = window.innerHeight / height;
      return ww < wh ? ww : wh;
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
    this.$store.dispatch("getAllBigData");
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
