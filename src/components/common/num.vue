<template>
  <div class="rewards-num">
    <img class="img1" src="../../assets/num/numx.png" alt="" />
    <img
      class="img2"
      v-if="num > 0"
      :src="require('../../assets/num/num' + newNum[0] + '.png')"
      alt=""
      key="n1"
    />
    <img
      class="img2"
      v-if="num > 9"
      :src="require('../../assets/num/num' + newNum[1] + '.png')"
      alt=""
      key="n2"
    />
    <img
      class="img2"
      v-if="num > 99"
      :src="require('../../assets/num/num' + newNum[2] + '.png')"
      alt=""
      key="n3"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Options, prop } from "vue-class-component";
class Props {
  public num = prop<number>({ default: 1 });
}
@Options({
  components: {},
  computed: {
    newNum() {
      return this.num.toString();
    }
  }
})
export default class extends Vue.with(Props) {
};
</script>

<style lang="scss" scoped>
.rewards-num {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .img1 {
    width: 33%;
    height: auto;
  }
  .img2 {
    width: 33%;
    height: auto;
  }
}
</style>
