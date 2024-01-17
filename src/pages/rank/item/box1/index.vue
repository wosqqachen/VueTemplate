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
        <!-- <img src="../img/1-ax.png" v-if="item === 0" class="sicon" /> -->
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
        <span class="icon"></span>
        <p class="p1" v-if="false">婚礼值</p>
        <p class="p2">23w</p>
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
const info = {
  fromBaseInfo: {
    accid: "72d8aba2c15f03071onvcN",
    familyName: "毋辰龙家族",
    headImage:
      "https://resources-ic.carryu.com.cn/ic/cloud/resources/5a8f3647e21801b61eb08c418c7f4754.png",
    inviteCode: "598205926",
    nickName: "乌雅慕"
  },
  rank: 1,
  sortInviteCardId: 1,
  sortOfficial: 0,
  sortStartTime: 1690438133000,
  sortStatus: 3,
  toBaseInfo: {
    accid: "a206487b62913c561oQMxR",
    familyName: "测试家族",
    headImage:
      "https://resources-ic.carryu.com.cn/ic/cloud/resources/8c58c68db24dc2e3ff1be2159f7593e7.png",
    inviteCode: "598202636",
    nickName: "布朵儿n"
  },
  weddingInfo: {
    applyTime: 1690436284603,
    batchId: "72d8aba2c15f03071onvcN-a206487b62913c561oQMxR",
    giftId: 1,
    groupId: 169043633107462940,
    inviteCardId: 1,
    inviteCardInfo: {
      inviteCardId: 1,
      material:
        "https://resources-ic.carryu.com.cn/ic/cloud/resources/26c66c80a1fa11ea5fdcb98db8ed1e87.png",
      name: "糖果",
      num: 20,
      price: 1314
    },
    roomId: 3962,
    status: 4,
    weddingTime: 1690438133000
  },
  weddingLevel: 1,
  weddingLevelName: "温馨婚礼",
  weddingValueStr: "87.1w"
};
const props = defineProps<IProps>();
</script>

<style scoped lang="scss">
.ul {
  overflow: hidden;
  height: auto;
  width: 7.5rem;
  padding: 0 0.3rem;
  box-sizing: border-box;
}
.li {
  display: flex;
  position: relative;
  align-items: center;
  height: 1.15rem;
  margin-bottom: 0.12rem;
  background: url("../img/1-bgli.png") no-repeat 0.65rem 0/6.22rem 1.15rem;
  .num {
    width: 0.65rem;
    height: 0.64rem;
    line-height: 0.64rem;
    // background: url("../img/1-icon.png") no-repeat bottom/100%;
    text-align: center;
    font-size: 0.28rem;
    color: rgba(93, 108, 180, 1);
  }
  .user_box {
    width: 1.4rem;
    display: flex;
    justify-content: space-between;
    margin-right: 0.2rem;
    margin-left: 0.25rem;
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
      background: url("../img/1-jb.png") no-repeat 0/100%;
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
