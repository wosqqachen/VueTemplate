<template lang="pug">
.rank-item-wrapper.flex-start( :class='{[ "no-" + info.rank ] : true }')
  .no.flex-center(:class='{ small: info.rank > 9 }')
    span.span {{ info.rank }}
  .user.flex-center
    .pic-wrapper.flex-center(@click='clickAvatarHandler(info.user)')
      img.pic(v-if='info.user.headImage', :src='info.user.headImage')
      .live(v-if="props.tab==2 && info.user?.roomId" )
            com-pic-view(pic-src="./images/topList/audio.svga")
    .name.text-flow {{ info.user.nickName || '虚位以待' }}
    .desc.flex-center(v-if='info.rank<4')
      img.pic(v-if='props.tab == 2' src='../img/3-rd-t1.png')
      img.pic(v-else src='../img/3-rd-t2.png')
  .value-wrapper
    .text 甜度值:
    .value {{ millionDeal(info.points, 'w', 1) }}
</template>

<script setup lang="ts">
import { openPage } from "@/request/client-request";
import { millionDeal } from "@/utils/util";
import ComPicView from "@/components/common/PicView.vue";

interface IProps {
  info: any;
  tab: number;
}

const props = defineProps<IProps>();
const info = {
  rank: 1,
  points: 0,
  user: {
    roomId: "111",
    accid: "a206487b62913c561oQMxR",
    familyName: "测试家族",
    headImage:
      "https://resources-ic.carryu.com.cn/ic/cloud/resources/8c58c68db24dc2e3ff1be2159f7593e7.png",
    inviteCode: "598202636",
    nickName: "布朵儿n"
  }
};
// 点击了头像
const clickAvatarHandler = (item: { accid: string; roomId: string }) => {
  if (item?.roomId != "" && props.tab == 2) {
    openPage("audioRoom", "", {
      roomid: item.roomId,
      formType: 8,
      activeName: "决战糖果屋"
    });
  } else if (item?.accid != "") {
    openPage("userCenter", "", { accid: item.accid });
  }
};
</script>

<style scoped lang="less">
.rank-item-wrapper {
  margin: auto;
  width: 6.5rem;
  height: 1.22rem;
  padding: 0;
  position: relative;
  display: flex;
  align-items: center;
  .flex-center {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }
  &.no-1 {
    .no {
      .span {
        display: none;
      }
      &::after {
        content: "";
        display: inline-block;
        vertical-align: sub;
        width: 0.42rem;
        height: 0.48rem;
        background-image: url("../img/3-01.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      }
    }

    .desc {
      &::after {
        content: "3天";
        display: inline-block;
        vertical-align: sub;
        position: absolute;
        right: -0.3rem;
        top: -0.1rem;
        width: 0.6rem;
        height: 0.28rem;
        font-size: 0.24rem;
        font-weight: 500;
        color: #c2593d;
        text-align: center;
        background-image: url("../img/3-tipsbg.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      }
    }
  }
  &.no-2 {
    .no {
      .span {
        display: none;
      }
      &::after {
        content: "";
        display: inline-block;
        vertical-align: sub;
        width: 0.42rem;
        height: 0.48rem;
        background-image: url("../img/3-02.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      }
    }
    .desc {
      &::after {
        content: "2天";
        display: inline-block;
        vertical-align: sub;
        position: absolute;
        right: -0.3rem;
        top: -0.1rem;
        width: 0.6rem;
        height: 0.28rem;
        font-size: 0.24rem;
        font-weight: 500;
        color: #c2593d;
        text-align: center;
        background-image: url("../img/3-tipsbg.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      }
    }
  }
  &.no-3 {
    .no {
      .span {
        display: none;
      }
      &::after {
        content: "";
        display: inline-block;
        vertical-align: sub;
        width: 0.42rem;
        height: 0.48rem;
        background-image: url("../img/3-03.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      }
    }
    .desc {
      &::after {
        content: "1天";
        display: inline-block;
        vertical-align: sub;
        position: absolute;
        right: -0.3rem;
        top: -0.1rem;
        width: 0.6rem;
        height: 0.28rem;
        font-size: 0.24rem;
        font-weight: 500;
        color: #c2593d;
        text-align: center;
        background-image: url("../img/3-tipsbg.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      }
    }
  }

  .no {
    width: 0.7rem;
    height: 0.7rem;
    font-size: 0.36rem;
    font-weight: 500;
    color: #893a18;
    font-family: initial;
    text-align: center;
    &.small {
      font-size: 0.34rem;
      color: #893a18;
    }
  }

  .user {
    flex: 1;
    justify-content: flex-start;
    .pic-wrapper {
      position: relative;
      width: 0.9rem;
      height: 0.9rem;
      border-radius: 50%;
      border: 0.02rem solid #ebccb0;
      background: url("/img/empty.png") center center/1rem 1rem no-repeat;

      > .pic {
        width: 0.88rem;
        height: 0.88rem;
        border-radius: 50%;
      }
    }

    > .name {
      flex: 1;
      max-width: 2rem;
      margin-left: 0.15rem;
      text-align: left;
      font-size: 0.28rem;
      font-weight: bold;
      color: #893a18;
    }
    .desc {
      width: 1rem;
      height: 1rem;
      position: relative;
      .pic {
        width: 100%;
        height: 100%;
      }
    }
  }
  .live {
    position: absolute;
    top: 0.5rem;
    right: -0.15rem;
    width: 0.4rem;
    height: 0.4rem;
    border: 0.02rem solid #ffffff;
    background: linear-gradient(0deg, #e24d03 0%, #f68103 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    div {
      width: 72%;
      height: 72%;
    }
  }
  .value-wrapper {
    min-width: 1.5rem;
    color: #893a18;
    text-align: right;
    .text {
      font-size: 0.24rem;
      font-weight: bold;
    }
    .value {
      font-size: 0.3rem;
      font-weight: bold;
      color: #ff56c6;
    }
  }
}
</style>
