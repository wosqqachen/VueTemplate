<template>
  <div class="dataScreen-container">
    <div ref="dataScreenRef" class="dataScreen">
      <div class="dataScreen-header">
        <div class="header-ct">
          <div class="header-ct-title">
            <span>OP40大屏 </span>
          </div>
        </div>
      </div>
      <div class="dataScreen-main">
        <div class="d-lf">
          <StockTable title="正在加工产品" :info="makeInfo" />
        </div>
        <div class="d-rf">
          <StockBox3 />
          <StockBox />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StockTable from "./components/StockTable.vue";
import StockBox3 from "./components/StockBox3.vue";
import StockBox from "./components/StockBox.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      work_position_id: "2023070415153194225200001",
      visible: false
    };
  },
  components: {
    StockTable,
    StockBox3,
    StockBox
  },
  computed: {
    ...mapState(["makeInfo"])
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
      // Object.values(dataScreen).forEach(chart => {
      //   chart && chart.resize();
      // });
    }
  },
  mounted() {
    // this.socketApi.createWebSocket();
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
    this.$store.dispatch("getBig40Data", this.work_position_id);
  }
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
<style lang="scss" scoped>
.dataScreen {
  background: url("./images/bgp2.png") no-repeat;
  background-repeat: no-repeat;
  background-attachment: fixed;
  > .dataScreen-main {
    justify-content: space-between;
    .d-lf {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 510px;
      height: 100%;
      margin-right: 0px;
      padding-bottom: 20px;
      box-sizing: border-box;
    }
    .d-rf {
      flex: 1;
      position: relative;
      > :nth-child(1) {
        position: absolute;
        left: 320px;
        top: 99px;
        &::after {
          content: "";
          display: inline-block;
          vertical-align: sub;
          position: absolute;
          top: 90%;
          left: 40%;
          width: 201px;
          height: 101px;
          background: url("./images/xr.png") no-repeat;
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        }
      }
      > :nth-child(2) {
        position: absolute;
        left: 130px;
        bottom: 390px;
        &::after {
          content: "";
          display: inline-block;
          vertical-align: sub;
          position: absolute;
          top: 90%;
          left: -10%;
          width: 201px;
          height: 101px;
          background: url("./images/xl.png") no-repeat;
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        }
      }
      > :nth-child(3) {
        position: absolute;
        right: 170px;
        top: 300px;
        &::after {
          content: "";
          display: inline-block;
          vertical-align: sub;
          position: absolute;
          top: 90%;
          left: -10%;
          width: 201px;
          height: 101px;
          background: url("./images/xl.png") no-repeat;
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        }
      }
    }
  }
}
</style>
