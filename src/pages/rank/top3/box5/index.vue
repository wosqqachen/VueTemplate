<template>
  <div class="top3">
    <div class="t3" v-for="item in three" :key="item.sort">
      <img :src="item.groupCover" class="head" />
      <img v-if="item.sort === 1" src="../img/2-t1.png" class="icon" />
      <img v-if="item.sort === 2" src="../img/2-t2.png" class="icon" />
      <img v-if="item.sort === 3" src="../img/2-t3.png" class="icon" />
      <div class="name">{{ item.groupName }}</div>
      <div class="nl">
        <div class="sex women">28</div>
        <img
          src="https://resources-ic.carryu.com.cn/ic/cloud/resources/8c58c68db24dc2e3ff1be2159f7593e7.png"
        />
      </div>
      <div class="text"><span>317</span> 个</div>
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
  width: 6.3rem;
  margin: 0.5rem auto 0.2rem;
  background: url("../img/5-bg.png") no-repeat bottom/6.3rem 1.7rem;
  .t3 {
    width: 2.16rem;
    height: 2rem;
    position: relative;
    text-align: center;
    margin-bottom: -0.15rem;
    padding-top: 1.6rem;
    .head {
      position: absolute;
      top: 0.48rem;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 50%;
      width: 1.12rem;
      height: 1.12rem;
      background: rgb(202, 226, 245);
      padding: 0.02rem;
      object-fit: cover;
    }
    .icon {
      position: absolute;
      left: 28%;
      top: 1.4rem;
      width: 0.95rem;
      height: 0.31rem;
      line-height: 0.3rem;
      border-radius: 0.16rem 0.15rem 0.16rem 0.15rem;
      font-size: 0.24rem;
      font-weight: bold;
      text-align: center;
      color: #53b2ca;
      background: #97e4fd;
      line-height: 0.3rem;
    }
    .name {
      color: rgba(143, 97, 48, 1);
      font-size: 0.28rem;
      width: 1.52rem;
      margin: 0.3rem auto 0;
      font-weight: bold;
    }
    .text {
      color: rgba(143, 97, 48, 1);
      font-size: 0.24rem;
      margin-bottom: 0.1rem;
      line-height: 1;
      span {
        font-size: 0.28rem;
        color: rgba(246, 94, 69, 1);
      }
    }
    .nl {
      display: block;
      width: 100%;
      font-size: 0.28rem;
      text-align: left;
      color: rgba(255, 207, 207, 1);
      margin-bottom: 0.04rem;
      display: flex;
      justify-content: center;
      img {
        width: 0.22rem;
        height: 0.22rem;
        border-radius: 50%;
        margin-left: 0.05rem;
        border: 0.01rem solid #fff;
      }
      .sex {
        width: 0.58rem;
        height: 0.26rem;
        font-size: 0.18rem;
        color: #fff;
        padding-left: 0.28rem;
        line-height: 0.28rem;
      }
      .women {
        background: url("../img/sex.png") no-repeat 0/100%;
      }
      .men {
        background: url("../img/sex2.png") no-repeat 0/100%;
      }
    }
    &:nth-child(1) {
      position: absolute;
      left: 2.1rem;
      top: -0.4rem;
      padding-top: 1.8rem;
      background: url("../img/topbg.png") no-repeat 0 0.3rem/100%;
      .head {
        width: 1.18rem;
        height: 1.18rem;
        border: 0;
        top: 0.45rem;
        padding: 0;
      }
      .icon {
        color: #fda62d;
        background: #ffee33;
        &::after {
          content: "";
          display: inline-block;
          vertical-align: sub;
          position: absolute;
          top: -1.25rem;
          left: 0.15rem;
          width: 0.64rem;
          height: 0.42rem;
          background-image: url("../img/5-t1.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        }
      }
    }
    &:nth-child(2) {
      .head {
        background: rgb(202, 226, 245);
        padding: 0.02rem;
      }
      .icon {
        &::after {
          content: "";
          display: inline-block;
          vertical-align: sub;
          position: absolute;
          top: -1.15rem;
          left: 0.2rem;
          width: 0.58rem;
          height: 0.37rem;
          background-image: url("../img/5-t2.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        }
      }
    }
    &:nth-child(3) {
      .head {
        background: #ffb693;
        padding: 0.02rem;
      }
      .icon {
        color: #d27448;
        background: #ffc2a7;
        &::after {
          content: "";
          display: inline-block;
          vertical-align: sub;
          position: absolute;
          top: -1.15rem;
          left: 0.2rem;
          width: 0.58rem;
          height: 0.37rem;
          background-image: url("../img/5-t3.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        }
      }
    }
  }
}
</style>
