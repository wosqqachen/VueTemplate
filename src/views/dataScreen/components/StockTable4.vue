<template>
  <div class="slist box9">
    <div class="title">{{ title }}</div>
    <div class="con" v-if="type == 2">
      <div class="item" v-for="(item, index) in ['检测数量', '合格数', '不合格数']" :key="'kc' + index">
        <img :src="require('../images/icon' + (index + 8) + '.png')" alt="" class="icon" />
        <div class="name">
          <span>{{ tableHead[index] }}</span
          >{{ item }}
        </div>
      </div>
    </div>
    <div class="con con2" v-else-if="type == 3">
      <div class="item" v-for="(item, index) in ['电压', '电流', '电阻', 'OCV值']" :key="'kc' + index">
        <div class="name">
          <span>{{ tableHead[index] }}</span
          >{{ item }}
        </div>
      </div>
    </div>
    <div v-else>
      <img :src="tableHead[0]" alt="" class="vimg" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: "物料台数据"
    },
    type: {
      require: true,
      default: "1"
    },
    tableHead: {
      require: false,
      default: () => {
        return ["排行", "名称", "数量"];
      }
    },
    tableData: {
      require: false,
      default: () => {
        return [
          {
            date: "2016-05-02",
            name: "王小虎",
            num: 99
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            num: 99
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            num: 99
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            num: 99
          }
        ];
      }
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.slist {
  width: 508px;
  height: auto;
  position: relative;
  box-sizing: border-box;
  .con {
    height: 210px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    box-sizing: border-box;
    .item {
      width: 135px;
      height: 135px;
      margin: 7px auto;
      flex-flow: column nowrap;
      align-items: center;
      .icon {
        width: 32px;
        height: 32px;
        margin: 0 auto;
      }
      .name {
        width: 130px;
        height: 90px;
        padding-top: 10px;
        font-size: 18px;
        color: rgba(222, 241, 255, 1);
        background-image: url("../images/gbg.png");
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: contain;
        span {
          font-size: 30px;
          color: rgba(255, 255, 255, 1);
          display: block;
        }
      }
      .num {
        font-size: 16px;
        color: rgba(0, 228, 255, 1);
      }
    }
  }
  .con2 {
    height: auto;
    flex-flow: row wrap;
    .item {
      width: 175px;
      height: 110px;
      margin: 0px auto 15px;
      .name {
        width: 162px;
        height: 90px;
        padding-top: 10px;
        padding-bottom: 40px;
        font-size: 18px;
        color: rgba(222, 241, 255, 1);
        background-image: url("../images/dbg.png");
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: contain;
        span {
          font-size: 30px;
          color: rgba(255, 255, 255, 1);
          display: block;
        }
      }
    }
  }
  .vimg {
    width: 460px;
    height: 200px;
  }
  .htitle {
    width: 483px;
    height: 40px;
    line-height: 40px;
  }
}
</style>
