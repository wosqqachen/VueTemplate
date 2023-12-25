<template lang="pug">
.tabs
  .tab(v-for="(item, index) in ['魅力榜','豪气榜','聊天室榜']"  @click='changeTab(index)' :class='{ ed : tabindex==index }') {{tabindex==index ? '':item}}
</template>

<script setup lang="ts">
import { ref } from "vue";
const tabindex = ref(0);
const changeTab = (index: number) => {
  tabindex.value = index;
};
</script>

<style scoped lang="scss">
.tabs {
  margin: 0 auto;
  width: 5.13rem;
  height: 0.65rem;
  background: #813e15;
  border-radius: 0.33rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;

  .tab {
    width: 2.8rem;
    height: 0.65rem;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    font-size: 0.3rem;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #ad632d;
    line-height: 0.65rem;
    text-align: center;
    &:nth-child(1) {
      &.ed {
        background-image: url("../img/3-tab1a.png");
      }
    }
    &:nth-child(2) {
      &.ed {
        background-image: url("../img/3-tab2a.png");
      }
    }
    &:nth-child(3) {
      &.ed {
        background-image: url("../img/3-tab3a.png");
      }
    }
  }
}
</style>
