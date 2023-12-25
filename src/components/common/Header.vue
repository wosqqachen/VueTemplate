<template>
  <div
    :style="{
      backgroundColor: headerBg
    }"
  >
    <!-- 占位 -->
    <div class="space">
      <div
        v-if="needStatusBar"
        :style="{
          height: topInset / 100 + 'rem'
        }"
      ></div>
      <div class="Header">
        <div class="back">
          <img style="visibility: hidden;" :src="backImage" @click="back" />
        </div>
      </div>
    </div>

    <!-- 正文 -->
    <div class="page_header">
      <div
        v-if="needStatusBar"
        class="statusBar"
        :style="{
          height: topInset / 100 + 'rem'
        }"
      ></div>
      <div class="Header">
        <div class="back">
          <template v-if="!hideBack">
            <img v-if="backIconType == 1" :src="backWhiteImage" @click="back" />
            <img v-else :src="backImage" @click="back" />
          </template>
        </div>
        <div :class="{ title: true }">{{ title }}</div>
        <div class="slot">
          <slot name="right"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from "vue";
import backImage from "@/assets/back.png";
import backWhiteImage from "@/assets/back-white.png";
import { goBack, getCommonParams } from "@/request/client-request";
import os from "@/utils/os";
export default defineComponent({
  name: "Header",

  props: {
    backIconType: {
      type: Number,
      default: 0
    },
    needStatusBar: {
      type: Boolean,
      default: true
    },
    headerBg: {
      type: String,
      default: "#fff"
    },
    hideBack: {
      type: Boolean,
      default: false
    }
  },

  setup(props, { emit }) {
    const title = inject("title", ref(""));
    const needBack = inject("needBack", ref(true));

    const topInset = ref(0);
    if (os.ios || os.android) {
      if (os.mobile) {
        try {
          // 如果是ios动态获取 状态栏高度
          getCommonParams((res: any) => {
            topInset.value = res.topinset;
          });
        } catch (error) {
          console.log("error :", error);
        }
      }
    }

    const back = () => {
      if (needBack.value) {
        console.log(needBack.value, "调用goBack");
        goBack();
      }
      emit("back");

      //下面可调用客户端返回
    };

    return {
      back,
      title: title.value || "",
      backImage,
      backWhiteImage,
      topInset
    };
  }
});
</script>

<style scoped lang="less">
.statusBar {
  width: 100%;
  display: block;
}
.page_header {
  position: fixed;
  z-index: 10000;
  // background: #fff;
  width: 100%;
  top: 0;
}
.Header {
  //background: #666;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.19rem 0.3rem;
  position: relative;
  > .back {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > img {
      width: 0.48rem;
      height: 0.48rem;
    }
  }
  > .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    flex: 1;
    text-align: center;
    font-size: 0.36rem;
    font-weight: bold;
    color: rgba(9, 20, 81, 1);
    line-height: 0.5rem;
  }
  > .slot {
    font-size: 0.32rem;
    font-weight: 400;
    color: #222222;
    line-height: 0.45rem;
  }
}
</style>
