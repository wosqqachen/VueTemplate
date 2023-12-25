<template>
  <div class="page2">
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
const arr = ref(["box1", "box2", "box3", "box4", "box5"]);
const arrBox = ref([] as any);
for (let index = 0; index < arr.value.length; index++) {
  const e = arr.value[index];
  const pageBox = defineAsyncComponent(() => import(`./${e}/index.vue`));
  arrBox.value.push(pageBox);
}
const gotoCom = (b: number) => {
  window.location.href = window.location.href + "/" + arr.value[b];
};
</script>

<style scoped lang="less">
.page2 {
  overflow: auto;
  height: 100vh;
  background-color: RGBA(36, 44, 83, 1);
}
</style>
