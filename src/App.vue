<template>
  <van-config-provider :theme="theme">
    <router-view v-slot="{ Component }">
      <transition :name="animation">
        <div :key="$route.path" class="child-view">
          <component :is="Component"></component>
        </div>
      </transition>
    </router-view>
  </van-config-provider>
</template>
<script setup lang="ts">
import { storageDeleteKey, storageGet } from '@fe-hl/shared';
import { ref, watch, computed } from 'vue';
import router from './router';
import { useStore } from './store';
import { ConfigProviderTheme } from 'vant';
let store = useStore();
let animation = ref('slide-left');

const theme = computed(() => {
  return store.state.theme.mode as ConfigProviderTheme;
});

watch(
  () => router.currentRoute.value.path,
  () => {
    if (storageGet('BACK') === 'BACK') {
      animation.value = 'slide-right';
    } else {
      animation.value = 'slide-left';
    }
    Promise.resolve().then(() => storageDeleteKey('BACK'));
  },
);
</script>
<style scoped>
.child-view {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.slide-left-enter-from,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
.slide-left-leave-active,
.slide-right-enter-from {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}
</style>
