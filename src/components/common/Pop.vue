<template>
  <div :class="'pop ' + animationsClass" v-if="open" @click.self="closeModel">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Pop",
  props: {
    open: {
      type: Boolean,
      default: false
    },
    animation: {
      type: String,
      default: "scale"
    },
    needClose: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const needClose = ref(props.needClose);
    // Pop动画效果
    const animationsClass = ref(props.animation);
    /**
     * 关闭Pop
     */
    const closeModel = () => {
      console.log("点击了close");
      emit("close", false);
      if (!needClose.value) return;
      emit("update:open", false);
    };
    return { closeModel, animationsClass };
  }
});
</script>

<style scoped lang="less">
.pop {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 88;
  display: flex;
  justify-content: center;
  align-items: center;
}
.scale {
  animation: scale 0.2s ease 0s 1;
}
.scale-close {
  animation: scale 0.2s linear 0s 1;
}

@keyframes scale-close {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes scale {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
