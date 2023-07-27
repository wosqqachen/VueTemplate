<template>
  <svg :style="iconStyle">
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps<{
  size?: number | [number, number];
  color?: string;
  name: string;
}>();
const symbolId = computed(() => `#icon-${props.name}`);
const iconStyle = computed(() => {
  let styles: { color?: string; width?: string; height?: string } = {};
  if (props.color) {
    styles.color = props.color;
  }
  if (props.size) {
    if (!Array.isArray(props.size)) {
      styles.width = `${props.size}px`;
      styles.height = `${props.size}px`;
    }
    let sizes = props.size as Array<number>;
    if (sizes[0]) {
      styles.width = `${sizes[0]}px`;
      styles.height = `${sizes[0]}px`;
    }
    if (sizes[1]) {
      styles.height = `${sizes[1]}px`;
    }
  }
  return styles;
});
</script>
