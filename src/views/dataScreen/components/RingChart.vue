<template>
  <div id="ring" class="ring"></div>
</template>

<script>
import * as echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
export default {
  props: {
    info: {
      default: { already_qu: 0, remain_qu: 0 }
    }
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const chart = echarts.init(document.getElementById("ring"));
      const option = {
        title: {
          text: ""
        },
        legend: {
          show: false,
          top: "bottom",
          lineStyle: { color: "#91cc75" }
        },
        toolbox: {
          show: false,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            type: "pie",
            radius: [60, 80],
            top: "30%",
            height: "33.33%",
            left: "center",
            width: 300,
            itemStyle: {
              borderColor: "#000",
              borderWidth: 0
            },
            label: {
              alignTo: "edge",
              formatter: "{name|{c}}\n{time|{b}}",
              minMargin: 5,
              edgeDistance: 10,
              lineHeight: 25,
              rich: {
                name: {
                  color: "#FCB801",
                  fontSize: 24
                },
                time: {
                  fontSize: 14,
                  color: "#fff"
                }
              }
            },
            labelLine: {
              length: 15,
              length2: 0,
              maxSurfaceAngle: 80
            },
            labelLayout: function (params) {
              const isLeft = params.labelRect.x < chart.getWidth() / 2;
              const points = params.labelLinePoints;
              // Update the end point.
              points[2][0] = isLeft ? params.labelRect.x : params.labelRect.x + params.labelRect.width;
              return {
                labelLinePoints: points
              };
            },
            data: [
              { value: this.info.remain_qu, name: "剩余数" },
              { value: this.info.already_qu, name: "已完成数" }
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
.ring {
  width: 400px;
  height: 300px;
}
</style>
