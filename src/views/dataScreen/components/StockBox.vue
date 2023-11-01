<template>
  <div class="sbox">
    <img src="../images/icon1.png" alt="" srcset="" />
    <div class="scon">
      <div class="st">888</div>
      <div class="sd">本月</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: "月份"
    },
    tableHead: {
      default: ["库存排行", "商品名称", "库存量"]
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
