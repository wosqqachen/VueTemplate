<template>
  <div class="tab">
    <span
      v-for="(item, index) in config"
      :key="index"
      @click="selectTabEvent(index)"
      :class="{ ed: tabIndex == index }"
      >{{ item.name }}</span
    >
  </div>

  <swiper
    @swiper="onSwiper"
    @transitionStart="onTransitionStart"
    :loop="false"
    :resistanceRatio="0"
    :edgeSwipeDetection="true"
    :edgeSwipeThreshold="20"
    class="myswiper"
  >
    <swiper-slide v-for="(item, index) in config" :key="index">
      <div class="max">
        <slot :name="item.type"></slot>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { Vue, Options, prop } from "vue-class-component";
import SwiperOption from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.less";
import { getParam2 } from "@/utils/util";

class Props {
  public config = prop<Array<any>>({
    default: [{ name: "name", type: "type" }]
  });
}
@Options({
  emits: ["typeChange"],
  components: { Swiper, SwiperSlide }
})
export default class extends Vue.with(Props) {
  public tabIndex = 0;

  public mounted() {
    //获取参数中默认选中tab
    let selected = getParam2().selected || 0;
    const tag = getParam2().tag || "";
    const d = ["礼物", "贡献", "魅力"]
      .findIndex(item => {
        return item === tag.slice(0, 2);
      });
    if (d>-1&&tag.includes('周星')) {
      selected=3
    }else if (d>-1) {
      selected=d
    }
    console.log('礼物2', d,tag);
    (this.swiper as SwiperOption)
      .slideTo(selected, 0, false);
    this.selectTab(selected);
  }

  public selectTabEvent(_i: number) {
    (this.swiper as SwiperOption).slideTo(_i, 300, false);

    this.selectTab(_i);
  }

  public selectTab(_i: number) {
    if (this.tabIndex == _i) return;

    this.tabIndex = _i;
    this.$emit("typeChange", this.config[this.tabIndex].type);
  }

  swiper?: SwiperOption;
  onSwiper(swiper: SwiperOption) {
    this.swiper = swiper;
  }

  onTransitionStart(swiper: SwiperOption) {
    console.log("swiper.activeIndex;", swiper.activeIndex);
    // this.tabIndex = swiper.activeIndex;
    this.selectTab(swiper.activeIndex);
  }
}
</script>

<style scoped lang="less">
.tab {
  margin-left: 0.15rem;
  width: 7.35rem;
  // width: 100%;
  // padding-left: 0.1rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background: #fff;
  color: #969ba3;
  white-space: nowrap;
  & > span {
    display: block;
    padding: 0.17rem 0;
    font-size: 0.32rem;
    text-align: center;
    font-weight: 400;
  }

  & > .ed {
    color: #222;
    font-weight: bold;
    position: relative;

    &::after {
      content: " ";
      position: absolute;
      width: 0.3rem;
      height: 0.08rem;
      background: #222;
      border-radius: 4px;
      bottom: 0.06rem;
      margin: auto;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}

.myswiper {
  width: 7.5rem;
  .leftnomove {
    position: absolute;
    width: 40px;
    height: 80vh;
    left: -4px;
    background-color: transparent;
    z-index: 10;
  }
}

.max {
  width: 100%;
  height: 100%;
}
</style>
