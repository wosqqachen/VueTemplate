<template>
  <div class="swiper">
    <div
      class="swiper-container"
      @touchstart="start"
      @touchmove.prevent="move"
      @touchend="end"
    >
      <div class="wrapper" style="transform: translate3d(0,0,0)" ref="wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="pagination" v-if="needPage">
      <div
        :style="{
          background: index == currentIndex ? paginationCurrentBg : paginationBg
        }"
        @click="goCurrent(item - 1)"
        v-for="(item, index) in getLength"
        :key="item + 'pagination'"
        :class="{ current: index == currentIndex }"
      ></div>
    </div>
    <div v-else>
      <slot name="pagination"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    autoPlay: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 300
    },
    loopSpeed: {
      type: Number,
      default: 2000
    },
    needPage: {
      type: Boolean,
      default: true
    },
    paginationCurrentBg: {
      type: String,
      default: "#409EFF"
    },
    paginationBg: {
      type: String,
      default: "rgba(100,99,99,0.5)"
    },
    options: {
      type: Object
    }
  },
  data() {
    return {
      clientXStart: 0,
      moveX: 0,
      lastMoveX: 0,
      currentTransormX: 0,
      id: 0,
      startTime: 0,
      swiper: null,
      currentIndex: 0,
      getLength: 0,
      loopTimer: null,
      toLeft: false
    };
  },
  created() {
    this.swiperClass();
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.getLength = this.swiper.getLength();
      if (this.autoPlay) {
        this.runLoop();
      }
      console.log(12313123);
    },
    /**
     * 循环运动
     */
    runLoop() {
      this.loopTimer = setInterval(() => {
        if (this.toLeft) {
          //向左运动
          this.currentIndex--;
          if (this.currentIndex <= 0) {
            this.toLeft = !this.toLeft;
          }
        } else {
          //向右运动
          this.currentIndex++;
          if (this.currentIndex >= this.swiper.getLength() - 1) {
            this.toLeft = !this.toLeft;
          }
        }
        this.swiper.slideTo(this.currentIndex, this.speed);
      }, this.loopSpeed);
    },
    /**
     * 点击分页器跳转
     * @param index 当前点击的下标
     */
    goCurrent(index) {
      this.currentIndex = index;
      //如果点击第一个，变换运动方向
      if (index >= this.getLength - 1) {
        this.toLeft = true;
      }
      //如果点击最后一个，变换运动方向
      if (index <= 0) {
        this.toLeft = false;
      }
      //点击后清除定时器
      clearInterval(this.loopTimer);

      //点击完成后重新开始运动
      this.swiper.slideTo(index, this.speed, () => {
        this.init();
      });
    },

    /**
     * 记录坐标起始位置
     * @param e
     */
    start(e) {
      const clientX = e.touches[0].clientX;
      this.clientXStart = clientX;
      const transform = e.target.parentNode.style.transform;
      this.lastMoveX = transform;
      e.target.parentNode.style.transition = "transform 0s";
      const time = new Date().getTime();
      this.startTime = time;
    },
    /**
     * 移动记录坐标位置
     * @param e
     */
    move(e) {
      const clientX = e.touches[0].clientX;
      const moveX = this.clientXStart - clientX;
      this.moveX = moveX;
      const reg = /-?[0-9]+/g;
      let currentTransormX = 0;
      if (this.lastMoveX.match(reg)[1]) {
        currentTransormX = Number(this.lastMoveX.match(reg)[1]);
      }
      this.currentTransormX = currentTransormX;
      const t = currentTransormX - moveX;
      e.target.parentNode.style.transform = `translate3d(${t}px, 0, 0)`;
    },
    /**
     * 移动结束，进行的操作
     * @param e
     */
    end(e) {
      if (this.options && Reflect.has(this.options, "on")) {
        // 点击事件
        this.clickEvent(e);
      }
      const endTime = new Date().getTime();
      const during = endTime - this.startTime; // 持续时间
      const idLen = e.target.parentNode.children.length;
      // 判断是否为 第一个向右划 或者 最后一个向左划
      if (
        (this.id === 0 && this.moveX < 0) ||
        (this.id === idLen - 1 && this.moveX >= 0)
      ) {
        e.target.parentNode.style.transform = `translate3d(${-screen.width *
          this.id}px, 0, 0)`;
        return;
      }
      // 如果速度大于 0.5 则切换轮播
      if (Math.abs(this.moveX) / during > 0.5) {
        if (this.moveX > 0) {
          // 向左划
          this.currentIndex++;
          e.target.parentNode.style.transform = `translate3d(${-screen.width *
            ++this.id}px, 0, 0)`;
        } else {
          // 向右划
          this.currentIndex--;
          e.target.parentNode.style.transform = `translate3d(${-screen.width *
            --this.id}px, 0, 0)`;
        }
        this.goCurrent(this.currentIndex);
        e.target.parentNode.style.transition = "transform .3s";
        this.moveX = 0;
        return;
      }
      // 如果滑到屏幕一半的距离则切换轮播
      if (Math.abs(this.moveX) >= screen.width / 2) {
        if (this.moveX > 0) {
          // 向左划
          this.currentIndex++;

          e.target.parentNode.style.transform = `translate3d(${-screen.width *
            ++this.id}px, 0, 0)`;
        } else {
          // 向右划
          this.currentIndex--;
          e.target.parentNode.style.transform = `translate3d(${-screen.width *
            --this.id}px, 0, 0)`;
        }
        this.goCurrent(this.currentIndex);
      } else {
        e.target.parentNode.style.transform = `translate3d(${-screen.width *
          this.id}px, 0, 0)`;
      }
      this.moveX = 0;
      e.target.parentNode.style.transition = "transform .3s";
    },
    pxToRem(px) {
      return px / (0.1333333 * screen.availWidth);
    },
    checkType(type) {
      return Object.prototype.toString.call(type);
    },
    /**
     * 点击选项卡触发的事件
     * @param e
     */
    clickEvent(e) {
      // 触发 click 事件
      if (this.moveX === 0 && this.options.on.click) {
        this.options.on["click"](e, this.swiper);
        return;
      }
    },
    //建立swipper类
    swiperClass() {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const _this = this;
      class Swiper {
        getId() {
          return _this.id;
        }
        getLength() {
          _this.getLength = _this.$refs.wrapper.children.length;
          return _this.$refs.wrapper.children.length;
        }
        slideTo(index, speed = 100, callback) {
          _this.id = index;
          _this.$refs.wrapper.style.transform = `translate3d(${-screen.width *
            _this.id}px, 0, 0)`;
          _this.$refs.wrapper.style.transition = `transform ${speed / 1000}s`;
          if (callback && _this.checkType(callback) === "[object Function]") {
            callback.call(this, this);
          }
        }
      }
      this.swiper = new Swiper();
    }
  },
  watch: {
    id: function(val) {
      return (this.swiper.getId = function() {
        return val;
      });
    }
  }
};
</script>

<style lang="less">
.swiper {
  width: 100%;
  position: relative;
  .swiper-container {
    /*overflow: hidden;*/
    width: 100%;
    overflow: hidden;
    position: relative;
    width: 100vw;
    .wrapper {
      display: flex;
      text-align: center;
    }
  }
  .pagination {
    position: absolute;
    bottom: 0.1rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    > div {
      width: 0.2rem;
      height: 0.2rem;
      background: #000;
      border-radius: 50%;
      margin-right: 0.1rem;
    }
    .current {
      background: red;
    }
  }
}
</style>
