<template>
  <div class="gbox">
    <div class="title">{{ title }}</div>
    <div class="lcon">
      <div class="item">
        <div class="icon2"></div>
        <div class="name">滚动贴标数据</div>
        <div class="num">88888</div>
      </div>
      <div class="item h">
        <div class="icon2"></div>
        <div class="name">自动贴标数据</div>
        <div class="num">88888</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: "机器人展示"
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.gbox {
  width: 360px;
  height: 163px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  padding: 50px 0 20px;
  background-image: url("../images/bg1-2.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  box-sizing: border-box;
  position: relative;
  .title {
    position: absolute;
    left: 0;
    top: 20px;
    width: 180px;
    font-size: 18px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    font-style: italic;
    color: #ffffff;
    line-height: 35px;
  }
  .lcon {
    .item {
      width: 300px;
      height: 36px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      padding: 0 13px;
      margin-bottom: 2px;
      color: #fff;
      font-size: 14px;
      box-sizing: border-box;
      background-color: rgba(0, 2, 16, 0.4);
      .icon2 {
        width: 15px;
        height: 17px;
        background-image: url("../images/i3.png");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
      }
      .num {
        font-size: 14px;
      }
    }
    .h {
      background-color: rgba(46, 38, 0, 0.4);
      .icon2 {
        background-image: url("../images/i4.png");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
      }
    }
  }
}
</style>
