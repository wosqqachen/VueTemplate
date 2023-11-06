<template>
  <div class="jbox">
    <StockBox2 v-for="(item, index) in stockList" :key="'kc' + index" :item="item"/>
  </div>
</template>

<script>
import StockBox2 from "./StockBox2.vue";
export default {
  components: {
    StockBox2
  },
  data() {
    return {
      stockList:[
      {
        icon:'2',
        title:'商品总数量',
        amount: '1097'
      },
      {
        icon:'3',
        title:'商品品类',
        amount:'1210'
      },
      {
        icon:'4',
        title:'今日入库数',
        amount:'1210'
      },
      {
        icon:'7',
        title:'货位总数',
        amount:'6512'
      },
      {
        icon:'5',
        title:'今日出库数',
        amount:'68120'
      },
      {
        icon:'1',
        title:'空货位数',
        amount:'1097'
      },
    ]
    };
  }
};
</script>

<style scoped lang="scss">
.jbox {
  width: 740px;
  height: 533px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  padding: 50px 0 20px;
  background-image: url("../images/jgbg.png");
  background-position: bottom;
  background-size: 739px 231px;
  background-repeat: no-repeat;
  box-sizing: border-box;
  position: relative;
  >:nth-child(1){
    position: absolute;
    left: 120px;
    top: 45px;
  }
  >:nth-child(2){
    position: absolute;
    right: 120px;
    top: 45px;
  }
  >:nth-child(3){
    position: absolute;
    left: 25px;
    top: 155px;
  }
  >:nth-child(4){
    position: absolute;
    right: 25px;
    top: 155px;
  }
  >:nth-child(5){
    position: absolute;
    left: 20px;
    top: 265px;
  }
  >:nth-child(6){
    position: absolute;
    right: 20px;
    top: 265px;
  }
}
</style>
