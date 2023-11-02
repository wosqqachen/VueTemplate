<template>
  <div class="gbox">
    <div class="title">{{ title }}</div>
    <div class="con">
      <img src="../images/d1.png" alt="" class="icon1" />
      <div class="scon">
        <div class="sh">故障</div>
        <div class="sd">运行状态</div>
      </div>
    </div>
    <div class="con">
      <img src="../images/icon1.png" alt="" class="icon" />
      <div class="scon">
        <div class="sl">故障</div>
        <div class="sd">运行状态</div>
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
  width: 340px;
  height: 133px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  padding: 40px 0 20px;
  background-image: url("../images/bg1-2.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  box-sizing: border-box;
  position: relative;
  .title {
    position: absolute;
    left: 0;
    top: 8px;
    width: 180px;
    font-size: 18px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    font-style: italic;
    color: #ffffff;
    line-height: 35px;
  }
  .con {
    width: 126px;
    height: 58px;
    padding: 0 5px 0 5px;
    box-sizing: border-box;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 2, 16, 0.5);
  }
  .icon {
    width: 35px;
    height: 35px;
    margin-right: 10px;
  }
  .icon1 {
    width: 50px;
    height: 50px;
    margin-left: -10px;
  }
  .scon {
    width: 80px;
    text-align: left;
    flex: 1;
    padding-left: 10px;
    font-style: italic;
    .sh {
      font-size: 18px;
      font-weight: bold;
      color: #ff7373;
    }
    .sl {
      font-size: 18px;
      font-weight: bold;
      color: #00e4ff;
    }
    .sd {
      font-size: 12px;
      color: #fff;
    }
  }
}
</style>
