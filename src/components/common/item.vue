<template>
  <div class="item border-1px-b">
    <div>
      <span class="title">{{ item.memo1 }}</span>
      <span class="type">{{ item.memo2 }}</span>
    </div>
    <div class="right">
      <span class="money" :class="{ red: item.logtype != 1 }"
        >{{ item.logtype == 1 ? "+" : "-" }}{{ item.bonus }}</span
      >
      <span class="time">{{ item.tradetime }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  props: ["item"],
  setup() {
    return {};
  }
});
</script>

<style lang="less" scoped>
.item {
  display: flex;
  justify-content: space-between;
  margin-left: 0.3rem;
  padding-right: 0.3rem;
  height: 1.42rem;
  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    white-space: nowrap;
  }
  .right {
    text-align: right;
  }
  .title {
    font-size: 0.32rem;
    font-weight: bold;
    color: #091451;
    line-height: 0.45rem;
    margin-bottom: 0.1rem;
  }
  .type {
    font-size: 0.26rem;
    color: #7585ad;
    line-height: 0.37rem;
  }
  .money {
    font-size: 0.34rem;
    color: #91caff;
    line-height: 0.48rem;
    margin-bottom: 0.08rem;
  }
  .red {
    color: #fe5978;
  }
  .time {
    line-height: 0.37rem;
    font-size: 0.26rem;
    color: #7585ad;
  }
  .border-1px-b {
    position: relative;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 1px;
      background: #e8ecef;
      transform-origin: 0 100%;
      transform: scaleY(0.5);
    }
  }
}
</style>
