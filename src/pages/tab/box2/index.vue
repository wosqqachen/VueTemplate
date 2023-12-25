<template lang="pug">
.tabs(:class='{ ed: tabindex==1 }') 
  .item(v-for='(item, index) in 2'  @click='changeTab(index)')
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
  width: 3.84rem;
  height: 0.8rem;
  padding: 0 0.1rem 0 0.02rem;
  margin: 0.5rem auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: top;
  background-image: url(../img/2-tab1.png);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  > .item {
    width: 2.48rem;
    height: 0.8rem;
  }
  &.ed {
    background-image: url(../img/2-tab2.png);
  }
}
</style>
