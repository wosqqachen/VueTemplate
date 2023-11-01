<template>
  <div id="chart2" class="card" style="width: 600px; height: 400px"></div>
</template>

<script>
import * as echarts from "echarts";

require("echarts/theme/macarons"); // echarts theme

export default {
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
<style scoped lang="scss">
.card {
  width: 500px;
  height: 500px;
  background-color: #fff;
}
</style>
