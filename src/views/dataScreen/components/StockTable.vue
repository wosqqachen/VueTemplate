<template>
  <div class="slist">
    <div class="title">{{ title }}</div>
    <div class="htitle">
      <div v-for="(item, index) in tableHead" :key="'kc' + index">{{ item }}</div>
    </div>
    <div class="con">
      <div class="item" v-for="(item, index) in tableData" :key="'kc' + index">
        <div class="rank">{{ index + 1 }}</div>
        <div class="name">{{ item.name }}</div>
        <div class="num">{{ item.num }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: "每月统计"
    },
    tableHead: {
      default: ["排行", "名称", "数量量"]
    },
    tableData: {
      default: [
        {
          date: "2016-05-02",
          name: "王小虎",
          num: 99
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          num: 99
        }
      ]
    }
  },
  data() {
    return {};
  }
};
</script>
