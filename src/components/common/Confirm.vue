<template>
  <Pop v-model:open="openCopy">
    <div class="confirm">
      <div class="default">
        <span class="title">{{ title }}</span>
        <div class="content">
          <slot></slot>
        </div>
      </div>

      <div class="bottom" v-if="needBottom">
        <div class="cancel" @click="cancel">
          {{ cancelText }}
        </div>
        <div class="success" @click="ok">
          {{ okText }}
        </div>
      </div>
      <div class="bottom" v-else>
        <slot name="bottom"></slot>
      </div>
    </div>
  </Pop>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import Pop from "./Pop.vue";
// import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "Confirm",
  props: {
    needBottom: {
      type: Boolean,
      default: true
    },
    cancelText: {
      type: String,
      default: ""
    },
    okText: {
      type: String,
      default: ""
    },
    okAndClose: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: "提示"
    },
    open: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Pop
  },
  setup(props, { emit }) {
    // const { t, locale } = useI18n();

    const openCopy = ref(props.open);
    watch(
      () => props.open,
      val => {
        openCopy.value = val;
      }
    );
    const okAndClose = ref(props.okAndClose);
    const cancel = () => {
      console.log("1231231");
      emit("update:open");
      if (okAndClose.value) {
        openCopy.value = false;
      }
      emit("cancel");
    };
    const ok = () => {
      console.log("1231231");
      if (okAndClose.value) {
        openCopy.value = false;
        emit("update:open");
      }
      emit("ok");
    };
    return { openCopy, cancel, ok };
  }
});
</script>

<style scoped lang="less">
.confirm {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .default {
    width: 5.4rem;
    background: #fff;
    border-radius: 0.24rem 0.24rem 0 0;
    padding: 0.4rem 0.2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title {
      margin-bottom: 0.4rem;
      font-size: 0.34rem;
      font-weight: 500;
      color: #222222;
      line-height: 0.34rem;
    }
    .content {
      font-size: 0.3rem;
      font-weight: 400;
      color: #222222;
      line-height: 0.3rem;
      margin-bottom: 0.4rem;
    }
  }
  .bottom {
    width: 100%;
    display: flex;
    background: #fff;
    border-radius: 0 0 0.24rem 0.24rem;
    border-top: 1px solid #e8e8e8;

    :first-child {
      border-right: 1px solid #e8e8e8;
    }
    > div {
      font-size: 0.34rem;
      font-weight: 500;
      line-height: 0.48rem;
      height: 0.88rem;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.cancel {
  color: #999999;
}
.success {
  color: #16a2fc;
}
</style>
