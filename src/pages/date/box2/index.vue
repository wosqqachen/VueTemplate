<template lang="pug">
.rank-time
  .before-time(:class="[{ opacity: !dateInfo.showBefore }]"
    @click="beforeDayRank") 前一天
  .time-text {{ dateInfo.dateList[dateInfo.nowDay - 1]?.name }}
  .after-time(:class="[{ opacity: !dateInfo.showAfter }]"
    @click="afterDayRank") 后一天
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
const dateInfo = reactive({
  dateList: [
    { key: "20231030", name: "10月30日" },
    { key: "20231031", name: "10月31日" },
    { key: "20231101", name: "11月01日" },
    { key: "20231102", name: "11月02日" },
    { key: "20231103", name: "11月03日" },
    { key: "20231104", name: "11月04日" },
    { key: "20231105", name: "11月05日" }
  ],
  subTabIndex: 0,
  nowDay: 1, //当前活动第几天
  nowDayCopy: 0,
  showBefore: false,
  showAfter: false
});
//前一天榜单
const beforeDayRank = () => {
  if (dateInfo.nowDay - 1 == 1) {
    dateInfo.showBefore = false;
    dateInfo.showAfter = true;
  } else {
    dateInfo.showBefore = true;
    dateInfo.showAfter = true;
  }
  if (dateInfo.nowDay == 1) return;
  dateInfo.nowDay--;
  // loadGodRank();
};
//后一天榜单
const afterDayRank = () => {
  if (dateInfo.nowDay + 1 == dateInfo.nowDayCopy) {
    dateInfo.showBefore = true;
    dateInfo.showAfter = false;
  } else {
    dateInfo.showBefore = true;
    dateInfo.showBefore = true;
  }
  if (dateInfo.nowDay == 7) return;
  dateInfo.nowDay++;
  // loadGodRank();
};
//判断是否展示前一天后一天的按钮
const showSwtichBtn = () => {
  if (dateInfo.nowDay == 1) {
    dateInfo.showBefore = false;
    dateInfo.showAfter = false;
  }
  if ([2, 3, 4, 5, 6, 7].includes(dateInfo.nowDay)) {
    dateInfo.showBefore = true;
    dateInfo.showAfter = false;
  }
};
onMounted(() => {
  const cday = 5; //接口获取当前活动第几天
  const nday = cday == 0 ? 1 : cday >= 8 ? 8 : cday;
  dateInfo.nowDay = nday;
  dateInfo.nowDayCopy = nday;
  showSwtichBtn();
  // loadGodRank();
});
</script>

<style scoped lang="scss">
.rank-time {
  position: absolute;
  top: 0.2rem;
  left: 1rem;
  height: 0.6rem;
  width: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.4rem;
  background-color: red;
  .before-time,
  .after-time {
    font-size: 0.26rem;
    font-weight: 500;
    color: #fff;

    display: flex;
    align-items: center;

    &.opacity {
      visibility: hidden;
    }
  }

  .before-time::before {
    content: "";
    display: inline-block;
    width: 0.16rem;
    height: 0.1rem;
    background-image: url("../img/1-arrow.png");
    background-size: 100% 100%;
    transform: rotate(270deg);
    margin-right: 0.04rem;
  }

  .after-time::after {
    content: "";
    display: inline-block;
    width: 0.16rem;
    height: 0.1rem;
    background-image: url("../img/1-arrow.png");
    background-size: 100% 100%;
    margin-left: 0.04rem;
    transform: rotate(90deg);
  }

  .time-text {
    font-size: 0.32rem;
    font-weight: 500;
    color: #fff;
  }
}
</style>
