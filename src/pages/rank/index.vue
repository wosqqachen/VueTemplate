<template>
  <div class="page1">
    <component
      :is="item"
      v-for="(item, i) in arrBox"
      :key="i"
      @click="gotoCom(i)"
    />
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, ref } from "vue";
const arr = ref(["top3", "item", "self"]);
const arrBox = ref([] as any);
for (let index = 0; index < arr.value.length; index++) {
  const e = arr.value[index];
  const pageBox = defineAsyncComponent(() => import(`./${e}/box1/index.vue`));
  arrBox.value.push(pageBox);
}
const gotoCom = (b: number) => {
  window.location.href = window.location.href + "/" + arr.value[b];
};
</script>

<style scoped lang="less">
.page1 {
  overflow: hidden;
  height: 100vh;
  background-color: RGBA(36, 44, 83, 1);
}
</style>
