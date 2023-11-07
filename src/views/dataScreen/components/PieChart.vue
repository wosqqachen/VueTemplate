<template>
  <div class="slist">
    <div class="title">{{ title }}</div>
    <div id="chart2" class="card" style="width: 490px; height: 430px"></div>
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
    accountAge: {
      default: {}
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
          show: false,
          text: "ECharts 饼图示例"
        },
        legend: {
          top: "bottom",
          textStyle: { color: "#fff" }
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
            radius: [30, 150],
            center: ["50%", "60%"],
            roseType: "area",
            bottom: "25%",
            width: 490,
            label: {
              alignTo: "edge",
              formatter: "{name|{b}}\n{time|{c} w}",
              minMargin: 2,
              edgeDistance: 30,
              lineHeight: 15,
              rich: {
                name: {
                  color: "#ED5948",
                  fontSize: 12
                },
                time: {
                  fontSize: 10,
                  color: "#6ADFFE"
                }
              }
            },
            labelLine: {
              length: 15,
              length2: 0,
              maxSurfaceAngle: 20
            },
            itemStyle: {
              borderRadius: 0
            },
            data: [
              { value: 23, name: "一个月" },
              { value: this.accountAge.three_month, name: "三个月" },
              { value: this.accountAge.half_a_year, name: "半年" },
              { value: this.accountAge.a_year, name: "一年" },
              { value: this.accountAge.two_year, name: "两年" },
              { value: this.accountAge.two_year_up, name: "两年以上" }
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
