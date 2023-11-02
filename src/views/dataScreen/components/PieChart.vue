<template>
  <div class="slist">
    <div class="title">{{ title }}</div>
    <div id="chart2" class="card" style="width: 490px; height: 480px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

require("echarts/theme/macarons"); // echarts theme

export default {
  props: {
    title: {
      default: "动态出入"
    }
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const chart = echarts.init(document.getElementById("chart2"));
      const option = {
        title: {
          text: "ECharts 饼图示例"
        },
        legend: {
          top: "bottom"
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: "Nightingale Chart",
            type: "pie",
            radius: [50, 150],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8
            },
            data: [
              { value: 40, name: "一个月" },
              { value: 38, name: "一季度" },
              { value: 32, name: "半年" },
              { value: 30, name: "一年" },
              { value: 28, name: "两年" },
              { value: 26, name: "两年以上" }
            ]
          }
        ]
      };

      chart.setOption(option);
    }
  }
};
</script>
<style lang="scss" scoped>
.slist {
  width: 508px;
  height: 533px;
  background-image: url("../images/bg2.png");
}
</style>
