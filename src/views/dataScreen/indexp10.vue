<template>
  <div class="dataScreen-container">
    <div ref="dataScreenRef" class="dataScreen">
      <div class="dataScreen-header">
        <div class="header-ct">
          <div class="header-ct-title">
            <span>OP10-20大屏 </span>
          </div>
        </div>
      </div>
      <div class="dataScreen-main">
        <div class="d-lf">
          <StockTable title="正在加工产品" :info="makeInfo" />
          <StockTable4 title="视觉拍照" :tableHead="[picUrl]" />
        </div>
        <div class="d-rf">
          <StockBox3 />
          <StockBox :type="2" />
        </div>
        <StockTable4 class="rtop" :type="2" title="生产数量信息" :tableHead="OkParams" />
        <StockTable4 class="rtop2" :type="3" title="OCV参数" :tableHead="OCVParams" />
        <StockTable3 class="rtop3" title="预警信息" :tableHead="['排行', '名称', '数量']" :tableData="alaInfo" />
      </div>
    </div>
  </div>
</template>

<script>
import StockTable from "./components/StockTable.vue";
import StockTable3 from "./components/StockTable3.vue";
import StockBox3 from "./components/StockBox3.vue";
import StockTable4 from "./components/StockTable4.vue";
import StockBox from "./components/StockBox.vue";
import { makeQuInfo, OCVParams, alarmsInfo, visualPhoto, currentMakeGoods } from "@/api/index";
export default {
  data() {
    return {
      work_position_id: "2023070415153194225200001",
      picUrl: "",
      makeInfo: "",
      alaInfo: [],
      OkParams: [0, 0, 0],
      OCVParams: [0, 0, 0, 0],
      visible: false
    };
  },
  components: {
    StockTable,
    StockBox3,
    StockTable3,
    StockTable4,
    StockBox
  },
  methods: {
    getScale(width = 1920, height = 1080) {
      let ww = window.innerWidth / width;
      let wh = window.innerHeight / height;
      return ww < wh ? ww : wh;
    },
    allData() {
      makeQuInfo(this.work_position_id).then(response => {
        console.log("生产数量信息", response.data);
        this.OkParams.splice(0, 1, response.data.checked_qu);
        this.OkParams.splice(1, 1, response.data.ok_qu);
        this.OkParams.splice(2, 1, response.data.bad_qu);
      });
      OCVParams(this.work_position_id).then(response => {
        console.log("OCV参数", response.data);
        this.OCVParams.splice(0, 1, response.data.voltage);
        this.OCVParams.splice(1, 1, response.data.current);
        this.OCVParams.splice(2, 1, response.data.resistance);
        this.OCVParams.splice(3, 1, response.data.ovc);
      });
      alarmsInfo(this.work_position_id).then(response => {
        console.log("预警信息", response.data);
        this.alaInfo = response.data;
        
      });
      visualPhoto(this.work_position_id).then(response => {
        console.log("视觉拍照", response.data);
        this.picUrl = response.data.url;
      });
      currentMakeGoods(this.work_position_id).then(response => {
        console.log("正在加工产品", response.data);
        this.makeInfo = response.data;
      });
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
    this.allData();
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
    position: relative;
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
        left: 180px;
        bottom: 330px;
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
        left: 450px;
        top: 340px;
        &::after {
          content: "";
          display: inline-block;
          vertical-align: sub;
          position: absolute;
          top: 90%;
          left: 50%;
          width: 201px;
          height: 101px;
          background: url("./images/xr.png") no-repeat;
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        }
      }
    }

    .rtop {
      position: absolute;
      right: 40px;
      top: 10px;
    }
    .rtop2 {
      position: absolute;
      right: 40px;
      top: 310px;
    }
    .rtop3 {
      position: absolute;
      right: 40px;
      bottom: 45px;
    }
  }
}
</style>
