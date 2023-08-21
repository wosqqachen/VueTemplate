<template>
  <div :class="{ Page: true }">
    <div
      class="header-float"
      v-if="needHeader && showHeaderFloat"
      :needStatusBar="needStatusBar"
    >
      <Header @back="back"></Header>
    </div>
    <Header
      v-if="needHeader && !showHeaderFloat"
      @back="back"
      :needStatusBar="needStatusBar"
      :headerBg="headerBg"
      :hideBack="hideBack"
      :backIconType="backIconType"
    >
      <template v-slot:right>
        <slot name="right"></slot>
      </template>
    </Header>
    <div :class="{ content: true, 'need-padding': needPadding }">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

interface Props {
  needHeader: unknown;
  showHeaderFloat: boolean;
  needPadding: boolean;
  needStatusBar: boolean;
  headerBg: string;
  hideBack: boolean;
  backIconType: number;
}
export default defineComponent({
  name: "Page",
  props: {
    showHeaderFloat: {
      type: Boolean,
      default: false
    },
    needPadding: {
      type: Boolean,
      default: true
    },
    needHeader: {
      type: Boolean,
      default: true
    },
    needStatusBar: {
      type: Boolean,
      default: true
    },
    headerBg: {
      type: String,
      default: "#fff"
    },
    hideBack: {
      type: Boolean,
      default: false
    },
    backIconType: {
      type: Number,
      default: 0
    }
  },
  setup(props: Props, { emit }) {
    const back = () => {
      emit("back");
    };

    console.log("props:", props.needHeader);
    onMounted(() => {
      console.log("Page");
    });
    return { back };
  }
});
</script>

<style scoped lang="less">
.need-padding {
  padding: 0 0.3rem;
}
.Page {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  > .header-float {
    position: absolute;
    top: 0;
    left: 0;
  }
  > .content {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
}
</style>
