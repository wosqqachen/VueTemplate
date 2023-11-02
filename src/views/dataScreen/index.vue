<template>
  <div class="dataScreen-container">
    <div ref="dataScreenRef" class="dataScreen">
      <div class="dataScreen-header" v-if="false">
        <div class="header-lf">
          <!-- <span class="header-screening" @click="router.push(HOME_URL)">首页</span> -->
        </div>
        <div class="header-ct">
          <div class="header-ct-title">
            <span>测试大屏幕展示平台</span>
            <div class="header-ct-warning">平台高峰预警信息（2条）</div>
          </div>
        </div>
        <div class="header-rg">
          <!-- <span class="header-download">统计报告</span>
          <span class="header-time">当前时间：{{ time }}</span> -->
        </div>
      </div>
      <div class="dataScreen-main">
        <!-- 
          <KStockTable></KStockTable>
        <BarChart />
        <PieChart /> -->
        <StockTable></StockTable>
        <StockBox />
        <!-- //第三步在template中使用并传入需要的数据 -->
        <!-- <demo-chart :chartData="chartData" width="300px" height="300px"></demo-chart> -->
        <div class="dataScreen-lf" v-if="false">
          <div class="dataScreen-top">
            <div class="dataScreen-main-title">
              <span>实时游客统计</span>
              <img src="./images/dataScreen-title.png" alt="" />
            </div>
            <!-- chart区域 -->
            <div class="dataScreen-main-chart">
              <!-- <RealTimeAccessChart ref="RealTimeAccessRef" /> -->
            </div>
          </div>
          <div class="dataScreen-center">
            <div class="dataScreen-main-title">
              <span>男女比例</span>
              <img src="./images/dataScreen-title.png" alt="" />
            </div>
            <!-- chart区域 -->
            <div class="dataScreen-main-chart">
              <MaleFemaleRatioChart ref="MaleFemaleRatioRef" />
            </div>
          </div>
          <div class="dataScreen-bottom">
            <div class="dataScreen-main-title">
              <span>年龄比例</span>
              <img src="./images/dataScreen-title.png" alt="" />
            </div>
            <!-- chart区域 -->
            <div class="dataScreen-main-chart">
              <AgeRatioChart ref="AgeRatioRef" />
            </div>
          </div>
        </div>
        <div class="dataScreen-ct" v-if="false">
          <div class="dataScreen-map">
            <div class="dataScreen-map-title">景区实时客流量</div>
            <!-- <vue3-seamless-scroll
							:list="alarmData"
							class="dataScreen-alarm"
							:step="0.5"
							:hover="true"
							:limitScrollNum="3"
						>
							<div class="dataScreen-alarm">
								<div class="map-item" v-for="item in alarmData" :key="item.id">
									<img src="./images/dataScreen-alarm.png" alt="" />
									<span class="map-alarm sle">{{ item.label }} 预警：{{ item.warnMsg }}</span>
								</div>
							</div>
						</vue3-seamless-scroll> -->
            <mapChart ref="MapChartRef" />
          </div>
          <div class="dataScreen-cb">
            <div class="dataScreen-main-title">
              <span>未来30天游客量趋势图</span>
              <img src="./images/dataScreen-title.png" alt="" />
            </div>
            <!-- chart区域 -->
            <div class="dataScreen-main-chart">
              <OverNext30Chart ref="OverNext30Ref" />
            </div>
          </div>
        </div>
        <div class="dataScreen-rg" v-if="false">
          <div class="dataScreen-top">
            <div class="dataScreen-main-title">
              <span>热门景区排行</span>
              <img src="./images/dataScreen-title.png" alt="" />
            </div>
            <!-- chart区域 -->
            <div class="dataScreen-main-chart">
              <HotPlateChart ref="HotPlateRef" />
            </div>
          </div>
          <div class="dataScreen-center">
            <div class="dataScreen-main-title">
              <span>年度游客量对比</span>
              <img src="./images/dataScreen-title.png" alt="" />
            </div>
            <!-- chart区域 -->
            <div class="dataScreen-main-chart">
              <AnnualUseChart ref="AnnualUseRef" />
            </div>
          </div>
          <div class="dataScreen-bottom">
            <div class="dataScreen-main-title">
              <span>预约渠道数据统计</span>
              <img src="./images/dataScreen-title.png" alt="" />
            </div>
            <!-- chart区域 -->
            <div class="dataScreen-main-chart">
              <PlatformSourceChart ref="PlatformSourceRef" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StockTable from "./components/StockTable.vue";
import KStockTable from "./components/KStockTable.vue";
import DemoChart from "./components/DemoChart.vue";
import BarChart from "./components/BarChart.vue";
import PieChart from "./components/PieChart.vue";
import RingChart from "./components/RingChart.vue";
import StockBox from "./components/StockBox.vue";

export default {
  name: "index",
  data() {
    return {
      data: "",
      visible: false
    };
  },
  components: {
    StockTable,
    KStockTable,
    StockBox,
    PieChart,
    BarChart,
    DemoChart,
    RingChart
  },
  methods: {
    // 获取socket信息回调
    getConfigResult(res) {
      // 获取websocket发来的信息
      console.log(res.data);
    },
    sendSocket() {
      this.socketApi.sendSock(data, callBack);
    },
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
    initCharts();
  },
  created() {
    this.socketApi.getSock(this.getConfigResult);
  }
};
</script>

<style lang="scss">
@import "./index.scss";
.dataScreen {
  // background: url("./images/bgp1.png") no-repeat;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
