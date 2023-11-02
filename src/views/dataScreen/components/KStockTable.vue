<template>
  <div class="slist sk">
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
<style lang="scss" scoped>
.sk {
  width: 906px;
  height: 363px;
  background-image: url("../images/bg3.png");
  .title {
    width: 318px;
    height: 41px;
    background-image: url("../images/bg2-1.png");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    box-sizing: border-box;
  }
  .con {
    height: 250px;
  }
  .htitle {
    width: 863px;
    height: 40px;
    line-height: 40px;
  }
  .item {
    width: 863px;
    height: 35px;
    background-image: url("../images/bg3-1.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    .rank {
      position: relative;
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
      font-size: 16px;
      color: rgba(0, 228, 255, 1);
    }
  }
}
</style>
