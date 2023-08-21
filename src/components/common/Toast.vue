<template>
  <div v-show="showing" class="toast">{{ content }}</div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

class Props {}
@Options({})
export default class Toast extends Vue.with(Props) {
  showing: boolean = false;
  content: string = "";

  public show(content: string, t: number = 2000) {
    if (!content) return;

    this.content = content;

    if (this.showing) return;
    this.showing = true;

    setTimeout(() => {
      this.showing = false;
    }, t);
  }
}
</script>

<style scoped lang="less">
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  animation: opacity 0.2s ease-in;

  font-size: 0.3rem;
  background: rgba(0, 0, 0, 0.7);
  padding: 0.2rem 0.4rem;
  border-radius: 0.2rem;
  z-index: 10000;
  min-width: 1rem;
  max-width: 3rem;
  color: #fff;
}
</style>
