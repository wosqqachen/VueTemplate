<template>
  <div>
    <el-button @click="visible = true">Button</el-button>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>
  </div>
</template>

<script>
import { wearHouseAccountAge } from "@/api/index";
import axios from "axios";
export default {
  name: "index",
  data() {
    return {
      visible: false
    };
  },
  methods: {
    // 获取socket信息回调
    getConfigResult(res) {
      // 获取websocket发来的信息
      console.log(res.data);
    },
    sendSocket() {
      this.socketApi.sendSock(data, callBack);
    }
  },
  mounted() {
    wearHouseAccountAge().then(response => {
      console.log("返回数据啦", response.data);
    });
    // axios.post('http://120.27.212.89:29703/api/pride-dxsx-mes/big_screen/wearHouseAccountAge', {
    //   }).then(response => {
    //     console.log(response.data)
    //   })
    this.socketApi.createWebSocket();
  },
  created() {
    this.socketApi.getSock(this.getConfigResult);
  }
};
</script>

<style></style>
