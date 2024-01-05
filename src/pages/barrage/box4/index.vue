<template lang="pug">
.list 
  .q.tyd( v-for='(item, di) in list' :key="'vk'+di" 
    :style="`margin-left: ${[di*0.1,di>list/2 ? di*0.05 : di*-0.05 ,di*-0.1][di%3]}rem;animation-duration:${Math.floor(Math.random()*10)+5}s;animation-delay:${di > 3 ? di*3 : di}s;`") 
    img.pic(:src='"./img/empty.png"' @click="searchInfo.getSearchData(item.accid)")
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const list = ref(48);
</script>

<style scoped lang="scss">
.list {
  width: 7rem;
  height: 6rem;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border: 0.02rem solid RGBA(244, 169, 219, 1);
  .q {
    position: absolute;
    width: 1.8rem;
    height: 1.8rem;
    top: 110%;
    .pic {
      position: absolute;
      left: 50%;
      top: 0;
      width: 0.75rem;
      height: 0.75rem;
      margin: 0 auto;
      border: 0.02rem solid #f4a9db;
      border-radius: 50%;
      transform: translate(-50%, 0.3rem);
    }
    &:nth-child(n) {
      left: 7%;
      background: url("../img/4-qq1.png") top center/1.5rem auto no-repeat;
    }
    &:nth-child(2n) {
      left: 35%;
      background: url("../img/4-qq2.png") top center/1.5rem auto no-repeat;
      .pic {
        transform: translate(-50%, 0.4rem);
      }
    }
    &:nth-child(3n) {
      left: 75%;
      background: url("../img/4-qq3.png") top center/1.5rem auto no-repeat;
      .pic {
        transform: translate(-50%, 0.45rem);
      }
    }
  }

  .tyd {
    animation: yddmAn 20s infinite linear;
    @keyframes yddmAn {
      0% {
        transform: translate3d(0, 0, 0) rotate(0deg);
      }
      100% {
        transform: translate3d(0, -10rem, 0) rotate(0deg);
      }
    }
  }
}
</style>
