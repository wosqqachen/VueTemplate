<template lang="pug">
.pxbox
  .snow.snow1
  .snow.snow2 
  .snow.snow3
  .snow.snow4
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
.pxbox {
  width: 6rem;
  margin: 0 auto;
  position: relative;
  .snow {
    position: fixed;
    top: -1rem;
    z-index: 10;
    width: 1rem;
    height: 1rem;
  }
  .snow1 {
    background: url("../img/3-snow1.png") center/contain no-repeat;
    animation: sn1 12s infinite linear;
    @keyframes sn1 {
      0% {
        left: 1%;
        top: -1%;
        transform: rotate(0deg) scale(0.6);
      }
      50% {
        left: 3%;
        top: 50%;
        transform: rotate(160deg) scale(0.9);
      }
      100% {
        left: 1%;
        top: 110%;
        transform: rotate(0deg) scale(0.6);
      }
    }
  }
  .snow2 {
    background: url("../img/3-snow2.png") center/contain no-repeat;
    animation: sn2 15s infinite linear;
    @keyframes sn2 {
      0% {
        left: 22%;
        top: -1%;
        transform: rotate(0deg) scale(0.66);
      }
      50% {
        left: 18%;
        top: 50%;
        transform: rotate(160deg) scale(0.85);
      }
      100% {
        left: 15%;
        top: 110%;
        transform: rotate(0deg) scale(0.95);
      }
    }
  }

  .snow3 {
    background: url("../img/3-snow3.png") center/contain no-repeat;
    animation: sn3 11s 4s infinite linear;
    @keyframes sn3 {
      0% {
        left: 45%;
        top: -1%;
        transform: rotate(0deg) scale(0.68);
      }
      50% {
        left: 60%;
        top: 50%;
        transform: rotate(160deg) scale(0.86);
      }
      100% {
        left: 45%;
        top: 110%;
        transform: rotate(0deg) scale(0.99);
      }
    }
  }

  .snow4 {
    background: url("../img/3-snow4.png") center/contain no-repeat;
    animation: sn4 16s 2s infinite linear;
    @keyframes sn4 {
      0% {
        left: 90%;
        top: -1%;
        transform: rotate(0deg) scale(0.75);
      }
      50% {
        left: 75%;
        top: 50%;
        transform: rotate(160deg) scale(0.95);
      }
      100% {
        left: 90%;
        top: 110%;
        transform: rotate(0deg) scale(1.1);
      }
    }
  }
}
</style>
