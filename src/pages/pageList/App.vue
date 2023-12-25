<template>
  <div class="page">
    <!-- <pageRule @goBack="gotoBack" v-if="half == 1"> </pageRule>
    <div class="page1" v-else>
    </div> -->
    <component :is="item" v-for="(item, i) in arrBox" :key="i" class="comm" />
  </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from "vue";
import { getParam } from "@/utils/util";
import { goBack } from "@/request/client-request";
//访问链接 https://m.tataxingqiu.com/txqfe/mass/pageList.html?p=pet&hidenavbar=1

const pageName = getParam()["p"] || "button/box1";
const half = getParam()["n"] || "1"; //1
console.log("页面参数路径", pageName);
const arrBox = ref([] as any);
for (let index = 1; index <= half; index++) {
  const pageBox = [] as any;
  if (half > 1) {
    const pageBox = defineAsyncComponent(() =>
      import(`@/pages/${pageName}/box${index}/index.vue`)
    );
    arrBox.value.push(pageBox);
  } else {
    const box = defineAsyncComponent(() =>
      import(`@/pages/${pageName}/index.vue`)
    );
    arrBox.value.push(box);
  }
}
const pageRule = defineAsyncComponent(() =>
  import(`@/pages/${pageName}/index.vue`)
);
const gotoBack = () => {
  goBack();
};
const gotoCom = (b: number) => {
  window.location.href = window.location.href.split("&")[0];
};
</script>

<style scoped lang="less">
.page {
  overflow: hidden;
  height: 100vh;
  background-color: rgba(241, 232, 232, 0);
  .comm {
    position: relative;
  }
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
  box-sizing: border-box;
  background-color: rgba(241, 232, 232, 0);
}
</style>
