<template>
  <div class="slist sk">
    <div class="title">{{ title }}</div>
    <div id="chart" style="width: 860px; height: 300px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

require("echarts/theme/macarons"); // echarts theme

export default {
  props: {
    title: {
      default: "动态出入"
    },
    xData: {
      default: ""
    },
    ckData: {
      default: ""
    },
    rkData: {
      default: ""
    }
    
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const chart = echarts.init(document.getElementById("chart"));
      const option = {
        title: {
          show:false,
          text: "ECharts 示例"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          show:true,
          data: ["出库数", "入库数"],
          textStyle:{color:'#fff'},
          bottom: 25
        },
        xAxis: {
          type: "category",
          nameTextStyle:{color:'#fff'},
          data: this.xData
        },
        grid: {
          top: '2%',
          left: '1%',
          right: '1%',
          containLabel: true
        },
        yAxis: {
          type: "value",
          
        },
        series: [
          {
            name: "出库数",
            type: "bar",
            barWidth:'15px',
            itemStyle: {
              color: 'RGBA(34, 141, 232, 1)',
            },
            data: this.ckData
          },
          {
            name: "入库数",
            type: "bar",
            barWidth:'15px',
            itemStyle: {
              color: 'RGBA(20, 216, 174, 1)',
            },
            data: this.rkData
          }
        ]
      };
      chart.setOption(option);
    }
  }
};
</script>
<style scoped lang="scss">
.sk {
  width: 906px;
  height: 363px;
  background-image: url("../images/bg3.png");
}
</style>
