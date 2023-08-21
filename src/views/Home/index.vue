<template>
  <div class="page">
    <img class="logo" src="@/assets/img/logos.png" />
    <div class="con">
      <div class="left">
        <div class="txt1">{{ $t('home.txt1') }}</div>
        <div class="txt2">{{ $t('home.txt2') }}</div>
        <div class="txt3">
          {{ $t('home.txt3') }}
        </div>
      </div>
      <div class="right">
        <img class="img" src="@/assets/img/img1.png" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.page {
  position: relative;
  box-sizing: border-box;
  padding: 80px 0;
  .logo {
    position: absolute;
    left: 350px;
    top: 10px;
    width: 60px;
    height: 60px;
  }

  .con {
    width: 750px;
    height: auto;
    box-sizing: border-box;
    background: #01ddcb;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 15px 170px 15px 250px;
    .left {
      width: 600px;
      font-family: Alimama ShuHeiTi;
      color: #ffffff;
      margin-bottom: 150px;
      .txt1 {
        height: 100px;
        font-size: 52px;
        font-weight: bold;
        line-height: 100px;
      }
      .txt2 {
        height: 80px;
        font-size: 36px;
        font-weight: bold;
        line-height: 50px;
      }
      .txt3 {
        font-size: 25px;
        font-weight: normal;
        color: #ffffff;
        line-height: 40px;
      }
    }
    .right {
      width: 700px;
      margin-bottom: 150px;
      display: flex;
      background-image: url('@/assets/img/bg1.png');
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      .img {
        width: 307px;
        height: 634px;
        margin: 0 auto;
      }
    }
  }
}
</style>
