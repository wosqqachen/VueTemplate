<template>
  <!-- 展示区域 -->
  <div class="wrap" ref="wrap" @scroll="handleScroll">
    <!-- 为了显示滚动条 -->
    <div ref="scrollHeight"></div>
    <!-- 展示的内容 -->
    <div class="visible-wrap" :style="{ transform: `translateY(${offset}px)` }">
      <div v-for="item in visibleData" :key="item.id" :id="item.id">
        <slot :item="item"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options, prop } from "vue-class-component";

class Props {
  public size = prop<number>({ default: 0 });
  public keeps = prop<number>({ default: 0 });
  public arrayData = prop<Array<any>>({ default: [] });
}

@Options({
  components: {},
  computed: {
    visibleData() {
      return this.arrayData.slice(this.start, this.end);
    }
  }
})
export default class extends Vue.with(Props) {
  public start: number = 0;
  public end: number = this.keeps;
  public offset: number = 0;

  mounted() {
    (this.$refs.scrollHeight as HTMLDivElement).style.height =
      this.arrayData.length * this.size + "px";
    (this.$refs.wrap as HTMLDivElement).style.height =
      this.keeps * this.size + "px";
  }

  public handleScroll() {
    const scrollTop = (this.$refs.wrap as HTMLDivElement).scrollTop;
    // 计算从下标为几的一项开始渲染，减 1 是因为渲染的数据是从第 0 项开始的
    this.start =
      Math.ceil(scrollTop / this.size) - 1 >= 0
        ? Math.ceil(scrollTop / this.size) - 1
        : 0;
    this.end = this.start + this.keeps;
    // 当列表向上（下）滚动时，为了让渲染的列表一直处于可视范围内，就要把列表向下（上）挪
    this.offset = this.start * this.size;
  }
}
</script>

<style scoped lang="less">
.wrap {
  position: relative;
  overflow-y: scroll;
}

.visible-wrap {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}
</style>
