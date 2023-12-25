<template>
  <div class="top3">
    <div class="li" v-for="item in three" :key="item.sort">
      <img :src="item.groupCover" class="head" />
      <img :src="item.groupCover" class="head2" />
      <img v-if="item.sort === 1" src="../img/4-t1.png" class="icon" />
      <img v-else-if="item.sort === 2" src="../img/4-t2.png" class="icon" />
      <img v-else-if="item.sort === 3" src="../img/4-t3.png" class="icon" />
      <div class="name yc">{{ item.groupName }}</div>
      <div class="text">双旦值：<span>888</span></div>
      <div class="tips">贡献王</div>
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
  width: 5.8rem;
  margin: 0 auto;
  padding-top: 3.3rem;
  background-color: rgba(82, 35, 12, 1);
  .li {
    position: relative;
    text-align: center;
    width: 2.57rem;
    height: 2.8rem;

    .head {
      position: absolute;
      top: 0.48rem;
      left: 50%;
      transform: translateX(-50%);
      width: 1.07rem;
      height: 1.07rem;
      border-radius: 50%;
    }
    .head2 {
      position: absolute;
      top: 0.8rem;
      right: 0.2rem;
      width: 0.8rem;
      z-index: 5;
      height: 0.8rem;
      border-radius: 50%;
      border: 0.02rem solid #a80e0e;
    }
    .icon {
      position: relative;
      width: 2.57rem;
      height: 1.59rem;
      margin: 0.3rem auto 0;
    }
    .name {
      color: #7290f1;
      font-size: 0.24rem;
      width: 1.52rem;
      margin: 0 auto;
      font-weight: bold;
      text-align: center;
      height: 0.5rem;
      line-height: 0.5rem;
      margin-top: -0.2rem;
    }
    .text {
      height: 0.4rem;
      color: #6f8ced;
      font-size: 0.2rem;
      margin-bottom: 0.1rem;
      line-height: 0.4rem;
      background: linear-gradient(
        90deg,
        rgba(67, 79, 146, 0.6) 30%,
        rgba(67, 79, 146, 1) 60%,
        rgba(67, 79, 146, 0.6) 100%
      );
      span {
        font-size: 0.28rem;
        font-weight: 500;
      }
    }
    .tips {
      position: absolute;
      top: 0.7rem;
      right: 0.1rem;
      width: 0.73rem;
      height: 0.28rem;
      z-index: 6;
      background: #a80e0e;
      font-size: 0.2rem;
      font-weight: 500;
      color: #ffffff;
      text-align: center;
      border-radius: 0.11rem 0.11rem 0.11rem 0rem;
    }
  }
  .li:first-child {
    position: absolute;
    top: 0;
    left: 50%;
    width: 3.88rem;
    height: 3.3rem;
    transform: translateX(-50%);
    .head {
      top: 1rem;
      left: 51%;
      transform: translateX(-50%);
      width: 1.2rem;
      height: 1.2rem;
    }
    .name {
      color: #f98f2e;
    }
    .text {
      color: #f98f2e;
      background: linear-gradient(
        90deg,
        rgba(146, 98, 45, 0.6) 30%,
        rgba(146, 98, 45, 1) 60%,
        rgba(146, 98, 45, 0.6) 100%
      );
    }
    .icon {
      width: 3.88rem;
      height: 2.28rem;
    }
    .head2 {
      position: absolute;
      top: 1.3rem;
      right: 0.7rem;
      z-index: 5;
    }
    .tips {
      position: absolute;
      top: 1.1rem;
      right: 0.7rem;
      width: 0.73rem;
      height: 0.28rem;
    }
  }
  .li:last-child {
    // background: url("../img/4-t3.png") no-repeat 0/100%;
    .name {
      color: #d98942;
    }
    .text {
      color: #d98942;
      background: linear-gradient(
        90deg,
        rgba(125, 61, 19, 0.6) 30%,
        rgba(125, 61, 19, 1) 60%,
        rgba(125, 61, 19, 0.6) 100%
      );
    }
  }
}
</style>
