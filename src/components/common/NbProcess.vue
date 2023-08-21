<template>
  <div class="process-wapper">
    <div
      :class="{
        process: true,
        'process-ed': true,
        'process-ed-light': w > 5,
        'vip-process-ed': vip
      }"
      :style="{
        width: `${w}%`
      }"
    ></div>
  </div>
</template>

<script lang="ts">
import { Vue, Options, prop } from "vue-class-component";

class Props {
  public vip = prop<boolean>({ default: false });
}
@Options({})
export default class GoodsItem extends Vue.with(Props) {
  w: number = 0;
  UpdateProcess(p: number) {
    this.w = Math.max(0, Math.min(100, p));
  }
}
</script>

<style lang="less">
@keyframes common-process-animation {
  from {
    background-position-x: 0;
  }
  to {
    background-position-x: calc(0.16rem * 2);
  }
}
</style>

<style lang="less" scoped>
.process-wapper {
  position: relative;
  width: 3.4rem;
  height: 0.16rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.23rem;

  .process {
    position: relative;
    transition: 1s width ease-in-out;
    border-top-left-radius: 0.23rem;
    border-bottom-left-radius: 0.23rem;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .process-ed {
    background: linear-gradient(90deg, #2bc4fe 0%, #e249f3 100%);
  }

  .process-ed-light {
    &::after {
      content: " ";
      position: absolute;
      display: block;
      right: 0;
      width: 0.03rem;
      height: 0.3rem;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        #ffffff 48%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }

  .vip-process-ed {
    background: linear-gradient(
      90deg,
      #4896f2 0%,
      #40edf8 33%,
      #ffeb37 66%,
      #cc3cff 100%
    );

    &::before {
      content: " ";
      position: absolute;
      display: block;
      left: 0;
      width: 100%;
      height: 100%;
      background: url("~@/assets/common/ectangle-light.png") repeat-x center
        left 0.16rem;

      animation: common-process-animation 1s linear 0s infinite;
    }

    &::after {
      content: " ";
      position: absolute;
      display: block;
      right: calc(-0.54rem + 0.1rem);
      width: 0.54rem;
      height: 0.33rem;

      background-image: url("~@/assets/common/rocket.png");
      background-size: 100% 100%;
    }
  }
}
</style>
