<template lang="pug">
.cp-box
    .cbox(v-if="showGift") 
      .lcon
        .lwbox(v-for='(li, index) in gifts') 
          img.icon(:src='li.pic')
          .name {{li.name}}
    .bbox 
      .btn(:class='{ ed: showGift }' @click='clickShowGift') {{ showGift ? '收起奖励':'查看奖励' }}
</template>

<script setup lang="ts">
import { ref } from "vue";
const showGift = ref(true);
const gifts = ref([
  {
    name: "万圣女巫座",
    desc: "3天",
    pic: require("../img/1-rd-nw.png")
  },
  {
    name: "万圣女巫座",
    desc: "3天",
    pic: require("../img/1-rd-nw.png")
  },
  {
    name: "万圣女巫座",
    desc: "3天",
    pic: require("../img/1-rd-nw.png")
  },
  {
    name: "万圣女巫座",
    desc: "3天",
    pic: require("../img/1-rd-nw.png")
  },
  {
    name: "万圣女巫座",
    desc: "3天",
    pic: require("../img/1-rd-nw.png")
  }
]) as any;
const clickShowGift = () => {
  showGift.value = !showGift.value;
};
</script>

<style scoped lang="scss">
.cp-box {
  position: relative;
  z-index: 2;
  width: 6.9rem;
  height: auto;
  min-height: 0.5rem;
  margin: 0 auto;
  padding-top: 0;
  border-radius: 0.1rem 0.1rem 0rem 0rem;

  .cbox {
    width: 6.9rem;
    height: 3.5rem;
    border-radius: 0.2rem;
    margin: 0 auto;
    padding: 0.1rem 0 0.5rem 0;
    box-sizing: border-box;
    background-color: rgba(183, 124, 241, 0.3);
    position: relative;

    .lcon {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      overflow-x: auto;
      padding: 0 0.3rem 0 0.5rem;
    }
  }

  .lwbox {
    width: 1.5rem;
    height: auto;
    border-radius: 0.18rem;
    margin-bottom: 0.5rem;
    margin-right: 0.3rem;

    .icon {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      box-sizing: border-box;
      padding: 0.2rem;
      margin: 0.1rem auto;
      background-image: url("../img/1-lwbg-2.png");
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }

    .name {
      height: 0.3rem;
      line-height: 0.35rem;
      margin-top: -0.1rem;
      text-align: center;
      font-size: 0.26rem;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #fff;
    }
  }

  .bbox {
    position: absolute;
    bottom: 0;
    left: 2.5rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.3rem 0rem;

    .btn {
      width: 1.62rem;
      height: 0.53rem;
      border: 0.02rem solid #fff;
      background: linear-gradient(0deg, #a666dc, #7d4dba);
      border-radius: 0.28rem;
      font-size: 0.26rem;
      font-family: Noto Sans S Chinese;
      font-weight: 400;
      color: #fff;
      line-height: 0.5rem;
      position: relative;
      box-sizing: border-box;
      text-align: center;

      &::after {
        content: "";
        display: inline-block;
        width: 0.29rem;
        height: 0.15rem;
        transform: rotate(180deg) translate(0, 0.02rem);
        background: url("../img/1-arrow.png") center/0.19rem 0.12rem no-repeat;
      }
    }

    .ed {
      bottom: 0.25rem;
      &::after {
        transform: rotate(0deg) translate(0, -0.02rem);
      }
    }
  }
}
</style>
