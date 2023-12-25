<template>
  <div class="my">
    <div class="li">
      <div class="num zw">{{ "暂未上榜" }}</div>
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
      <div class="tips">
        距离上一名还差收到30个圣诞礼物
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
.my {
  display: flex;
  position: relative;
  align-items: center;
  width: 7.5rem;
  height: 1.86rem;
  box-sizing: border-box;
  margin-bottom: 0.12rem;
  padding: 0 0.3rem;
  // background: url("../img/1-bg.png") no-repeat -0.05rem 0/7.6rem 1.6rem;
  background: RGBA(57, 186, 127, 1);
  .num {
    width: 0.65rem;
    height: 0.64rem;
    line-height: 0.64rem;
    text-align: center;
    font-size: 0.28rem;
    color: #fff;
  }
  .li {
    width: 6.48rem;
    margin: 0 auto;
    display: flex;
    position: relative;
    align-items: center;
    height: 0.93rem;
    margin-bottom: 0.12rem;
    border-radius: 0.1rem;
    .num {
      width: 1rem;
      height: 0.93rem;
      line-height: 0.93rem;
      font-size: 0.4rem;
      font-weight: bold;
      color: #fff4df;
    }
    .zw {
      line-height: 0.9rem;
      font-size: 0.22rem;
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
          border-radius: 50%;
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
    .tips {
      position: absolute;
      left: 1rem;
      bottom: -0.2rem;
      font-size: 0.24rem;
      font-family: Noto Sans S Chinese;
      font-weight: 500;
      color: #ffd942;
      line-height: 0.26rem;
    }
  }
}
</style>
