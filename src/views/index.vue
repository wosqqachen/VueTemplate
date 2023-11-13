<template>
  <div>
    <el-button @click="visible = true">Button{{ goodsAmount }}</el-button>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>
  </div>
</template>

<script>
import { wearHouseAccountAge } from "@/api/index";
import requests from "@/api/request";
export default {
  data() {
    return {
      visible: false,
      goodsAmount: 0
    };
  },
  methods: {},
  mounted() {
    wearHouseAccountAge().then(response => {
      console.log("返回数据啦", response.data);
    });
    // requests({
    //   // url: "/Admin/GoodsProp/getenum"
    //   url: "/Admin/GoodsPrice/getenum"
    // }).then(response => {
    //   console.log("返回数据啦", response.data);
    //   this.goodsAmount = response.data;
    // });
  },
  created() {}
};
</script>

<style></style>
