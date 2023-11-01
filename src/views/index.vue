<template>
  <div>
    <el-button @click="visible = true">Button</el-button>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>
  </div>
</template>

<script>
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
    this.socketApi.createWebSocket();
  },
  created() {
    this.socketApi.getSock(this.getConfigResult);
  }
};
</script>

<style></style>
