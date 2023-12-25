<template lang="pug">
.dtime 
  p <span>{{ cd.t.d[0] }}</span><span>{{ cd.t.d[1] }}</span>天
  p <span>{{ cd.t.h[0] }}</span><span>{{ cd.t.h[1] }}</span>时
  p <span>{{ cd.t.m[0] }}</span><span>{{ cd.t.m[1] }}</span>分
  p <span>{{ cd.t.s[0] }}</span><span>{{ cd.t.s[1] }}</span>秒
</template>

<script setup lang="ts">
//引入 dtime(:time="8" @changeTime="changeTime")
import { watch, onMounted } from "vue";
import { useCountdown } from "@/hooks/useTime";
const props = defineProps({
  time: {
    type: Number,
    default: 1000,
    required: true
  }
});
const cd = useCountdown({
  onSuccess: () => {
    endTime();
  }
});
watch(
  () => props.time,
  val => {
    cd.startCountdown(val);
  },
  {
    immediate: true,
    deep: true
  }
);
const emit = defineEmits([`changeTime`]);
const endTime = () => {
  emit("changeTime");
};
onMounted(() => {
  cd.startCountdown(props.time);
});
</script>

<style scoped lang="less">
.dtime {
  font-size: 0.26rem;
  font-family: PingFang SC;
  font-weight: 500;
  color: #091451;
  text-align: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  line-height: 0.36rem;

  span {
    display: inline-block;
    width: 0.35rem;
    height: 0.35rem;
    line-height: 0.36rem;
    color: #fff;
    background: #0f1955;
    border-radius: 0.06rem;
    margin-right: 0.03rem;
    margin-left: 0.04rem;
  }
}
</style>
