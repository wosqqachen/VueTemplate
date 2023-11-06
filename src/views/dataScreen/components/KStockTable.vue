<template>
  <div class="slist sk">
    <div class="title">{{ title }}</div>
    <div class="htitle">
      <div v-for="(item, index) in tableHead" :key="'kc' + index">{{ item }}</div>
    </div>
    <div class="con">
      <div class="item" v-for="(item, index) in tableData" :key="'kc' + index">
        <div class="rank">{{ item.work_card_no }}</div>
        <div class="name">{{ item.goods_name }}</div>
        <div class="name">{{ item.goods_code }}</div>
        <div class="num">{{ item.plan_qu }}</div>
        <div class="num">{{ item.out_qu }}</div>
        <div class="num">{{ item.pending_qu }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: "库存统计"
    },
    tableHead: {
      default: []
    },
    tableData: {
      default: []
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
  
  >.htitle {
    width: 860px;
    height: 40px;
    justify-content: space-between;
    line-height: 40px;
  }
  .con {
    height: 250px;
    .item {
      width: 860px;
      height: 35px;
      padding: 0 15px 0 10px;
      justify-content: space-between;
      background-image: url("../images/bg3-1.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
        text-align: left;
      .rank {
        position: relative;
        width: 130px;
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
      .name {
        width: 140px;
      }
      .num {
        width: 100px;
        font-size: 16px;
      }
    }
  }
  
}
</style>
