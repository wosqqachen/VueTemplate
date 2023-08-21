<template lang="pug">
.p-page-wrapper
  .back(@click='getBack' :style="`top:${props.topPx}px`")
  .scroll.competition-scroll
    .flow-btns
      .btn.btn-1(@click='goToAngel(1)')
      .btn.btn-2(@click='goToAngel(2)')
      .btn.btn-3(@click='goToAngel(3)')
    .content-wrapper
      PicView.lwbox(picSrc="./images/svga/luckybg.svga") 
      bag-index
    rule-pop(v-if='store.showDialog==1')
    prize-pop(v-if='store.showDialog==2')
    bag-pop(v-if='store.showDialog==3')
    luck-pop(v-if='store.showDialog>5')
</template>

<script lang="ts" setup>
import { reactive, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { bagStore } from "../store";
import api from "@/api";
import bagIndex from '../comm/index.vue'
import rulePop from '../comm/rulePop.vue'
import prizePop from '../comm/prizePop.vue'
import bagPop from '../comm/bagPop.vue'
import luckPop from '../comm/luckPop.vue'
interface IProp {
  topPx: number
}
const props = defineProps<IProp>()
import {
  goBack,
  getCommonParams,
  toast,
  openPage,
  uploadActivityLog
} from "@/request/client-request";
import os from "@/utils/os";
import { getParam, millionDeal } from "@/utils/util";
const store = bagStore();
const { selfRank,rankIndex } = storeToRefs(store);
const state = reactive({
  tabArr: [
    { day: '07.25-07.27', txt: '爱豆集结' },
    { day: '07.26-07.27', txt: '海选赛<br/>N进50' },
    { day: '07.28-07.29', txt: '半决赛<br/>50进32' },
    { day: '07.30-07.31', txt: '爱豆加油站<br/>32进16' },
    {day:'08.01 19:00',txt:'冠军之夜'}
  ],
  isTop:false,
  dialogType: 0,
  ownerConstellation: { id: 2, name: "双鱼座" },
  quotations: "",
  horoInfo: {},
  isBack: 1,
  searchList: "",
  sname: "",
  myHistory: [],
  hisParam: {
    pageNo: 1,
    pageSize: 10
  },
  searchParam: { constellations: ["0"], characters: ["0"], voices: ["0"] },
  qSelected: [[], [3], [3]],
  name2: ""
});
onMounted(() => {
  console.log("参数", getParam());
  store.getBagInfoData('1')
  store.getAccountInfoData()
  uploadActivityLog("10900001", "", "", "page", '', "show", "");
});
const goToAngel = (type: any) => {
  store.changeDialog(type)
  uploadActivityLog("10900001", "", "", "page", ['','0','1','2'][type], "click", "");
}

window["viewDidAppear"] = () => {
  console.log("重新进入");
  store.getBagInfoData('1');
};
const getBack = () => {
  goBack();
  uploadActivityLog("10900001", "", "", "page", '', "close", "");
};
</script>

<style scoped lang="less">
.p-page-wrapper {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-size: 0.26rem;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #fff;
  :deep(.box-bg) {
      width: 6.9rem;
      height: auto;
      margin: 0 auto;
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
      }
  }
  .content-wrapper {
    width: 100%;
    padding-top: 7.6rem;
    padding-bottom: 1.5rem;
    background-image: url('../img//topbg-01.png');
    background-position: top;
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 2;
    position: relative;
  }
 .flow-btns {
    position: relative;
    z-index: 3;
    .btn {
      position: absolute;
      width: 1.39rem;
      height: 0.53rem;
      background: none center/100% 100%;
    }
    .btn-1 {
      width: 0.95rem;
      background-image: url('../img//btn-icon-1.png');
      top: 3rem;
      left: 0;
    }
    .btn-2 {
      background-image: url('../img//btn-icon-3.png');
      top: 3rem;
      right: 0;
    }
    .btn-3 {
      background-image: url('../img//btn-icon-2.png');
      top: 3.88rem;
      right: 0;
    }
  }
  > .back {
    position: absolute;
    width: 0.56rem;
    height: 0.56rem;
    background: url('../img//back.png') center/100% 100%;
    top: 0.88rem;
    left: 0.3rem;
    z-index: 10;
  }
  > .scroll {
    width: 100%;
    height: 100%;
    overflow: hidden scroll;
    background: linear-gradient(180deg,RGBA(181, 168, 255, 1),RGBA(139, 118, 255, 1) 30%);
    position: relative;
    .lwbox{
      position: absolute;
      left: 0;
      top: 2.85rem;
      width: 7.5rem;
      height: 5.27rem;
      z-index: 1;
    }
  }
}
</style>
