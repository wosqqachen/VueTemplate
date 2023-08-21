<template lang="pug">
.rule-pop
  .mask
  .content
    .close(@click='store.changeDialog(0)')
    .box-tt
      .bgbox
        .con
          .title 规则
          .list
            .ptxt 活动时间：
            .txt 新用户注册起7日内有效
            .ptxt 参与条件
            .txt 1.新用户注册起七日内拥有参与资格 <br/>2.仅他ta星球122及以上版本用户拥有参与资格 
            .ptxt 获取福袋
            .txt 1.每天完成活动任务可以获得琉璃福袋和钻石福袋；<br/>2.获取琉璃福袋任务为日任务，每天可完成一次，次日 刷新；<br/>3.获取钻石福袋的任务活动期内不刷新进度，每日不限制完成次数；<br/>4.福袋任务完成后，福袋次数自动下发，无需手动领取；<br/>5.获得福袋可以打开获取个性装扮奖励，获得奖励只能用户自行穿戴。<br/>*活动结束后，未消耗福袋将失效。
            .ptxt 装扮奖励
            .txt 琉璃福袋装扮奖励
            .ubox 
              table.tables
                thead
                  th 奖励名称
                  th 有效期
                  th 概率
                tbody
                  tr(v-for="(item, i) in store.bagReward?.glaze_info" :key=i )
                    td {{ item.name }}
                    td {{ item.expireTime}}天
                    td {{ (item.rate*100).toFixed(2) }}%
            .txt 钻石福袋装扮奖励
            .ubox 
              table.tables
                thead
                  th 奖励名称
                  th 有效期
                  th 概率
                tbody
                  tr(v-for="(item, i) in store.bagReward?.diamond_info" :key=i )
                    td {{ item.name }}
                    td {{ item.expireTime}}天
                    td {{ (item.rate*100).toFixed(2) }}%
</template>
<script setup lang="ts">
import { ref, reactive, onMounted, computed, watch } from "vue";
// import { getPowerReward } from "./reward";
import { bagStore } from "../store";
const store = bagStore();
const logList = ref([]);
// const yellArr = ref(getPowerReward(6)) as any;
</script>

<style scoped lang="less">
.rule-pop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;

  >.content {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 101;
    width: 7.5rem;
    min-height: 9rem;
    max-height: 11rem;
    border-radius: 0.6rem 0.6rem 0rem 0rem;

    .close {
      position: absolute;
      top: 0.25rem;
      right: 0.3rem;
      width: 0.5rem;
      z-index: 10;
      height: 0.5rem;
      background: url("../img//icon_g.png") top/100% auto no-repeat;
    }

    .box-tt>.bgbox {
      width: 7.5rem;
      height: auto;

      .con {
        height: 11rem;
        padding: 0.1rem 0.3rem;
        background-position: bottom;
        border-radius: 0.6rem 0.6rem 0 0;
        background-image: url("../img//bg1.png");
        background-position: top;
        background-size: contain;
        background-repeat: no-repeat;
        background-color: #8b76ff;

        .title {
          width: 100%;
          height: 1rem;
          line-height: 1rem;
          font-size: 0.36rem;
          text-align: center;
          font-family: PingFang SC;
          font-weight: bold;
          color: #ffffff;
        }

        .list {
          height: 10rem;
          overflow: auto;
        }
      }

      .ubox {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        align-items: center;
        padding: 0.25rem 0.2rem;

        .tables {
          border: 0.01rem solid rgba(255, 255, 255, 0.2);
          border-right: none;
          border-bottom: none;
          border-collapse: collapse;
          margin: 0.2rem auto;
          width: 100%;

          td,
          th {
            border: 0.01rem solid rgba(255, 255, 255, 0.2);
            border-left: none;
            border-top: none;
            text-align: center;
          }

          th {
            height: 0.6rem;
            background: rgba(255, 255, 255, 0.2);
            font-size: 0.24rem;
            color: #fff;
            line-height: 0.3rem;
          }

          td {
            height: 0.6rem;
            font-size: 0.28rem;
            color: #fff;
            line-height: 0.3rem;
          }
        }

        .puser {
          width: 1.41rem;
          height: 2.1rem;
          position: relative;
          margin-bottom: 0;
          margin-right: 0.33rem;

          &::before {
            top: 0.5rem;
            left: 0;
            width: 1.41rem;
            height: 1.67rem;
          }

          .name {
            color: #4241ba;
            font-size: 0.24rem;
          }

          .desc {
            color: #4241ba;
            font-size: 0.2rem;
          }
        }

        .pic {
          background-color: rgb(29 32 202 / 0%);
          justify-content: center;
          border: 0;
        }
      }

      .ptxt {
        font-size: 0.32rem;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #ffffff;
        line-height: 0.55rem;
      }

      .txt {
        font-size: 0.28rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #ffffff;
        line-height: 0.42rem;
      }
    }

    .box-bg {
      width: 6.9rem;
      height: auto;
      padding: 0.15rem 0;
      box-sizing: border-box;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 0.5rem 0rem 0.5rem 0rem;
      margin-bottom: 0.2rem;

      .bg {
        position: relative;
        width: 6.61rem;
        min-height: 1.37rem;
        margin: 0 auto;
        background: #ffffff;
        border-radius: 0.4rem 0rem 0.4rem 0rem;

        .bcon {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          align-items: center;
          padding: 0.15rem 0.24rem;

          .left {
            .ptxt {
              height: 0.5rem;
              line-height: 0.55rem;
              font-size: 0.3rem;
              font-family: PingFang SC;
              font-weight: bold;
              color: #222222;
            }

            .txt {
              height: 0.4rem;
              line-height: 0.35rem;
              font-size: 0.24rem;
              font-family: PingFang SC;
              font-weight: 500;
              color: #bcb9cb;
            }
          }

          .right {
            .img {
              width: 1rem;
              height: 1rem;
            }
          }
        }
      }
    }

    .bcon {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      padding: 0.15rem 0.24rem;

      .left {
        .ptxt {
          height: 0.5rem;
          line-height: 0.55rem;
          font-size: 0.3rem;
          font-family: PingFang SC;
          font-weight: bold;
          color: #222222;
        }

        .txt {
          height: 0.4rem;
          line-height: 0.35rem;
          font-size: 0.24rem;
          font-family: PingFang SC;
          font-weight: 500;
          color: #bcb9cb;
        }
      }

      .right {
        .img {
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }

  >.mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: rgba(0, 0, 0, 0.6);
  }
}
</style>
