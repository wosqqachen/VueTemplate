<template>
  <div class="top3">
    <div class="li" v-for="item in three" :key="item.sort">
      <img :src="item.groupCover" class="head" />
      <img v-if="item.sort === 1" src="../img/2-t1.png" class="icon" />
      <img v-if="item.sort === 2" src="../img/2-t2.png" class="icon" />
      <img v-if="item.sort === 3" src="../img/2-t3.png" class="icon" />
      <div class="name yc">{{ item.groupName }}</div>
      <div class="text">前进长度</div>
      <div
        class="text"
        v-if="item.lg > 1000"
        style="font-size: 0.24rem; font-weight: bold"
      >
        {{ (item.lg / 1000).toFixed(1) }}km
      </div>
      <div class="text" v-else style="font-size: 0.24rem; font-weight: bold">
        {{ item.lg }}m
      </div>
      <div v-if="item.quay > 0">
        <div class="text2">停靠码头</div>
        <div class="text2">{{ item.quay }}号</div>
      </div>
      <div v-else>
        <div class="text2">暂无停靠</div>
        <div class="text2">码头</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { millionDeal } from "@/utils/util";
interface IProps {
  item: object;
  txt: string;
}
const props = defineProps<IProps>();
const three = [
  {
    groupCover:
      "https://h5.carryu.com.cn/wcfe__test/mass2/assets/no-51d97814.png",
    groupName: "虚位以待",
    lg: 0,
    quay: 0,
    sort: 1
  },
  {
    groupCover:
      "https://h5.carryu.com.cn/wcfe__test/mass2/assets/no-51d97814.png",
    groupName: "虚位以待",
    lg: 0,
    quay: 0,
    sort: 2
  },
  {
    groupCover:
      "https://h5.carryu.com.cn/wcfe__test/mass2/assets/no-51d97814.png",
    groupName: "虚位以待",
    lg: 0,
    quay: 0,
    sort: 3
  }
];
</script>

<style scoped lang="scss">
.top3 {
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 7rem;
  margin: 1rem auto 0;
  .li {
    width: 2.16rem;
    height: 3.98rem;
    background: url("../img/2-2.png") no-repeat 0/100%;
    position: relative;
    text-align: center;
    .head {
      position: absolute;
      top: 0.48rem;
      left: 50%;
      transform: translateX(-50%);
      width: 1.07rem;
      height: 1.07rem;
      border-radius: 50%;
    }
    .icon {
      position: relative;
      width: 0.89rem;
      height: 0.4rem;
      margin: 1.38rem auto 0;
    }
    .name {
      color: #6780ff;
      font-size: 0.24rem;
      width: 1.52rem;
      margin: 0.06rem auto;
      font-weight: bold;
    }
    .text {
      color: #6780ff;
      font-size: 0.2rem;
      margin-bottom: 0.1rem;
      line-height: 1;
    }
    .text2 {
      line-height: 1;
      color: #f068b0;
      font-size: 0.2rem;
      margin-bottom: 0.06rem;
    }
  }
  .li:first-child {
    position: absolute;
    top: -1rem;
    left: 50%;
    transform: translateX(-50%);
    background: url("../img/2-1.png") no-repeat 0/100%;
    .name {
      color: #4e277f;
    }
    .text {
      color: #dd7006;
    }
  }
  .li:last-child {
    background: url("../img/2-3.png") no-repeat 0/100%;
    .name {
      color: #5d73d4;
    }
    .text {
      color: #e1387a;
    }
  }
}
</style>
