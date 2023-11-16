<template>
  <div class="jbox">
    <StockBox2 v-for="(item, index) in stockList" :key="'kc' + index" :item="item" />
  </div>
</template>

<script>
import StockBox2 from "./StockBox2.vue";
import {
  goodsAmount,
  goodsTypeAmount,
  todayInAmount,
  positionHouseAmount,
  todayOutAmount,
  voidPositionHouseAmount
} from "@/api/index";
export default {
  components: {
    StockBox2
  },
  data() {
    return {
      stockList: [
        {
          icon: "2",
          title: "商品总数量",
          amount: "1097"
        },
        {
          icon: "3",
          title: "商品品类",
          amount: "1210"
        },
        {
          icon: "4",
          title: "今日入库数",
          amount: "1210"
        },
        {
          icon: "7",
          title: "货位总数",
          amount: "6512"
        },
        {
          icon: "5",
          title: "今日出库数",
          amount: "68120"
        },
        {
          icon: "1",
          title: "空货位数",
          amount: "1097"
        }
      ]
    };
  },
  created() {
    this.allData();
  },
  methods: {
    allData() {
      goodsAmount().then(response => {
        console.log("商品总数量", response.data);

        let info = this.stockList[0];
        info.amount = response.data.amount;
        this.stockList.splice(0, 1, info);
      });
      goodsTypeAmount().then(response => {
        console.log("商品品类", response.data);
        let info = this.stockList[1];
        info.amount = response.data.amount;
        this.stockList.splice(1, 1, info);
      });
      todayInAmount().then(response => {
        console.log("今日入库数", response.data);
        let info = this.stockList[2];
        info.amount = response.data.amount;
        this.stockList.splice(2, 1, info);
      });
      positionHouseAmount().then(response => {
        console.log("货位总数", response.data);
        let info = this.stockList[3];
        info.amount = response.data.amount;
        this.stockList.splice(3, 1, info);
      });
      todayOutAmount().then(response => {
        console.log("今日出库数", response);
        let info = this.stockList[4];
        info.amount = response.data?.amount || 0;
        this.stockList.splice(4, 1, info);
      });
      voidPositionHouseAmount().then(response => {
        console.log("空货位数", response.data);
        let info = this.stockList[5];
        info.amount = response.data.amount;
        this.stockList.splice(5, 1, info);
      });
    }
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
  > :nth-child(1) {
    position: absolute;
    left: 120px;
    top: 45px;
  }
  > :nth-child(2) {
    position: absolute;
    right: 120px;
    top: 45px;
  }
  > :nth-child(3) {
    position: absolute;
    left: 25px;
    top: 155px;
  }
  > :nth-child(4) {
    position: absolute;
    right: 25px;
    top: 155px;
  }
  > :nth-child(5) {
    position: absolute;
    left: 20px;
    top: 265px;
  }
  > :nth-child(6) {
    position: absolute;
    right: 20px;
    top: 265px;
  }
}
</style>
