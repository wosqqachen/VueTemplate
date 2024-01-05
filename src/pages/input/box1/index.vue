<template>
  <div class="search">
    <img src="../img/1-icon.png" alt="" class="icon" />
    <input
      type="number"
      v-model="searchInfo.userId"
      placeholder="请输入用户ID"
    />
    <img
      src="../img/1-close.png"
      alt=""
      class="icon2"
      v-show="searchInfo.close"
      @click="searchInfo.close = false"
    />
    <button @click="searchInfo.getSearchData"></button>
  </div>
</template>

<script lang="ts" setup>
import { searchInfo } from "../store";
</script>

<style lang="scss" scoped>
.search {
  position: relative;
  margin: 0.2rem auto 0.27rem;
  width: 6.46rem;
  height: 0.58rem;
  background: url("../img/1-search.png") no-repeat 0/100%;
  display: flex;
  align-items: center;
  .icon {
    margin: 0 0.26rem 0 0.34rem;
    width: 0.33rem;
    height: 0.34rem;
  }
  .icon2 {
    position: absolute;
    right: 1.27rem;
    width: 0.37rem;
    height: 0.37rem;
  }
  input {
    background: transparent;
    color: #fff;
    border: 0px;
    outline: none;
    cursor: pointer;
    &::placeholder {
      color: #9df2ff;
      font-size: 0.26rem;
    }
  }
  button {
    position: absolute;
    right: 0;
    width: 1rem;
    height: 100%;
    border: 0px;
    outline: none;
    background: transparent;
  }
}
</style>
