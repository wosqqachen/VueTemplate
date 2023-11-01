<template>
  <div id="chart" class="card" style="width: 600px; height: 400px"></div>
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
      const chart = echarts.init(document.getElementById("chart"));
      const option = {
        title: {
          text: "ECharts 示例"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["收入", "支出"],
          bottom: 15
        },
        xAxis: {
          type: "category",
          data: ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "收入",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20, 10, 10, 20, 30, 90, 20]
          },
          {
            name: "支出",
            type: "bar",
            data: [15, 14, 26, 30, 20, 20, 10, 10, 20, 50, 40, 20]
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
  width: 400px;
  height: 400px;
  background-color: #fff;
}
</style>
