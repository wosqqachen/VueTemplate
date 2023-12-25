<template>
  <div class="my">
    <div class="num zw">{{ "暂未上榜" }}</div>
    <div class="user_box">
      <div class="user">
        <img
          src="https://resources-ic.carryu.com.cn/ic/cloud/resources/8c58c68db24dc2e3ff1be2159f7593e7.png"
        />
      </div>
      <div class="user">
        <img
          src="https://resources-ic.carryu.com.cn/ic/cloud/resources/8c58c68db24dc2e3ff1be2159f7593e7.png"
        />
      </div>
    </div>
    <div class="name">
      <span class="yc">用户昵称</span>
      <span class="yc">用户昵称2</span>
    </div>
    <div class="family-name" v-if="false">
      <span class="yc">暂无家族</span>
      <span class="yc" v-if="false">暂无家族</span>
    </div>
    <div class="hlz">
      <span class="icon" v-if="false"></span>
      <p class="p1" v-if="false">婚礼值</p>
      <p class="p2">23w</p>
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
</script>

<style scoped lang="scss">
.my {
  display: flex;
  position: relative;
  align-items: center;
  width: 7.5rem;
  height: 1.6rem;
  box-sizing: border-box;
  margin-bottom: 0.12rem;
  padding: 0 0.3rem;
  background: url("../img/1-bg.png") no-repeat -0.05rem 0/7.6rem 1.6rem;
  .num {
    width: 0.65rem;
    height: 0.64rem;
    line-height: 0.64rem;
    text-align: center;
    font-size: 0.28rem;
    color: #fff;
  }
  .zw {
    line-height: 0.3rem;
    font-size: 0.22rem;
  }
  .user_box {
    width: 1.4rem;
    display: flex;
    justify-content: space-between;
    margin: 0.03rem 0.2rem 0 0.1rem;
    position: relative;
    .sicon {
      position: absolute;
      top: 0.1rem;
      left: 50%;
      transform: translateX(-50%);
      width: 0.6rem;
      height: 0.6rem;
    }
    .user {
      position: relative;
      width: 0.7rem;
      height: 0.7rem;
      border: 0.02rem solid #fff;
      border-radius: 50%;
      z-index: 2;
      &:nth-child(2) {
        z-index: 1;
        transform: translate(-0.15rem, 0);
      }
      img {
        width: 0.7rem;
        height: 0.7rem;
        border-radius: 50%;
      }
    }
  }
  .name {
    span {
      display: block;
      width: 1.15rem;
      font-size: 0.24rem;
      color: #fff;
      margin-bottom: 0.04rem;
    }
  }
  .family-name {
    span {
      display: block;
      width: 1.24rem;
      height: 0.28rem;
      line-height: 0.28rem;
      font-size: 0.18rem;
      text-align: center;
      background: rgba($color: #ffffff, $alpha: 0.5);
      border-radius: 0.08rem;
      margin: 0 auto;
      text-overflow: ellipsis;
      color: #e76995;
      & + span {
        margin-top: 0.08rem;
      }
    }
  }
  .hlz {
    position: absolute;
    right: 0.6rem;
    line-height: 0.08rem;
    .icon {
      position: absolute;
      right: 50%;
      transform: translate(45%, -0.2rem);
      display: block;
      width: 1.1rem;
      height: 0.35rem;
      // background: url("../img/1-jb.png") no-repeat 0/100%;
    }
    .p1 {
      text-align: right;
      font-size: 0.24rem;
      color: #fff;
      margin-bottom: 0.08rem;
    }
    .p2 {
      text-align: right;
      color: rgba(255, 216, 62, 1);
      font-size: 0.28rem;
      font-weight: bold;
    }
  }
}
</style>
