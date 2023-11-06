<template>
  <div class="slist">
    <div class="title">{{ title }}</div>
    <div class="con">
      <div class="btitle">产品名称显示位置</div>
      <div class="txt">产品编码：20231020182564001</div>
      <div class="txt">产品编码：20231020182564001</div>
      <div class="dcon">
        <img src="../images/d1.png" alt="" class="icon" />
        <img src="../images/d2.png" alt="" class="icon active" />
        <img src="../images/d3.png" alt="" class="icon" />
        <div class="jb"></div>
      </div>
      <div class="chart">
        <div class="cnum">267 <span>计划数</span></div>
        <RingChart/>
      </div>
    </div>
  </div>
</template>

<script>
import RingChart from "./RingChart.vue";
export default {
  props: {
    title: {
      default: "每月统计"
    },
    type: {
      default: "1"
    }
  },
  components: {
    RingChart
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.slist {
  width: 508px;
  height: 622px;
  background-image: url("../images/bg4.png");
  .con {
    height: 570px;
    padding: 0 20px;
  }
  .btitle {
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 10px auto;
    text-align: left;
    font-size: 30px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    font-style: italic;
    color: #ffffff;
    background: linear-gradient(180deg, #ffffff 40%, #95d6ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .txt {
    position: relative;
    height: 50px;
    line-height: 50px;
    text-align: left;
    font-size: 18px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    font-style: italic;
    color: rgba(255, 255, 255, 0.8);
    background: linear-gradient(180deg, #ffffff 50%, #95d6ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    &::before {
      content: "";
      display: inline-block;
      vertical-align: middle;
      width: 40px;
      height: 20px;
      background-image: url("../images/i5.png");
      background-repeat: no-repeat;
      background-position: left;
      background-size: contain;
    }
  }
  .dcon {
    width: 440px;
    height: 68px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 15px auto;
    padding: 0 105px;
    box-sizing: border-box;
    border-radius: 10px;
    border: 2px solid rgba(246, 199, 56, 0.5);
    position: relative;
    .icon {
      z-index: 2;
    }
    .jb {
      position: absolute;
      top: 10px;
      left: 0;
      z-index: 4;
      width: 400px;
      height: 0px;
      box-shadow: 17px 38px 22px 20px rgba(246, 199, 56, 0.65);
    }
    .red {
      border: 2px solid rgba(246, 199, 56, 0.5);
      .jb {
        box-shadow: 17px 38px 22px 20px rgba(246, 199, 56, 0.65);
      }
    }
    .green {
      box-shadow: 17px 38px 22px 20px rgba(246, 199, 56, 0.65);
    }
    .yellow {
      box-shadow: 17px 38px 22px 20px rgba(246, 199, 56, 0.65);
    }
    .active {
      z-index: 5;
    }
  }
  .chart{
    position: relative;
    .cnum{
      position: absolute;
      left: 50%;
      top: 50%;
      width: 120px;
      transform: translate3d(-70%, -60%, 0);
      font-size: 30px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      font-style: italic;
      color: #00E4FF;
      line-height: 25px;
      span{
        display: block;
        font-size: 12px;
        color: #fff;
      }
    }
  }
}
</style>
