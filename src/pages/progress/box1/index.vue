<template lang="pug">
.cbox
  .wdjd 
  .lcon
    .jlbox(v-for='(li, index) in boxConf'  :key="index" :style="`order: ${index==2 ? 4 : index } ;`")
      .jd1(v-if="index==0&&li.status==1 ")
      .jd2(v-else-if="index==1&&li.status==1 ")
      .jd3(v-else-if="index==2&&li.status==1 ")
      .jd4(v-else-if="index==3&&li.status==1 ")
      .jd5(v-else-if="index==4&&li.status==1 ")
      img.lhpic(v-if="li.status==1"  src="../img/1-lh4.png ")
      img.lhpic(v-else-if="index<3 && li.status==0 "  src="../img/1-lh1.png" :style="li.status != 0 ? '' : 'opacity: 0.5;'")
      img.lhpic(v-else-if="index==3&&li.status==0 "  src="../img/1-lh2.png" :style="li.status!=0 ? '' : 'opacity: 0.5;'")
      img.lhpic(v-else-if="index==4&&li.status==0 "  src="../img/1-lh3.png" :style="li.status!=0 ? '' : 'opacity: 0.5;'")
      img.icon( src="../img/1-jdy.png")
      .name {{ li.num }}
  </template>

<script lang="ts" setup>
import { ref } from "vue";
const boxConf = ref([
  {
    grade: 1,
    num: 80000,
    status: 1
  },
  {
    grade: 2,
    num: 150000,
    status: 1
  },
  {
    grade: 3,
    num: 300000,
    status: 1
  },
  {
    grade: 4,
    num: 500000,
    status: 0
  },
  {
    grade: 5,
    num: 1000000,
    status: 0
  }
]);
</script>

<style lang="scss" scoped>
.cbox {
  width: 6.25rem;
  min-height: 3.5rem;
  border-radius: 0.2rem;
  margin: 0 auto;
  padding: 0.2rem 0 0 0;
  box-sizing: border-box;
  position: relative;
  .wdjd {
    position: absolute;
    left: 0.25rem;
    top: 2.3rem;
    width: 5.87rem;
    height: 4.75rem;
    background: url("../img/1-jdbg1.png") top center/cover;
  }
  .lcon {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    overflow-x: auto;
    padding: 0.5rem;
  }
}

.jlbox {
  position: relative;
  width: 1.65rem;
  height: auto;
  border-radius: 0.18rem;
  margin-right: 0.9rem;
  &:nth-child(2) {
    margin-right: 0rem;
  }
  &:nth-child(3) {
    margin-right: 0rem;
  }
  &:nth-child(5) {
    margin-right: 0rem;
  }
  .lhpic {
    width: auto;
    height: 1.5rem;
    object-fit: contain;
    box-sizing: border-box;
    margin: 0.1rem auto -0.1rem;
  }
  .jd1 {
    position: absolute;
    left: -0.37rem;
    top: 1.67rem;
    border-radius: 0.1rem 0 0 0.1rem;
    width: 1rem;
    height: 0.19rem;
    background: url("../img/1-jdbg2.png") top center/cover;
  }
  .jd2 {
    position: absolute;
    width: 3rem;
    left: -2.3rem;
    top: 1.67rem;
    border-radius: 0.1rem 0 0 0.1rem;
    height: 0.19rem;
    background: url("../img/1-jdbg2.png") top center/cover;
  }
  .jd3 {
    position: absolute;
    width: 1.66rem;
    left: 0.55rem;
    top: -0.52rem;
    border-radius: 0.1rem 0 0 0.1rem;
    height: 2.37rem;
    background: url("../img/1-jdbg3.png") top center/cover;
  }
  .jd4 {
    position: absolute;
    width: 3rem;
    left: 0.7rem;
    top: 1.67rem;
    border-radius: 0.1rem 0 0 0.1rem;
    height: 0.19rem;
    background: url("../img/1-jdbg2.png") top center/cover;
  }
  .jd5 {
    position: absolute;
    width: 2.6rem;
    left: -1.98rem;
    top: -0.52rem;
    height: 2.43rem;
    background: url("../img/1-jdbg4.png") left/contain no-repeat,
      url("../img/1-jdbg2.png") 1rem 2.25rem/2rem 0.19rem no-repeat;
  }
  .icon {
    position: relative;
    z-index: 3;
    width: auto;
    height: 0.41rem;
    object-fit: contain;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    transform: translate(-0.1rem, 0);
  }

  .name {
    height: 0.3rem;
    line-height: 0.45rem;
    padding-right: 0.25rem;
    margin-top: -0.1rem;
    text-align: center;
    font-size: 0.24rem;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: rgba(105, 32, 201, 1);
  }
}
</style>
