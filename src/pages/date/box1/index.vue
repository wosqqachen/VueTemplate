<template lang="pug">
.rank-time
  .before-time(:class="{ opacity: store.activity+store.selected<=0 }"
    @click="changeTabDayEvent(-1)") 前一天
  .time-text {{ store.timeStr }}
  .after-time(:class="{ opacity: store.end+store.selected>store.activity}"
    @click="changeTabDayEvent(1)") 后一天
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
const store = reactive({
  activity: 1, //当前活动第几天
  end: 8, //活动总天数
  selected: 0, //活动选中
  timeStr: "11月01",
  day: "20231129", //服务器活动当前日期
  ago: "20231129",
  now: "20231130",
  next: "20231201"
});
const getNextDate = (date: string, day: number) => {
  const dd = new Date(date);
  dd.setDate(dd.getDate() + day);
  const y = dd.getFullYear();
  const m =
    dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
  const d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
  return y + "" + m + d;
};

const changeTabDayEvent = (index: number) => {
  store.selected = store.selected + index;
  getDayTimes();
};
const getDayTimes = () => {
  const n = new Date().toJSON().substring(0, 10);
  store.day = getNextDate(n, store.activity);
  store.ago = getNextDate(n, store.selected - 1);
  store.now = getNextDate(n, store.selected);
  store.next = getNextDate(n, store.selected + 1);
  store.timeStr =
    store.now.substring(4, 6) + "月" + store.now.substring(6, 8) + "日";
  console.log("getDayTimes", store);
};
onMounted(() => {
  store.activity = 7;
  getDayTimes();
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
