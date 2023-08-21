<template lang="pug">
.prize-pop
  .mask
  .content
    .close(@click='store.showDialog=0')
    .box-tt
      .bgbox
        .con
          .title 我的奖品
          .list(v-if="bagList?.length>0" ref="jlbox" @scroll="jlboxScroll")
            .box-bg(v-for='(item, index) in bagList') 
              .bg 
                .bcon
                  .left 
                    .ptxt {{item.title}}
                    .txt {{moment.unix(item.time).format('YYYY-MM-DD HH:mm')}}
                  .right 
                    img.img(:src='item.icon')
          .nodata 
            img.img(v-if="bagList?.length==0" src='@/assets/common/no-data-2.png' style="width: 60%;margin: 0.5rem auto;display: flex;")
            .ptxt(v-if="bagList?.length==0" style="text-align: center;transform: translateY(-0.65rem);") 暂未获得奖品 
</template>

<script setup lang="ts">
import moment from "moment";
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";
import { bagStore } from "../store";
const store = bagStore();
const jlbox = ref(null);
const loading = ref(false);
const { bagList } = storeToRefs(store);
onMounted(() => {
  store.pageNum = 1;
  store.bagList = [];
  store.getBagListData();
});

const jlboxScroll = () => {
  const scrollTop = jlbox.value.scrollTop;
  const height = jlbox.value.clientHeight;
  const scrollHeight = jlbox.value.scrollHeight;
  if (scrollTop + height + 70 > scrollHeight && !loading.value) {
    console.log("到底了", jlbox.value.scrollTop);
    loading.value = true
    store.getBagListData();
    setTimeout(() => {
      loading.value = false
    }, 1500);
  }
};
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
    min-height: 9rem;
    max-height: 11rem;
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
        min-height: 9rem;
        max-height: 11rem;
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

      .ubox {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        align-items: center;
        padding: 0.25rem 0.2rem;

        .puser {
          width: 1.41rem;
          height: 2.1rem;
          position: relative;
          margin-bottom: 0;
          margin-right: 0.33rem;

          &::before {
            top: 0.5rem;
            left: 0;
            width: 1.41rem;
            height: 1.67rem;
          }

          .name {
            color: #4241ba;
            font-size: 0.24rem;
          }

          .desc {
            color: #4241ba;
            font-size: 0.2rem;
          }
        }

        .pic {
          background-color: rgb(29 32 202 / 0%);
          justify-content: center;
          border: 0;
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
