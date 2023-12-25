<template>
  <div class="top3">
    <div
      class="top-item"
      v-for="(item, i) in 3"
      :key="i"
      :style="{ order: [2, 1, 3][i] }"
    >
      <div class="head">
        <img :src="require(`../img/3${i + 1}.png`)" alt="" class="head-box" />
        <img
          src="https://resources-ic.carryu.com.cn/ic/cloud/resources/8c58c68db24dc2e3ff1be2159f7593e7.png"
          alt=""
          class="head-pic"
        />
      </div>
      <div class="nickname">{{ "昵称" }}</div>
      <div class="num">{{ millionDeal(98888, "w", 1) }}天蝎值</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { millionDeal } from "@/utils/util";
interface IProps {
  item: object;
  txt: string;
}
const props = defineProps<IProps>();
</script>

<style scoped lang="scss">
@mixin imgBg($url, $width, $height) {
  width: $width;
  height: $height;
  background-image: url($url);
  background-repeat: no-repeat;
  background-position: left top;
  background-size: $width $height;
}
@mixin fontBorder($size: 0.02rem, $color: #000, $blur: 0) {
  text-shadow: $size 0 $blur $color, calc(#{$size} * -1) 0 $blur $color,
    0 calc(#{$size} * -1) $blur $color, 0 $size $blur $color, 0 0 $size $color,
    $size $size $blur $color, 0 0 $size $color,
    calc(#{$size} * -1) calc(#{$size} * -1) $blur $color, 0 0 $size $color,
    calc(#{$size} * -1) $size $blur $color, 0 0 $size $color,
    $size calc(#{$size} * -1) $blur $color, 0 0 $size $color;
}
@mixin textHide($max_width) {
  max-width: $max_width;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: keep-all;
}
.top3 {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 0.67rem;
  .top-item {
    display: flex;
    align-items: center;
    flex-direction: column;

    .head {
      position: relative;
      width: fit-content;
      .head-box {
        width: 1.49rem;
        height: 1.49rem;
        max-width: initial;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        z-index: 1;
      }
      .head-pic {
        width: 1.03rem;
        height: 1.04rem;
        position: relative;
        background-color: rgb(190, 233, 255);
        border-radius: 50%;
        display: block;
      }
    }
    .nickname {
      @include imgBg("../img/31-1.png", 2.089rem, 0.59rem);
      text-align: center;
      padding-top: 0.32rem;
      color: white;
      font-size: 0.24rem;
      font-weight: bold;
      @include fontBorder(0.02rem, #a76f38);

      margin-top: -0.12rem;
      @include textHide(2rem);
    }
    .num {
      @include imgBg("../img/31-2.png", 2.02rem, 0.4rem);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 0.22rem;
      margin-top: 0.08rem;
    }
    &:nth-child(1) {
      .head {
        .head-box {
          width: 1.75rem;
          height: 1.75rem;
        }
        .head-pic {
          width: 1.2rem;
          height: 1.2rem;
        }
      }
      .nickname {
        margin-top: -0.08rem;
      }
    }
    &:nth-child(2) {
      .nickname {
        @include imgBg("../img/32-1.png", 2.089rem, 0.59rem);
        @include fontBorder(0.02rem, #357cb2);
      }
      .num {
        @include imgBg("../img/32-2.png", 2.02rem, 0.4rem);
      }
    }
    &:nth-child(3) {
      .nickname {
        @include imgBg("../img/33-1.png", 2.089rem, 0.59rem);
        @include fontBorder(0.02rem, #cb5693);
      }
      .num {
        @include imgBg("../img/33-2.png", 2.02rem, 0.4rem);
      }
    }
  }
}
</style>
