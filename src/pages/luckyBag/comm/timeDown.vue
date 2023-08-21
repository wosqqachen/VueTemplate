<template lang="pug">
//- 榜单时间
.time-wrapper(v-if='props.time > 0')
  | 剩余
  .time {{ timeStr.d < 0 ? 0 : timeStr.d }}
  | 天
  .time {{ timeStr.h < 0 ? 0 : timeStr.h }}
  | 时
  .time {{ timeStr.m < 0 ? 0 : timeStr.m }}
  | 分
.time-wrapper(v-else)
  | 本赛段已结束
</template>

<script setup lang="ts">
import moment from 'moment'
import { ref, onMounted, computed, watch } from 'vue'

interface IProps {
  time: number // 毫秒值
}
const props = defineProps<IProps>()
const ntime = ref(props.time)
const dtime = ref(0 as any)
const timeStr = computed(() => {
  const t = moment.duration(props.time,'seconds')
  return {
    d: (t.days()+'').padStart(2, "0"),
    h: (t.hours()+'').padStart(2, "0"),
    m: (t.minutes()+'').padStart(2, "0"),
    s: (t.seconds()+'').padStart(2, "0")
  }
})
onMounted(() => {
  if (dtime.value > 0) {
    clearInterval(dtime.value);
  }
  dtime.value = setInterval(() => {
    ntime.value = ntime.value-1
    if (ntime.value == 0) {
      clearInterval(dtime.value);
    }
  }, 1000);
})
</script>

<style scoped lang="less">
// 榜单结束时间
.time-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin: 0.28rem auto;
  font-size: 0.3rem;
  font-family: PingFang SC;
  font-weight: bold;
  color: #FFFFFF;
  text-align: center;
  padding: 0 0.35rem;
  box-sizing: border-box;
  > .time {
    width: 0.65rem;
    height: 0.65rem;
    font-size: 0.34rem;
    color: #6F5DFF;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0.1rem;
    padding-bottom: 0.05rem;
  }
}
</style>
