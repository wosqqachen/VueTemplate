<template>
  <div class="smr">
    <div :class="onoff == 0 ? 'radio' : 'radio ed'" @click="setAnonymous"></div>
    <div class="txt">神秘人: {{ onoff == 0 ? "关" : "开" }}</div>
  </div>
  <div class="smr2" @click="setAnonymous">
    神秘人<br />
    <div :class="{ active: onoff == 0 }" class="radio">
      <img v-if="onoff == 0" src="../img/r2.png" alt="" class="icon" />
      <img v-else src="../img/r1.png" alt="" class="icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { millionDeal } from "@/utils/util";
const onoff = ref(0);
const setAnonymous = () => {
  const nf = onoff.value == 0 ? 1 : 0;
  onoff.value = nf;
  // GET({ url: api.set_anonymous, params: { type: tabindex.value, onoff: nf } }).then((res) => {
  //   console.log(res);
  //   getRankList();
  // });
};
</script>

<style scoped lang="scss">
.smr {
  position: absolute;
  right: 0.35rem;
  top: 0.39rem;
  width: 1rem;
  color: #c88173;
  font-size: 0.24rem;
  align-items: center;
  .radio {
    width: 0.6rem;
    height: 0.32rem;
    background: #3e4777;
    border-radius: 0.16rem;
    margin: 0 auto;
    position: relative;
    &::after {
      content: "";
      display: inline-block;
      vertical-align: sub;
      position: absolute;
      top: 0.04rem;
      left: 0.05rem;
      width: 0.24rem;
      height: 0.24rem;
      background: #848fc1;
      border-radius: 50%;
    }
  }
  .ed {
    position: relative;
    background: #acb6eb;
    &::after {
      content: "";
      left: 0.3rem;
      background: #292b33;
    }
  }
  .txt {
    line-height: 0.4rem;
    font-size: 0.18rem;
    color: #596499;
    text-align: center;
  }
}

.smr2 {
  position: absolute;
  right: 1.5rem;
  top: 0.39rem;
  color: #d9d7ff;
  font-size: 0.24rem;
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  .radio {
    width: 0.69rem;
    height: 0.36rem;
    margin-left: 0.06rem;
    display: inline-block;
    position: relative;
  }
  img {
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
