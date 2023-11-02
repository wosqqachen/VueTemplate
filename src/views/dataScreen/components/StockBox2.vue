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
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.sbox {
  width: 220px;
  height: 85px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-image: url("./images/bg1.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  box-sizing: border-box;
  .icon {
    width: 36px;
    height: 36px;
    background-color: #f115c2;
  }
  .scon {
    text-align: left;
    flex: 1;
    padding-left: 20px;
    font-style: italic;
    .st {
      font-size: 30px;
      color: #00e4ff;
    }
    .sd {
      font-size: 14px;
      color: #fff;
    }
  }
}
</style>
