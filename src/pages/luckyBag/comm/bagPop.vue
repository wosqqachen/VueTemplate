<template lang="pug">
.prize-pop
  .mask
  .content
    .close(@click='store.changeDialog(0)')
    .box-tt
      .bgbox
        .con
          .title 我的福袋
          .list
            .box-bg 
              .bg
                .bcon.con2(v-for='(item, index) in store.bagInfo.userData.diamond')   
                  .left 
                    .ptxt {{item.title}}({{item.finish}}/{{item.num}})
                    .txt.zs 钻石福袋*1
                  .right 
                    .btn(v-if='item.status==0' @click='store.clickHandlerOpenPage(5)') 前往
                    .btn2(v-else) 已完成
                    .txt(v-if='store.bagInfo.freshData?.diamond_bag_num_all>0') 已完成{{store.bagInfo.freshData?.diamond_bag_num_all}}次
            .box-bg 
              .bg
                .ptt 琉璃福袋
                  span {{timeStr.h}}时{{timeStr.m}}分{{timeStr.s}}秒后重置
                .bcon.con2(v-for='(item, index) in store.bagInfo.userData.glaze')   
                  .left 
                    .ptxt {{item.title}}({{item.finish}}/{{item.num}})
                    .txt.ll 琉璃福袋*1
                  .right 
                    .btn(v-if='item.status==0' @click='store.clickHandlerOpenPage(index)') 前往
                    .btn2(v-else) 已完成

</template>

<script setup lang="ts">
import moment from 'moment'
import { storeToRefs } from "pinia";
import { ref, reactive, onMounted, onUnmounted, computed, watch } from "vue";
import ComTimeDown from './timeDown.vue';
import { bagStore } from "../store";
const store = bagStore();
const dtime = ref(0 as any)
const { glazeCd } = storeToRefs(store);
const ntime = ref(glazeCd as any)
const timeStr = computed(() => {
  const t = moment.duration(ntime.value, 'seconds')
  return {
    d: (t.days() + '').padStart(2, "0"),
    h: (t.hours() + '').padStart(2, "0"),
    m: (t.minutes() + '').padStart(2, "0"),
    s: (t.seconds() + '').padStart(2, "0")
  }
})
onMounted(() => {
  // if (dtime.value > 0) {
  //   clearInterval(dtime.value);
  // }
  // dtime.value = setInterval(() => {
  //   console.log('计时',ntime.value)
  //   if (ntime.value <= 0) {
  //     clearInterval(dtime.value);
  //   } else {
  //     ntime.value = ntime.value - 1
  //     if (ntime.value==0) {
  //       window.location.reload();
  //     }
  //   }
  // }, 1000);
}),
  onUnmounted(() => {
    console.log('清楚计时', ntime.value)
    // clearInterval(dtime.value);
  })
</script>

<style scoped lang="less">
.prize-pop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;

  >.content {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 101;
    width: 7.5rem;
    height: 9.5rem;
    border-radius: 0.6rem 0.6rem 0rem 0rem;

    .close {
      position: absolute;
      top: 0.25rem;
      right: 0.3rem;
      width: 0.5rem;
      z-index: 10;
      height: 0.5rem;
      background: url("../img//icon_g.png") top/100% auto no-repeat;
    }

    .box-tt>.bgbox {
      width: 7.5rem;
      height: auto;

      .con {
        height: 9.5rem;
        padding: 0.1rem 0.3rem;
        background-position: bottom;
        border-radius: 0.6rem 0.6rem 0 0;
        background-image: url("../img//bg1.png");
        background-position: top;
        background-size: contain;
        background-repeat: no-repeat;
        background-color: #8b76ff;

        .title {
          width: 100%;
          height: 1rem;
          line-height: 1rem;
          font-size: 0.36rem;
          text-align: center;
          font-family: PingFang SC;
          font-weight: bold;
          color: #ffffff;
        }

        .list {
          height: 9rem;
          overflow: auto;
        }
      }

      .ptxt {
        font-size: 0.32rem;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #ffffff;
        line-height: 0.55rem;
      }

      .txt {
        font-size: 0.28rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #ffffff;
        line-height: 0.42rem;
      }
    }

    .box-bg {
      width: 6.9rem;
      height: auto;
      padding: 0.15rem 0;
      box-sizing: border-box;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 0.5rem 0rem 0.5rem 0rem;
      margin-bottom: 0.2rem;

      .bg {
        position: relative;
        width: 6.61rem;
        min-height: 1.37rem;
        margin: 0 auto;
        background: #ffffff;
        border-radius: 0.4rem 0rem 0.4rem 0rem;

        .ptt {
          height: 0.7rem;
          line-height: 1rem;
          font-size: 0.32rem;
          font-family: PingFang SC;
          font-weight: bold;
          color: #222222;
          padding-left: 0.25rem;

          span {
            font-weight: 500;
            font-size: 0.24rem;
            color: #AAA5C8;
            vertical-align: bottom;
            padding-left: 0.1rem;
          }
        }

        .bcon {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          align-items: center;
          padding: 0.15rem 0.24rem;

          .left {
            .ptxt {
              height: 0.5rem;
              line-height: 0.55rem;
              font-size: 0.3rem;
              font-family: PingFang SC;
              font-weight: bold;
              color: #222222;
            }

            .txt {
              height: 0.4rem;
              line-height: 0.35rem;
              font-size: 0.24rem;
              font-family: PingFang SC;
              font-weight: 500;
              color: #bcb9cb;
            }
          }

          .right {
            .btn {
              width: 1.41rem;
              height: 0.6rem;
              line-height: 0.6rem;
              background-image: url("../img//btn.png");
              background-position: center;
              background-size: contain;
              background-repeat: no-repeat;
              font-size: 0.3rem;
              font-family: PingFang SC;
              font-weight: bold;
              color: #ffffff;
              text-align: center;
            }

            .btn2 {
              width: 1.41rem;
              height: 0.6rem;
              line-height: 0.6rem;
              font-size: 0.3rem;
              font-family: PingFang SC;
              font-weight: bold;
              color: #ffffff;
              text-align: center;
              background-image: url("../img//btn2.png");
              background-position: center;
              background-size: contain;
              background-repeat: no-repeat;
            }
          }
        }

        .con2 {
          padding: 0.2rem 0;
          margin: 0 0.25rem;
          border-bottom: 0.01rem solid rgba(236, 235, 241, 1);

          .left {
            .txt {
              font-size: 0.24rem;
              color: #222222;
            }

            .ll {
              line-height: 0.4rem;
              padding-left: 0.45rem;
              background-image: url("../img//bag-1.png");
              background-position: left;
              background-size: 0.4rem 0.4rem;
              background-repeat: no-repeat;
            }

            .zs {
              line-height: 0.4rem;
              padding-left: 0.45rem;
              background-image: url("../img//bag-2.png");
              background-position: left;
              background-size: 0.4rem 0.4rem;
              background-repeat: no-repeat;
            }
          }

          .right {
            .txt {
              line-height: 0.4rem;
              font-size: 0.22rem;
              text-align: center;
              color: rgba(188, 185, 203, 1);
            }

            .img {
              width: 1.41rem;
              height: 0.6rem;
            }
          }
        }

        .con3 {
          position: relative;
          height: 5rem;
          height: 4.62rem;
          z-index: 20;
          background: #ffffff;
          border-radius: 0.4rem 0rem 0.4rem 0rem;
        }
      }

      .bg1 {
        position: absolute;
        width: 100%;
        height: 100%;

        &::after {
          content: "";
          position: absolute;
          top: -0.15rem;
          right: -0.3rem;
          z-index: 1;
          width: 1.31rem;
          height: 1.22rem;
          background: #6f5ff1;
        }

        &::before {
          content: "";
          position: absolute;
          bottom: -0.15rem;
          left: -0.3rem;
          z-index: 1;
          width: 1.31rem;
          height: 1.22rem;
          background: #6f5ff1;
        }
      }
    }

    .bcon {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      padding: 0.15rem 0.24rem;

      .left {
        .ptxt {
          height: 0.5rem;
          line-height: 0.55rem;
          font-size: 0.3rem;
          font-family: PingFang SC;
          font-weight: bold;
          color: #222222;
        }

        .txt {
          height: 0.4rem;
          line-height: 0.35rem;
          font-size: 0.24rem;
          font-family: PingFang SC;
          font-weight: 500;
          color: #bcb9cb;
        }
      }

      .right {
        .img {
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }

  >.mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: rgba(0, 0, 0, 0.6);
  }
}
</style>
