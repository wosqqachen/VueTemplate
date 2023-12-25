<template>
  <div class="tables">
    <table>
      <tr class="tr1">
        <td>道具名称</td>
        <td>效果</td>
        <td>数量</td>
      </tr>
      <tr v-for="(item, index) in 5" :key="index">
        <td colspan="2" v-if="item < 3">全速冲刺</td>
        <td rowspan="2" v-if="item > 3">前进长度增加3km</td>
        <td v-if="item < 3">888</td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const tabindex = ref(0);
const changeTab = (index: number) => {
  tabindex.value = index;
};
</script>

<style scoped lang="scss">
.tables {
  table {
    margin: 0.2rem auto;
    width: 5.28rem;
    border: 1px solid #b1e0cb;
    border-collapse: collapse;
    tr {
      height: 0.56rem;
      border: 1px solid #b1e0cb;
    }
    td {
      border: 1px solid #b1e0cb;
      text-align: center;
      font-size: 0.24rem;
      color: #81c4a6;
    }
    .tr1 {
      background: #ccebcf;
      td {
        font-weight: bold;
        color: #5d977d;
      }
    }
  }
}
</style>
