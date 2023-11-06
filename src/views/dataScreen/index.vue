<template>
  <div class="dataScreen-container">
    <div ref="dataScreenRef" class="dataScreen">
      <div class="dataScreen-header">
        <div class="header-ct">
          <div class="header-ct-title">
            <span>立库大屏
            </span>
          </div>
        </div>
      </div>
      <div class="dataScreen-main">
        <StockTable2 title="库存总量统计" :tableHead="stockHead" :tableData="stockList"/>
        <StockBox4/>
        <PieChart title="库存账龄统计"/>
        <BarChart title="仓库动态出入" :ckData="wearHouseOut" :rkData="wearHouseIn" :xData="dateBar"/>
        <KStockTable title="当前待发货物料" :tableHead="pendHead" :tableData="pendingGoods"/>
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
import {wearHouseAccountAge} from "@/api/index";
import axios from 'axios'
export default {
  name: "index",
  data() {
    return {
      data: "",
      pendHead:['流转卡号','物料编码','物料名称','需求数','已发数','待发数'],
      pendingGoods:[
        {
            "pending_qu": 5.0,
            "goods_name": "9R1B-A巨腾",
            "work_card_no": "WC20231018-049",
            "plan_qu": 10.0,
            "out_qu": 5.0,
            "goods_code": "JT0344NC1000"
        },
        {
            "pending_qu": 5.0,
            "goods_name": "9R1B-A巨腾",
            "work_card_no": "WC20231018-050",
            "plan_qu": 10.0,
            "out_qu": 5.0,
            "goods_code": "JT0344NC1000"
        },
        {
            "pending_qu": 5.0,
            "goods_name": "9R1B-A巨腾",
            "work_card_no": "WC20231018-051",
            "plan_qu": 10.0,
            "out_qu": 5.0,
            "goods_code": "JT0344NC1000"
        },
        {
            "pending_qu": 5.0,
            "goods_name": "9R1B-A巨腾",
            "work_card_no": "WC20231018-052",
            "plan_qu": 10.0,
            "out_qu": 5.0,
            "goods_code": "JT0344NC1000"
        },
        {
            "pending_qu": 5.0,
            "goods_name": "9R1B-A巨腾",
            "work_card_no": "WC20231018-053",
            "plan_qu": 10.0,
            "out_qu": 5.0,
            "goods_code": "JT0344NC1000"
        },
        {
            "pending_qu": 5.0,
            "goods_name": "9R1B-A巨腾",
            "work_card_no": "WC20231018-054",
            "plan_qu": 10.0,
            "out_qu": 5.0,
            "goods_code": "JT0344NC1000"
        },
        {
            "pending_qu": 5.0,
            "goods_name": "9R1B-A巨腾",
            "work_card_no": "WC20231018-055",
            "plan_qu": 10.0,
            "out_qu": 5.0,
            "goods_code": "JT0344NC1000"
        },
        {
            "pending_qu": 5.0,
            "goods_name": "9R1B-A巨腾",
            "work_card_no": "WC20231018-056",
            "plan_qu": 10.0,
            "out_qu": 5.0,
            "goods_code": "JT0344NC1000"
        },
        {
            "pending_qu": 5.0,
            "goods_name": "9R1B-A巨腾",
            "work_card_no": "WC20231018-057",
            "plan_qu": 10.0,
            "out_qu": 5.0,
            "goods_code": "JT0344NC1000"
        },
        {
            "pending_qu": 5.0,
            "goods_name": "9R1B-A巨腾",
            "work_card_no": "WC20231018-058",
            "plan_qu": 9.0,
            "out_qu": 4.0,
            "goods_code": "JT0344NC1000"
        },
        {
            "pending_qu": 5.0,
            "goods_name": "9R1B-A巨腾",
            "work_card_no": "WC20231028-009",
            "plan_qu": 100.0,
            "out_qu": 95.0,
            "goods_code": "JT0344NC1000"
        },
        {
            "pending_qu": 5.0,
            "goods_name": "9R1B-A巨腾",
            "work_card_no": "WC20231030-002",
            "plan_qu": 100.0,
            "out_qu": 95.0,
            "goods_code": "JT0344NC1000"
        },
        {
            "pending_qu": 5.0,
            "goods_name": "9R1B-A巨腾",
            "work_card_no": "WC20231028-010",
            "plan_qu": 100.0,
            "out_qu": 95.0,
            "goods_code": "JT0344NC1000"
        },
        {
            "pending_qu": 5.0,
            "goods_name": "9R1B-A巨腾",
            "work_card_no": "WC20231031-001",
            "plan_qu": 50.0,
            "out_qu": 45.0,
            "goods_code": "JT0344NC1000"
        },
        {
            "pending_qu": 5.0,
            "goods_name": "9R1B-A巨腾",
            "work_card_no": "WC20231102-001",
            "plan_qu": 100.0,
            "out_qu": 95.0,
            "goods_code": "JT0344DM1000"
        },
        {
            "pending_qu": 5.0,
            "goods_name": "9R1B-A巨腾",
            "work_card_no": "WC20231102-002",
            "plan_qu": 10.0,
            "out_qu": 5.0,
            "goods_code": "JT0344NC1000"
        },
        {
            "pending_qu": 5.0,
            "goods_name": "9R1B-A巨腾",
            "work_card_no": "WC20231102-003",
            "plan_qu": 10.0,
            "out_qu": 5.0,
            "goods_code": "JT0344NC1000"
        },
        {
            "pending_qu": 5.0,
            "goods_name": "9R1B-A巨腾",
            "work_card_no": "WC20231102-004",
            "plan_qu": 10.0,
            "out_qu": 5.0,
            "goods_code": "JT0344NC1000"
        },
        {
            "pending_qu": 5.0,
            "goods_name": "9R1B-A巨腾",
            "work_card_no": "WC20231102-005",
            "plan_qu": 10.0,
            "out_qu": 5.0,
            "goods_code": "JT0344NC1000"
        },
        {
            "pending_qu": 5.0,
            "goods_name": "9R1B-A巨腾",
            "work_card_no": "WC20231102-006",
            "plan_qu": 10.0,
            "out_qu": 5.0,
            "goods_code": "JT0344NC1000"
        }
      ],
      dateBar:[
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
      wearHouseOut:[
          55.0,
          64.0,
          42.0,
          50.0,
          55.0,
          40.0,
          55.0,
          60.0,
          65.0,
          55.0,
          48.0,
          65.0
      ],
      wearHouseIn:[
        65.0,
        60.0,
        70.0,
        55.0,
        40.0,
        58.0,
        62.0,
        69.0,
        55.0,
        42.0,
        38.0,
        54.0
      ],
      stockHead:['库存排行','商品名称','库存量'],
      stockList:[
        {
            "goods_name": "X8S-C-US无孔",
            "goods_code": "JT0142CY1000",
            "total_qu": 29978.0
        },
        {
            "goods_name": "9R1B-A",
            "goods_code": "HX0040NC1000",
            "total_qu": 1981.0
        },
        {
            "goods_name": "9R1B-A巨腾",
            "goods_code": "JT0344NC1000",
            "total_qu": 1072.0
        },
        {
            "goods_name": "百洁布",
            "goods_code": "FLBJB5C15001001",
            "total_qu": 900.0
        },
        {
            "goods_name": "9R1B-A巨腾",
            "goods_code": "JT0344CY1000",
            "total_qu": 510.0
        },
        {
            "goods_name": "TUFFY16-D",
            "goods_code": "JT0312CY1000",
            "total_qu": 100.0
        },
        {
            "goods_name": "TUFFY16-D",
            "goods_code": "JT0312NC1000",
            "total_qu": 100.0
        },
        {
            "goods_name": "凉席",
            "goods_code": "BG1.8MLX0000001",
            "total_qu": 10.0
        },
        {
            "goods_name": "9R1B-A巨腾",
            "goods_code": "JT0344DM1000",
            "total_qu": 7.0
        },
        {
            "goods_name": "X15C-C",
            "goods_code": "HX0028CY1000",
            "total_qu": 3.0
        },
        {
            "goods_name": "存货名称4",
            "goods_code": "004",
            "total_qu": 1.0
        },
        {
            "goods_name": "MS5-C-JP有孔",
            "goods_code": "JT0066ZJ1GR2",
            "total_qu": 0.0
        },
        {
            "goods_name": "胶带",
            "goods_code": "BCJDTM451001001",
            "total_qu": 0.0
        }],
      visible: false
    };
  },
  components: {
    StockTable2,
    KStockTable,
    StockBox4,
    PieChart,
    BarChart,
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
    // wearHouseAccountAge()
    // axios.post('http://120.27.212.89:29703/api/pride-dxsx-mes/big_screen/wearHouseAccountAge', {
    //   }).then(response => {
    //     console.log(response.data)
    //   })
    // 初始化 echarts
    // 为浏览器绑定事件
    window.addEventListener("resize", this.resize);
  },
  created() {
    this.socketApi.getSock(this.getConfigResult);
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
  >.dataScreen-main {
      justify-content: space-between;
  }
}
</style>