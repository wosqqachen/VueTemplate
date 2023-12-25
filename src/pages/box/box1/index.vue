<template>
  <div class="gift">
    <div class="box1">
      <div class="txt">每集齐一套8种圣诞礼物自动获得 圣诞头像框*7天</div>
      <div class="lw">
        <img
          src="https://config.unitokchat.com/untk/cloud/resources/99a2ba83cd48f805c7aaca5d62d66cc3.png"
          alt=""
        />
        <div class="tips">已集齐2套</div>
      </div>
    </div>
    <div class="list">
      <div class="item" v-for="(item, index) in 6" :key="'gf' + index">
        <div class="tips">2个</div>
        <img
          src="https://config.unitokchat.com/untk/cloud/resources/99a2ba83cd48f805c7aaca5d62d66cc3.png"
          class="limg"
        />
        <div class="name">圣诞礼物</div>
        <div class="gold">1000</div>
        <div class="s" v-if="index > 4"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const list = ref([
  {
    gift_id: "100021",
    static_icon:
      "https://config.unitokchat.com/untk/cloud/resources/99a2ba83cd48f805c7aaca5d62d66cc3.png",
    item_name: "Wand",
    dPrice: 20000,
    num: 3
  }
]);
</script>

<style lang="scss" scoped>
.gift {
  margin: 0.24rem auto;
  padding-bottom: 0.2rem;
  width: 7.02rem;
  height: 7.98rem;
  box-sizing: border-box;
  padding: 0.65rem 0.24rem 0;
  background: url("../img/bg3.png") no-repeat 0/100% 100%;
  .box1 {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    height: 1.9rem;
    padding: 0 0.15rem;
    .txt {
      width: 4.1rem;
      font-size: 0.28rem;
      font-family: Noto Sans S Chinese;
      font-weight: 400;
      color: #ffffff;
    }
    .lw {
      position: relative;
      img {
        width: 1.46rem;
        height: auto;
      }
      .tips {
        position: absolute;
        bottom: -0.1rem;
        width: 1.37rem;
        height: 0.38rem;
        line-height: 0.38rem;
        background: #ffa517;
        border-radius: 0.19rem;
        font-size: 0.22rem;
        font-weight: 400;
        z-index: 2;
        text-align: center;
        color: #ffffff;
        margin-top: -0.2rem;
      }
    }
  }
  .list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    .item {
      position: relative;
      width: 2.1rem;
      height: 2.53rem;
      background: rgba(255, 245, 230, 1);
      border-radius: 0.2rem;
      margin-bottom: 0.14rem;
      text-align: center;
      .tips {
        position: absolute;
        right: -0.05rem;
        top: -0.05rem;
        width: 0.85rem;
        height: 0.37rem;
        background: #07e5c8;
        border-radius: 0.19rem 0.19rem 0.19rem 0.04rem;
        font-size: 0.22rem;
        font-weight: bold;
        color: #ffffff;
      }
      .limg {
        width: 1.66rem;
        height: 1.66rem;
        text-align: center;
      }
      .name {
        font-size: 0.24rem;
        font-weight: 400;
        color: #e44b31;
      }
      .gold {
        font-size: 0.26rem;
        font-family: Noto Sans S Chinese;
        font-weight: bold;
        color: #ff9d02;
        position: relative;
        &::before {
          content: "";
          display: inline-block;
          vertical-align: sub;
          width: 0.32rem;
          height: 0.22rem;
          background-image: url("../img/diamond.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        }
      }
      .s {
        position: absolute;
        right: 0;
        top: 0;
        display: inline-block;
        vertical-align: sub;
        width: 100%;
        height: 100%;
        z-index: 5;
        background-image: url("../img/sicon.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 0.46rem 0.58rem;
        border-radius: 0.2rem;
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }
}
</style>
