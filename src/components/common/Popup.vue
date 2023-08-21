<template>
  <van-popup
    v-model:show="visible"
    :overlay="overlay"
    :position="position"
    :duration="duration"
    :round="round"
    :overlay-class="overlayClass"
    :overlay-style="overlayStyle"
    :lock-scroll="lockScroll"
    :lazy-render="lazyRender"
    :close-on-popstate="closeOnPopstate"
    :close-on-click-overlay="closeOnClickOverlay"
    :closeable="closeable"
    :close-icon="closeIcon"
    :close-icon-position="closeIconPosition"
    :transition="transition"
    :transition-appear="transitionAppear"
    teleport="#app"
    @opened="openPopup"
    @closed="closePopup"
    @click-overlay="onClickOverlayEvent"
    @click-close-icon="onClickCloseIcon"
  >
    <slot />
  </van-popup>
</template>

<script lang="ts">
import { Vue, prop } from "vue-class-component";

/**
 * @public visible @description: 是否显示弹出层
 * @public overlay @description: 是否显示遮罩层
 * @public position @description: 弹出位置（top,bottom,right,left,center）
 * @public duration @description: 动画时长，单位秒，设置为0可禁用动画
 * @public round @description: 是否显示圆角
 * @public overlayClass @description: 自定义遮罩层类名
 * @public overlayStyle @description: 自定义遮罩层样式
 * @public lockScroll @description: 是否锁定背景滚动
 * @public lazyRender @description: 是否在显示弹层时才渲染节点
 * @public closeOnPopstate @description: 是否在页面回退时自动关闭
 * @public closeOnClickOverlay @description: 是否在点击遮罩层后关闭
 * @public closeable @description: 是否显示关闭图标
 * @public closeIcon @description: 关闭图标名称或图片链接
 * @public closeIconPosition @description: 关闭图标位置
 * @public transition @description: 动画类名，等价于transition的name属性
 * @public transitionAppear @description: 是否在初始渲染时启动过渡动画
 * @public openPopup @description: 打开弹出层动画结束时触发
 * @public closePopup @description: 关闭弹出层动画结束时触发
 * @public onClickOverlayEvent @description: 点击遮罩层时触发
 * @public onClickCloseIcon @description: 点击关闭图标时触发
 */

class Props {
  public visible = prop<boolean>({ default: true });
  public overlay = prop<boolean>({ default: true });
  public position = prop<string>({ default: "center" });
  public duration = prop<number | string>({ default: 0.2 });
  public round = prop<boolean>({ default: false });
  public overlayClass = prop<string | Array<[]> | {}>({ default: "" });
  public overlayStyle = prop<{}>({
    default: {
      backgroundColor: "rgba(0, 0, 0, 0.6)"
    }
  });
  public lockScroll = prop<boolean>({ default: true });
  public lazyRender = prop<boolean>({ default: true });
  public closeOnPopstate = prop<boolean>({ default: false });
  public closeOnClickOverlay = prop<boolean>({ default: false });
  public closeable = prop<boolean>({ default: false });
  public closeIcon = prop<string>({ default: "cross" });
  public closeIconPosition = prop<string>({ default: "top-right" });
  public transition = prop<string>({ default: "" });
  public transitionAppear = prop<boolean>({ default: true });
}

export default class PopupVant extends Vue.with(Props) {
  public openPopup() {
    console.log("open popup");
  }
  public closePopup() {
    console.log("close popup");
  }
  public onClickOverlayEvent() {
    console.log("click overlay");
    this.$emit('close-overlay');
  }
  public onClickCloseIcon() {
    console.log("click close icon");
  }
}
</script>

<style lang="less">
.van-popup {
  background: transparent;
  overflow-y: visible;
}
</style>
