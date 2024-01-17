<template>
  <div class="ul">
    <div class="li" v-for="(item, index) in 1" :key="'it' + index">
      <div class="num">{{ index + 4 }}</div>
      <div class="user_box">
        <div class="user">
          <img
            src="https://resources-ic.carryu.com.cn/ic/cloud/resources/8c58c68db24dc2e3ff1be2159f7593e7.png"
          />
        </div>
      </div>
      <div class="name">
        <div class="yc">用户昵称</div>
        <div class="yc">
          <div class="sex women">28</div>
          <img
            src="https://resources-ic.carryu.com.cn/ic/cloud/resources/8c58c68db24dc2e3ff1be2159f7593e7.png"
          />
        </div>
      </div>
      <div class="hlz">
        23w
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
</script>

<style scoped lang="scss">
.ul {
  overflow: hidden;
  height: auto;
  width: 7.5rem;
  height: auto;
  text-align: center;
  box-sizing: border-box;
}
.li {
  width: 6.48rem;
  margin: 0 auto;
  display: flex;
  position: relative;
  align-items: center;
  height: 0.93rem;
  margin-bottom: 0.12rem;
  background: #d34d43;
  border-radius: 0.1rem;
  .num {
    width: 1rem;
    height: 0.93rem;
    line-height: 0.93rem;
    font-size: 0.4rem;
    font-weight: bold;
    color: #fff4df;
  }
  .user_box {
    width: 0.7rem;
    display: flex;
    justify-content: space-between;
    margin-right: 0.2rem;
    margin-left: 0.25rem;
    position: relative;
    .user {
      position: relative;
      width: 0.66rem;
      height: 0.66rem;
      border: 0.02rem solid rgba(255, 107, 215, 1);
      border-radius: 50%;
      z-index: 2;
      img {
        width: 0.66rem;
        height: 0.66rem;
        border-radius: 50%;
      }
    }
  }
  .name {
    width: 2.6rem;
    .yc {
      display: block;
      width: 2.5rem;
      font-size: 0.28rem;
      text-align: left;
      color: rgba(255, 207, 207, 1);
      margin-bottom: 0.04rem;
      display: flex;
      img {
        width: 0.22rem;
        height: 0.22rem;
      }
      .sex {
        width: 0.58rem;
        height: 0.26rem;
        font-size: 0.18rem;
        box-sizing: border-box;
        color: #fff;
        padding-left: 0.28rem;
        line-height: 0.28rem;
        border-radius: 0.12rem;
      }
      .women {
        background: #ff61b7;
      }
      .men {
        background: #2b8f61;
      }
    }
  }
  .hlz {
    width: 1.5rem;
    text-align: right;
    color: rgba(255, 198, 88, 1);
    font-size: 0.32rem;
    font-weight: bold;
  }
}
</style>
