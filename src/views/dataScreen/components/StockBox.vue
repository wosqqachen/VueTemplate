<template>
  <div :class="type==1 ? 'kbox':'kbox big'">
    <div class="title">{{ title }}</div>
    <div class="lcon">
      <div  v-for="(item, index) in 6" :key="'kc' + index" :class="type==3 ? 'item half':'item'">
        <div class="icon2"></div>
        <div class="name">贴标数据</div>
        <div class="num">88</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: "机器人展示"
    },
    type: {
      default: "1"
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.kbox {
  width: 340px;
  height: 133px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 50px 0 20px;
  background-image: url("../images/bg1-2.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  .title {
    position: absolute;
    left: 0;
    top: 10px;
    width: 180px;
    font-size: 18px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    font-style: italic;
    color: #ffffff;
    line-height: 35px;
  }
  .lcon {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: flex-start;
    .item {
      width: 300px;
      height: 36px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      padding-right: 13px;
      margin-bottom: 2px;
      color: #fff;
      font-size: 14px;
      box-sizing: border-box;
      background-color: rgba(0, 2, 16, 0.4);
      .icon2 {
        width: 40px;
        height: 17px;
        background-image: url("../images/i3.png");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
      }
      .num {
        font-size: 14px;
        color: rgba(16, 216, 255, 1);
      }
    }
    .half{
      width: 142px;
    }
    .h {
      background-color: rgba(46, 38, 0, 0.3);
      .icon2 {
        background-image: url("../images/i4.png");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
      }
      .num {
        font-size: 14px;
        color: rgba(255, 189, 0, 1);
      }
    }
    .g{
      background-color: rgba(0, 46, 18, 0.3);
      .icon2 {
        background-image: url("../images/i6.png");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
      }
      .num{
        color: rgba(84, 239, 132, 1);
      }
      
    }
  }
}
.big{
  width: 360px;
  height: 233px;
  background-image: url("../images/bg1-3.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
