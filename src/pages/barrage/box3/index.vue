<template lang="pug">
.dmbg
  .dmbox(ref="dmbox2") 
    .list
      .item(v-for='(item, di) in 20' :key="'vk'+di")
        .txt 用户{{ di>10 ? '很长的名称啦啦啦':'短的名称' }}
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const dmbox2 = ref(null as any);
onMounted(() => {
  setTimeout(() => {
    sollNode();
  }, 2500);
});
const sollNode = () => {
  const el = dmbox2.value.childNodes[0];
  el.classList.add("tyd");
  let ofw = el.offsetWidth;
  if (ofw < 500) {
    ofw = ofw + 300;
  }
  const ydms = ofw / 0.05;
  console.log("弹幕参数长度" + ofw, "速度" + ydms);
  el.style.animationDuration = `${ydms}ms`;
};
</script>

<style scoped lang="scss">
.dmbg {
  width: 6rem;
  margin: 0 auto;
  background-image: url("../img/dmbg.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  &::after {
    content: "";
    display: inline-block;
    vertical-align: sub;
    position: absolute;
    top: 0.1rem;
    left: 0.8rem;
    width: 0.26rem;
    height: 0.23rem;
    background-image: url("../img/icon-gb.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  .dmbox {
    position: relative;
    width: 5rem;
    height: 0.4rem;
    margin: 0 auto;
    margin-left: 1.1rem;
    box-sizing: border-box;
    overflow: hidden;
    .list {
      position: relative;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      width: max-content;
      transform: translate3d(7rem, 0, 0);
      .item {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        width: auto;
        min-width: 1.5rem;
        height: 0.4rem;
        border-radius: 0.26rem;
        margin-right: 0.5rem;
        .txt {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          padding: 0 0.12rem 0 0.06rem;
          font-size: 0.24rem;
          font-weight: 400;
          color: #fff;
          line-height: 0.4rem;
        }
      }
    }
    .tyd {
      animation: yddmAn 20s infinite linear;
      @keyframes yddmAn {
        0% {
          transform: translate3d(7.5rem, 0, 0);
        }
        100% {
          transform: translate3d(calc(-100% - 7.5rem), 0, 0);
        }
      }
    }
  }
}
</style>
