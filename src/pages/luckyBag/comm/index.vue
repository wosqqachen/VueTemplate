<template lang="pug">
.box-top 
  com-time-down.dtime(v-if="bagInfo.freshData?.cd>0"
    :time='bagInfo.freshData?.cd'
)
.box-bg
  .bg
    .bg1
    .con.con3
      .btns(@click="store.getOpenBagData({type:1,num:bagInfo.freshData?.glaze_bag_num})")
        PicView.ani(v-if="bagInfo.freshData?.first == 1" picSrc="./images/svga/hard.svga")
        .btn 开启福袋
        .ptxt 我的福袋：{{bagInfo.freshData?.glaze_bag_num}}个
      .fimg
        img(src='../img//bag-1.png')
      .tbox 
        .txt(v-for='(item, index) in "琉璃福袋"') {{item}}
      .ptxt {{ $t('wallet.knows1') }}
      .lwbox
        .limg(v-for='(item, index) in bagReward?.glaze_info')
          PicView.animg(v-if="item.dynamicStyle.length>0" :picSrc="item.dynamicStyle")
          img(v-else :src='item.icon')
          .tips(v-if="index==0") 大奖
.box-bg.mb
  .bg
    .bg1
    .con.con3
      .btns
        .btn(@click="store.getOpenBagData({type:2,num:bagInfo.freshData?.diamond_bag_num})") 开启福袋
        .ptxt 我的福袋：{{bagInfo.freshData?.diamond_bag_num}}个
      .fimg
        img(src='../img//bag-2.png')
      .tbox 
        .txt(v-for='(item, index) in "钻石福袋"') {{item}}
      .ptxt {{ $t('wallet.knows2') }}
      .lwbox
        .limg(v-for='(item, index) in bagReward?.diamond_info')
          PicView.animg(v-if="item.dynamicStyle.length>0" :picSrc="item.dynamicStyle")
          img(v-else :src='item.icon')
          .tips(v-if="index<3") 大奖
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { bagStore } from "../store";
import { storeToRefs } from "pinia";
import ComTimeDown from './timeDown.vue';
import { toast, uploadActivityLog } from "@/request/client-request";
const store = bagStore();
const { bagReward, bagInfo } = storeToRefs(store);
</script>

<style scoped lang="less">
.box-top {
  margin: 0 auto 1rem;
  position: relative;
  z-index: 2;

  .dtime {
    width: 5.2rem;
    height: 0.92rem;
    margin: 0 auto;
    background: url('../img//timebg.png') center/100% no-repeat;
  }

  .btns {
    width: 4.87rem;
    height: 1.37rem;
    margin: 0 auto;
    font-size: 0.4rem;
    line-height: 1.4rem;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: rgba(117, 66, 0, 1);
    text-align: center;
  }

  .txt {
    font-size: 0.26rem;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #FFEBA6;
    line-height: 0.26rem;
    text-align: center;
  }
}

.mb {
  transform: translateY(1.2rem);
}

.con3 {
  position: relative;
  height: 5rem;
  height: 4.3rem;
  padding: 0.2rem;
  z-index: 20;
  background: #ffffff;
  border-radius: 0.4rem 0rem 0.4rem 0rem;

  .tbox {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    margin-top: 1.5rem;
    padding-left: 0.2rem;

    .txt {
      width: 0.64rem;
      height: 0.64rem;
      margin-right: -0.13rem;
      line-height: 0.64rem;
      background: #FE77F7;
      border: 0.02rem solid #4E004A;
      border-radius: 50%;
      font-size: 0.36rem;
      font-family: PingFang SC;
      font-weight: 800;
      color: #FFFFFF;
      text-align: center;
    }
  }

  .btns {
    position: absolute;
    right: 0.3rem;
    top: 0.4rem;

    .ani {
      position: absolute;
      right: -0.85rem;
      top: -0.05rem;
      width: 1.8rem;
      height: 1.8rem;
    }

    .btn {
      width: 2.7rem;
      height: 1.02rem;
      line-height: 1rem;
      font-size: 0.44rem;
      font-family: PingFang SC;
      font-weight: 800;
      color: #FFFFFF;
      text-align: center;
      background-image: url('../img//btn1.png');
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }

    .ptxt {
      text-align: center;
      line-height: 0.6rem;
    }
  }

  .fimg {
    position: absolute;
    width: 2.31rem;
    height: 2.31rem;
    border-radius: 0.2rem;
    transform: translate(0.2rem, -1rem);
    background-image: url('../img//bagbg.png');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;

    img {
      width: 85%;
      height: 85%;
      margin: 0 auto;
    }
  }

  .ptxt {
    padding-left: 0.15rem;
    line-height: 0.8rem;
    font-size: 0.3rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: #222222;
  }

  .lwbox {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    width: 6.2rem;

    .limg {
      position: relative;
      width: 1.1rem;
      height: 1.1rem;
      background: #8C79F0;
      border: 0.02rem solid #6F5FF1;
      border-radius: 0.16rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-right: 0.15rem;

      img {
        width: 85%;
        height: 85%;
      }

      .animg {
        width: 100%;
        height: auto;
        position: relative;
      }

      .tips {
        position: absolute;
        right: -0.02rem;
        top: -0.02rem;
        width: 0.45rem;
        height: 0.2rem;
        background: #FE77F7;
        border-radius: 0rem 0.15rem 0rem 0.1rem;
        font-size: 0.16rem;
        font-family: Alibaba PuHuiTi;
        font-weight: 500;
        color: #FFFFFF;
        line-height: 0.2rem;
        text-align: center;
      }
    }
  }
}

.bg1 {
  position: absolute;
  width: 100%;
  height: 100%;

  &::after {
    content: '';
    position: absolute;
    top: -0.15rem;
    right: -0.15rem;
    z-index: 1;
    width: 1.31rem;
    height: 1.22rem;
    background: #6F5FF1;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -0.15rem;
    left: -0.15rem;
    z-index: 1;
    width: 1.31rem;
    height: 1.22rem;
    background: #6F5FF1;
  }
}
</style>
