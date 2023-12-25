<template lang="pug">
.dmbox(ref="dmbox") 
  .list(v-for='(li, index) in 3'  :key="'li'+index") 
    template(v-for='(item, di) in 20' :key="'vk'+di")
      .item(v-if="di%3==index")
        img.uimg(:src='require("@/assets/default_avatar.png")')
        .txt 用户{{ index }}{{ di>10 ? '很长的名称啦啦啦':'短的名称' }}
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const dmbox = ref(null);
onMounted(() => {
  setTimeout(() => {
    sollNode();
  }, 1500);
});
const sollNode = () => {
  let nowIndex = 1;
  for (let index = 0; index < 3; index++) {
    const el = dmbox.value.childNodes[nowIndex];
    el.classList.add("tyd");
    let ofw = el.offsetWidth;
    if (ofw < 500) {
      ofw = ofw + 300;
    }
    const ydms = ofw / 0.05;
    console.log("弹幕参数长度" + ofw, "速度" + ydms);
    el.style.animationDuration = `${ydms}ms`;
    nowIndex++;
  }
};
</script>

<style scoped lang="scss">
.dmbox {
  position: relative;
  width: 100%;
  height: 2.6rem;
  margin: 0 auto;
  padding: 0.25rem 0;
  border-radius: 1rem 0 0 0;
  box-sizing: border-box;
  overflow: hidden;
  .list {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    width: max-content;
    margin-bottom: 0.2rem;
    transform: translate3d(7.5rem, 0, 0);
    animation: ttbarrageAn 200s infinite linear;
    animation-delay: 1s;
    &:nth-child(2n) {
      margin-left: 2rem;
    }
    &:nth-child(3n) {
      margin-left: 4rem;
    }
    .item {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      width: auto;
      min-width: 1.5rem;
      height: 0.52rem;
      background: linear-gradient(
        94deg,
        rgba(255, 255, 255, 0.99),
        rgba(225, 247, 255, 0.99)
      );
      border: 0.01rem solid #929ae7;
      border-radius: 0.26rem;
      margin-right: 0.5rem;
      .uimg {
        width: 0.4rem;
        height: 0.4rem;
        flex-shrink: 0;
        margin: 0.05rem;
        border-radius: 50%;
        border: 0.01rem solid rgba(146, 154, 231, 1);
      }
      .txt {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding: 0 0.12rem 0 0.06rem;
        font-size: 0.24rem;
        font-weight: 400;
        color: #4241ba;
        line-height: 0.45rem;
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
</style>
