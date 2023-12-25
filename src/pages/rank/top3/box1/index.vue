<template>
  <div class="top_three">
    <div
      :class="'top_li top' + index"
      v-for="(item, index) in 3"
      :key="'top' + index"
    >
      <div class="dt"></div>
      <div class="icon"></div>
      <div class="user_box">
        <div class="user">
          <div class="top">
            <img
              src="https://resources-ic.carryu.com.cn/ic/cloud/resources/8c58c68db24dc2e3ff1be2159f7593e7.png"
            />
          </div>
          <div class="name yc">昵称</div>
        </div>
        <img src="../img/1-ax.png" class="sicon" />
        <div class="user">
          <div class="top">
            <img
              src="https://resources-ic.carryu.com.cn/ic/cloud/resources/8c58c68db24dc2e3ff1be2159f7593e7.png"
            />
          </div>
          <div class="name yc">昵称</div>
        </div>
      </div>
      <div class="hlz">
        脱单值
        <div>23W</div>
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
.top_three {
  width: 7.5rem;
  height: 3rem;
  padding: 0 0.27rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  box-sizing: border-box;
  .top_li {
    width: 2.23rem;
    min-height: 1.56rem;
    position: relative;
    .dt {
      position: absolute;
      bottom: 0;
      width: 2.23rem;
      height: 1.56rem;
    }
    .icon {
      position: absolute;
      left: 0.75rem;
      top: -0.5rem;
      width: 0.78rem;
      height: 0.31rem;
    }
    .user_box {
      position: relative;
      display: flex;
      justify-content: center;
      margin: 0 0.24rem 0.05rem 0.29rem;
      .sicon {
        position: absolute;
        top: 0.3rem;
        left: 50%;
        transform: translateX(-50%);
        width: 0.37rem;
        height: 0.32rem;
      }
      .user {
        .top {
          width: 0.84rem;
          height: 0.84rem;
          overflow: hidden;
          img {
            width: 0.84rem;
            height: 0.84rem;
            border-radius: 50%;
          }
        }
        .name {
          text-align: center;
          margin: 0 auto;
          font-size: 0.22rem;
          line-height: 0.4rem;
        }
      }
    }
    .hlz {
      position: relative;
      margin: 0 auto;
      width: 2.23rem;
      height: 0.75rem;
      font-size: 0.2rem;
      line-height: 0.3rem;
      text-align: center;
      div {
        display: block;
        font-size: 0.28rem;
      }
    }
  }
  .top1 {
    .dt {
      height: 1.56rem;
      background: url("../img/1-bg2.png") no-repeat 0/100%;
    }
    .icon {
      background: url("../img/1-t2.png") no-repeat 0/100%;
    }
    .hlz {
      color: #398dc2;
      div {
        color: #225f85;
      }
    }
    .top {
      background: #7499f3;
      border: 0.02rem solid #9ef0ff;
      border-radius: 50%;
    }
    .name {
      color: #398dc2;
    }
  }
  .top0 {
    position: absolute;
    left: 2.64rem;
    bottom: 0;
    .dt {
      height: 1.86rem;
      background: url("../img/1-bg1.png") no-repeat 0/100%;
    }
    .icon {
      top: -0.5rem;
      background: url("../img/1-t1.png") no-repeat 0/100%;
    }
    .hlz {
      color: #c16227;
      div {
        color: #a94000;
      }
    }
    .top {
      background: #7499f3;
      border: 0.02rem solid #fff38f;
      border-radius: 50%;
    }
    .name {
      color: #c16227;
    }
    .user_box {
      margin-bottom: 0.3rem;
    }
  }
  .top2 {
    .dt {
      height: 1.56rem;
      background: url("../img/1-bg3.png") no-repeat 0/100%;
    }
    .icon {
      background: url("../img/1-t3.png") no-repeat 0/100%;
    }
    .hlz {
      color: #a747cf;
      div {
        color: #7f2ba2;
      }
    }
    .top {
      background: #7499f3;
      border: 0.02rem solid #f6b7ff;
      border-radius: 50%;
    }
    .name {
      color: #a747cf;
    }
  }
}
</style>
