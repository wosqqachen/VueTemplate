<template>
  <div class="page">
    <pageRank @goBack="gotoBack" :topPx="topPx"/>
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent,ref } from "vue";
import { getParam2 } from "@/utils/util";
import os from "@/utils/os";
import { goBack, uploadActivityLog,getCommonParams } from "@/request/client-request";
//访问链接 https://m.tataxingqiu.com/txqfe/mass/luckyBag.html?p=idol&hidenavbar=1

// bag/萌新福袋
const pageName = getParam2()["p"] || "bag";
const pageRank = defineAsyncComponent(() => import(`./page/${pageName}.vue`));
const topPx = ref(40);
if (os.ios || os.android) {
  if (os.mobile) {
    try {
      // 如果是ios动态获取 状态栏高度
      getCommonParams((res: any) => {
        console.log("高度信息 :", res);
        topPx.value = os.android ? (Number(res.topinset)/window.devicePixelRatio*2):Number(res.topinset)/2;
      });
    } catch (error) {
      console.log("error :", error);
    }
  }
}
const gotoBack = (log:any) => {
  goBack();
  uploadActivityLog(log, "", "", "page", '', "close", "");
};
</script>

<style scoped lang="less">
.page {
  overflow: auto;
  height: 100vh;
  background-color: rgba(241, 232, 232, 0);
}
</style>
<style>
html,
body {
  position: fixed;
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  background-color: rgba(241, 232, 232, 0);
}
</style>
