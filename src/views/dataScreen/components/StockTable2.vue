<template>
  <div class="slist">
    <div class="title">{{ title }}</div>
    <div class="htitle">
      <div v-for="(item, index) in tableHead" :key="'kc' + index">{{ item }}</div>
    </div>
    <div class="con">
      <div class="item" v-for="(item, index) in tableData" :key="'kc' + index">
        <div class="rank">{{ index + 1 }}</div>
        <div class="name">{{ item.goods_name }}</div>
        <div class="num">{{ item.total_qu }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: "统计"
    },
    tableHead: {
      default: ["排行", "名称", "数量"]
    },
    tableData: {
      default: [
        {
          "goods_name": "X8S-C-US无孔",
          "goods_code": "JT0142CY1000",
          "total_qu": 29978.0
        },
      ]
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.slist {
  width: 508px;
  height: 533px;
  background-image: url("../images/bg2.png");

  .con {
    height: 420px;
  }

  .htitle {
    width: 483px;
    height: 40px;
    line-height: 40px;
  }

  .item {
    width: 483px;
    height: 35px;
    background-image: url("../images/bg2-3.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    .rank {
      position: relative;
      width: 120px;
      &::before {
        content: "";
        display: inline-block;
        vertical-align: middle;
        width: 13px;
        height: 8px;
        background-image: url("../images/i1.png");
        background-repeat: no-repeat;
        background-position: left;
        background-size: contain;
      }
    }

    .num {
      width: 120px;
      font-size: 16px;
      color: rgba(0, 228, 255, 1);
    }
  }
}
</style>
