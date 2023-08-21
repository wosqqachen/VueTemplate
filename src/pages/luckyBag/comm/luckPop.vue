<template lang="pug">
.luck-pop
  .mask
  .content
    .close(@click='store.changeDialog(0)')  {{ store.showDialog==6 ? '去开启':'点击收下' }}
    .box-tt
      .bgbox
        .con
          .title 
            img.img2(v-if='store.showDialog==7' src='../img//tt-1.png') 
          .list
            PicView.animg(v-if="store.showDialog==6" ref="svgaPlayer" :loops="1"  @player-finished="changeAni" :param="{ loops: 1 }" picSrc="./images/svga/luckyfd.svga")
            .limg(v-else)
            img(:src='rewardInfo.icon')
          .name(v-if='store.showDialog==7') {{ rewardInfo.name }}x{{ rewardInfo.expireTime }}天
</template>

<script setup lang="ts">
import moment from 'moment'
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";
import { bagStore } from "../store";
const store = bagStore();
const svgaPlayer = ref(null) as any;
const { rewardInfo } = storeToRefs(store);
onMounted(() => {
  // store.getBagListData()
});

const changeAni = () => {
  console.log('播放完成', svgaPlayer.value.player)
  svgaPlayer.value.player.startAnimationWithRange({ location: 30, length: 28 }, false);
}
</script>

<style scoped lang="less">
.luck-pop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;

  >.content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 101;
    width: 7.5rem;
    height: auto;
    border-radius: 0.6rem 0.6rem 0rem 0rem;

    .close {
      position: absolute;
      bottom: 0.9rem;
      left: 2rem;
      width: 3.5rem;
      z-index: 10;
      height: 1.02rem;
      line-height: 1.02rem;
      font-size: 0.44rem;
      font-family: PingFang SC;
      font-weight: 800;
      color: #FFFFFF;
      text-align: center;
      background: url("../img//btn3.png") top/100% auto no-repeat;
    }

    .box-tt>.bgbox {
      width: 7.5rem;
      height: auto;

      .con {
        height: auto;
        padding: 0.1rem 0.3rem;
        background-position: bottom;
        border-radius: 0.6rem 0.6rem 0 0;

        .title {
          width: 100%;
          height: 1rem;
          display: flex;

          .img {
            width: auto;
            height: 0.63rem;
            margin: 0 auto;
          }

          .img2 {
            width: 4.6rem;
            height: 1.23rem;
            margin: 0 auto;
            animation: hxAn 0.3s 1 linear;
          }
        }

        .list {
          height: 7rem;
          overflow: auto;

          .txt {
            width: 1.92rem;
            height: 0.38rem;
            margin: 0 auto;

            background: url("../img//tt-3.png") top/100% auto no-repeat;
          }

          .name {
            transform: translateY(-0.25rem);
            font-size: 0.32rem;
            font-weight: bold;
            color: #FFFFFF;
            text-align: center;
          }

          .img {
            width: 100%;
            height: 5rem;
          }

          .animg {
            position: absolute;
            width: 7.5rem;
            height: 7.5rem;
            transform: translate(-0.2rem, -2.2rem);
          }

          .limg {
            animation: hxAn 0.3s 1 linear;
            width: 4.5rem;
            height: 4.5rem;
            margin: 0 auto;
            display: flex;
            align-items: center;
            background: url("../img//bg3.png") top/100% auto no-repeat;
            position: relative;

            &::after {
              content: '';
              position: absolute;
              top: 0.4rem;
              left: 0.55rem;
              width: 3.6rem;
              height: 3.6rem;
              background-image: url(../img//bg2.png);
              background-repeat: no-repeat;
              background-position: center;
              background-size: contain;
            }

            img {
              width: 1.6rem;
              height: auto;
              margin: 0 auto;
            }
          }
        }
      }
    }
  }

  @keyframes hxAn {
    0% {
      transform: scale(0.2)
    }

    100% {
      transform: scale(1)
    }
  }

  >.mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: rgba(0, 0, 0, 0.8);
  }
}
</style>
