<template>
  <div id="ring" class="card" style="width: 600px; height: 400px"></div>
</template>

<script>
import * as echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
export default {
  props: {
    title: {
      default: "库存统计总量"
    },
    tableHead: {
      default: ["库存排行", "商品名称", "库存量"]
    },
    tableData: {
      default: [
        {
          date: "2016-05-02",
          name: "王小虎",
          num: 99
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          num: 99
        }
      ]
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
          text: "ECharts 饼图示例"
        },
        legend: {
          top: "bottom",
          lineStyle: { color: "#91cc75" }
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
            type: "pie",
            radius: [70, 90],
            top: "15%",
            height: "33.33%",
            left: "center",
            width: 500,
            itemStyle: {
              borderColor: "#000",
              borderWidth: 0
            },
            label: {
              alignTo: "edge",
              formatter: "{name|{b}}\n{time|{c} 小时}",
              minMargin: 5,
              edgeDistance: 10,
              lineHeight: 15,
              rich: {
                time: {
                  fontSize: 10,
                  color: "#999"
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
              { value: 40, name: "一个月" },
              { value: 138, name: "一季度" }
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
