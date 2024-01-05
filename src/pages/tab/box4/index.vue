<template>
  <div class="tabs">
    <div class="bg" ref="tabsll">
      <div
        v-for="(item, index) in [t('pt11'), t('pt12'), t('pt13')]"
        :key="item"
        @click="changeTab(index)"
        :class="{ tab: true, ed: tabInfo.tab == index }"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { tabInfo } from "../store";
const tabsll = ref(null as any);
const changeTab = (index: number) => {
  tabInfo.tab = index;
  console.log(tabsll.value.scrollLeft, tabsll.value.scrollWidth);
  if (index > 0) {
    tabInfo.geTabData(index + "");
    tabsll.value.scrollLeft =
      index == 2 ? tabsll.value.scrollWidth : tabsll.value.scrollWidth / 6;
  } else {
    tabsll.value.scrollLeft = 0;
  }
};
</script>

<style scoped lang="scss">
.tabs {
  margin: 0 auto;
  width: 7.02rem;
  height: 0.9rem;
  background: linear-gradient(0deg, #f66794, #d85d94, #ff6ec0);
  border-radius: 0.5rem;
  align-items: center;
  position: relative;
  z-index: 3;
  &::after {
    content: "";
    display: inline-block;
    vertical-align: sub;
    position: absolute;
    top: 0.05rem;
    z-index: 5;
    left: 0.05rem;
    width: 0.4rem;
    height: 0.8rem;
    border-radius: 0.41rem 0 0 0.41rem;
    background: rgba(180, 58, 37, 1);
  }
  &::before {
    content: "";
    display: inline-block;
    vertical-align: sub;
    position: absolute;
    z-index: 5;
    top: 0.05rem;
    right: 0.05rem;
    width: 0.4rem;
    height: 0.8rem;
    border-radius: 0 0.41rem 0.41rem 0;
    background: rgba(180, 58, 37, 1);
  }
  .bg {
    position: absolute;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    overflow: auto hidden;
    left: 0.065rem;
    top: 0.05rem;
    width: 6.88rem;
    height: 0.8rem;
    margin: 0 auto;
    padding: 0 0.1rem;
    border-radius: 0.41rem;
    background: rgba(180, 58, 37, 1);
  }
  .tab {
    position: relative;
    z-index: 2;
    width: auto;
    min-width: 2.2rem;
    padding: 0 0.33rem;
    height: 0.85rem;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    font-size: 0.32rem;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #ffabc6;
    line-height: 0.8rem;
    text-align: center;
    flex-shrink: 0;
    &.ed {
      padding: 0 0.05rem;
      position: relative;
      height: 0.85rem;
      line-height: 0.8rem;
      padding: 0 0.25rem;
      border-radius: 0.33rem;
      box-sizing: border-box;
      margin: 0.02rem;
      color: #ffffff;
      &::after {
        content: "";
        display: inline-block;
        vertical-align: sub;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, -0.08rem);
        width: 0.82rem;
        height: 0.08rem;
        border-radius: 0.04rem;
        background: #ffffff;
      }
    }
  }
}
</style>
