<template lang="pug">
.tabs 
  .item(v-for='(item, index) in 2' :class='{ ed: index==tabindex }' @click='changeTab(index)')
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
  position: relative;
  width: 7.5rem;
  padding: 0 0.1rem 0 0.02rem;
  margin: 0.5rem auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: top;
  > .item {
    width: 2.48rem;
    height: 0.94rem;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    &:nth-child(1) {
      background-image: url(../img/1-tab1.png);
      &.ed {
        background-image: url(../img/1-tab1a.png);
      }
    }
    &:nth-child(2) {
      background-image: url(../img/1-tab2.png);
      &.ed {
        background-image: url(../img/1-tab2a.png);
      }
    }
  }
}
</style>
