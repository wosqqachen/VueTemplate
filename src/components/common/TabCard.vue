<template>
  <div class="tab">
    <div class="tab-card">
      <span
        :class="{ selected: item.isCurrent }"
        v-for="(item, index) in items"
        @click="changeItem(item, index)"
        :key="index + 'tab'"
      >
        {{ item.title }}
      </span>
    </div>
    <div class="tab-content">
      <slot
        v-for="(item, index) in items"
        :key="index + 'tabCenter'"
        :name="'tab' + index"
      ></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, ref } from "vue";
interface Item {
  isCurrent: boolean;
  title: "";
}
export default defineComponent({
  name: "TabCard",
  props: {
    list: {
      type: Object,
      required: true
    }
  },
  setup(props, { emit }) {
    const currentIndex = ref(0);
    //假数据
    const items = reactive(props.list);

    onMounted(() => {
      currentIndex.value = 0;
      items[0].isCurrent = true;
    });

    /**
     * 点击tab切换
     * @param item
     * @param index
     */
    const changeItem = (item: Item, index: number) => {
      currentIndex.value = index;
      if (item && item.isCurrent) return;
      items.forEach((itemFor: any, indexFor: number) => {
        if (indexFor === index) {
          itemFor.isCurrent = true;
        } else {
          itemFor.isCurrent = false;
        }
      });
      emit("change", { item, index });
    };
    return { items, changeItem, currentIndex };
  }
});
</script>

<style scoped lang="less">
.tab {
  flex: 1;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  > .tab-card {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    position: relative;
    margin-bottom: 0.42rem;
    margin-top: 0.31rem;
  }
  .tab-content {
    flex: 1;
    overflow-y: auto;
  }
}

.selected {
  font-size: 0.32rem;
  font-weight: 500;
  color: #222222;
  position: relative;

  &:after {
    width: 0.4rem;
    height: 0.06rem;
    content: "";
    background: #28daf2;
    border-radius: 0.03rem;
    position: absolute;
    bottom: -0.13rem;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
