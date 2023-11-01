<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import * as echarts from "echarts";

require("echarts/theme/macarons"); // echarts theme

export default {
  // mixins: [resize],
  props: {
    className: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "350px"
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      chart: null
    };
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val);
      }
    }
  },
  mounted() {
    //   在组建再次渲染时，调用 this.initChart()初始化echarts图表
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose(); //在组件销毁的时候，调用chart.dispose()销毁图表实例
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el); //调用echarts.init()方法初始化图表
      this.setOptions(this.chartData);
      /*
      设置图表实例的配置项以及数据，万能接口，所有参数和数据的修改都可以通过 setOption 完成，
      ECharts 会合并新的参数和数据，然后刷新图表。
      如果开启动画的话，ECharts 找到两组数据之间的差异然后通过合适的动画去表现数据的变化。
      */
    },

    setOptions({ totalData, normalData, manMachineSeparationData, notMyselfData, titleLine } = {}) {
      var dataArr = 60; //现实的百分比数据
      var data = 0;
      this.chart.setOption(
        {
          backgroundColor: "#FFFFFF", //背景色，默认无背景。
          title: {
            //标题组件，包含主标题和副标题。
            show: true,
            text: "任务进度", //主标题
            x: "50%", //直角坐标系 grid 中的 x 轴，
            y: "57%", //直角坐标系 grid 中的 y 轴
            z: 8, //直角坐标系 grid 中的 z轴
            textAlign: "center", //文字的对齐方式
            textStyle: {
              //文字的样式
              color: "#f1f7fe",
              fontSize: 20,
              fontWeight: "normal"
            }
          },
          series: [
            //控制图表是那种样式,比如柱状图或者饼图
            // 最小的时钟的样式
            {
              name: "内部（环形）进度条",
              type: "gauge", //仪表盘
              // center: ['20%', '50%'],
              radius: "60%",
              splitNumber: 10, //分裂数
              axisLine: {
                //周线的相关设置
                lineStyle: {
                  color: [
                    [dataArr / 100, "#458EFD"], //dataArr / 100处的颜色
                    [1, "#FFFFFF"] //100% 处的颜色
                  ],
                  width: 14 //线的宽度
                }
              },
              axisLabel: {
                show: false //是否显示刻度标签。
              },
              axisTick: {
                show: false //是否显示坐标轴刻度。
              },
              splitLine: {
                show: false //是否显示分隔线。默认数值轴显示，类目轴不显示。(在该案例中表示是否显示时钟的刻度线)
              },
              pointer: {
                show: false //是否显示指针。
              }
            },
            {
              name: "外部刻度",
              type: "gauge",
              //  center: ['20%', '50%'],
              radius: "70%",
              min: 0, //最小刻度
              max: 100, //最大刻度
              splitNumber: 10, //刻度数量
              startAngle: 225,
              endAngle: -45,
              axisLine: {
                show: true,
                // 仪表盘刻度线
                lineStyle: {
                  width: 2,
                  color: [[1, "#FFFFFF"]]
                }
              },
              //仪表盘文字
              axisLabel: {
                show: true,
                color: "#868FDF",
                distance: 25,
                formatter: function (v) {
                  //用来格式化图例文本，支持字符串模板和回调函数两种形式。
                  switch (v + "") {
                    case "0":
                      return "0";
                    case "10":
                      return "10";
                    case "20":
                      return "20";
                    case "30":
                      return "30";
                    case "40":
                      return "40";
                    case "50":
                      return "50";
                    case "60":
                      return "60";
                    case "70":
                      return "70";
                    case "80":
                      return "80";
                    case "90":
                      return "90";
                    case "100":
                      return "100";
                  }
                }
              }, //刻度标签。
              axisTick: {
                show: true,
                splitNumber: 7,
                lineStyle: {
                  color: "#3082FE", //用颜色渐变函数不起作用
                  width: 2
                },
                length: -8
              }, //刻度样式
              splitLine: {
                show: true,
                length: -20,
                lineStyle: {
                  color: "#458EFD" //用颜色渐变函数不起作用
                }
              }, //分隔线样式
              detail: {
                show: false
              },
              pointer: {
                show: false
              }
            },
            /*内部*/
            {
              type: "pie",
              radius: ["0", "40%"],
              center: ["50%", "50%"],
              z: 8,
              hoverAnimation: false,
              data: [
                {
                  name: "检查进度",
                  value: dataArr,
                  itemStyle: {
                    normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 0,
                          color: "#3398ff"
                        },
                        {
                          offset: 1,
                          color: "#7db0fd"
                        }
                      ])
                    }
                  },
                  label: {
                    normal: {
                      formatter: function (params) {
                        return params.value + "%";
                      },
                      color: "#FFFFFF",
                      fontSize: 54,
                      fontWeight: "bold",
                      position: "center",
                      show: true
                    }
                  },
                  labelLine: {
                    show: false
                  }
                }
              ]
            },
            /*外一层*/
            {
              type: "pie",
              radius: "45%",
              startAngle: 220,
              endAngle: -40,
              hoverAnimation: false,
              center: ["50%", "50%"],
              avoidLabelOverlap: false,
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              data: [
                {
                  value: 1,
                  itemStyle: {
                    normal: {
                      color: "#8DC4FD"
                    }
                  }
                }
              ]
            },
            //外二层圈
            {
              type: "pie",
              radius: "50%",
              center: ["50%", "50%"],
              avoidLabelOverlap: false,
              z: 0,
              hoverAnimation: false,
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              data: [
                {
                  value: 1,
                  itemStyle: {
                    normal: {
                      color: "#e3edf8"
                    }
                  }
                }
              ]
            }
          ]
        },
        true
      );
    }
  }
};
</script>
