<template>
  <div
    :class="[
      'swiper-slider',
      activeId == slideId ? 'swiper-slider-active' : ''
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SwiperSlider",
  props: {
    slideId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      activeId: 1
    };
  },
  methods: {}
};
</script>

<style lang="less">
.swiper-slider {
  width: 100%;
  flex-shrink: 0;
  overflow: hidden;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-slider-active {
  display: flex;
}
</style>
