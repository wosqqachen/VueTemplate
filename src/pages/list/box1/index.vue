<template lang="pug">
.tables
  .lhead
    .th(v-for='(item, index) in ["兑换礼物","兑换时间"]', :key='index') {{ item }}
  .lbody( v-if="resData.list.length>0" @scroll='loadMore')
    .tr(v-for='(item, index) in resData.list', :key='index')
      .td {{ item.title }}
      .td {{ item.time?.substr(5) }}
  .nodt(v-else) 
    img.nbg(src="../img/1-nodata.png")
    .t 暂无记录哦~
  </template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
//兑换记录
const resData = reactive({
  list: [] as any,
  param: { page: 1, loading: false }
});
const load = async () => {
  // const res = await requestExchangeHistory({ page: resData.param.page });
  // if (res.code != 0) throw res;
  resData.list = [
    ...resData.list,
    ...[
      {
        time: "2023-10-26 10:00:00",
        title: "恭喜获得 火箭炮 * 1" //奖励名称
      },
      {
        time: "2023-10-26 10:00:00",
        title: "恭喜获得 火箭炮 * 1" //奖励名称
      },
      {
        time: "2023-10-26 10:00:00",
        title: "恭喜获得 火箭炮 * 1" //奖励名称
      },
      {
        time: "2023-10-26 10:00:00",
        title: "恭喜获得 火箭炮 * 1" //奖励名称
      },
      {
        time: "2023-10-26 10:00:00",
        title: "恭喜获得 火箭炮 * 1" //奖励名称
      },
      {
        time: "2023-10-26 10:00:00",
        title: "恭喜获得 火箭炮 * 1" //奖励名称
      }
    ]
  ];
  resData.param.page++;
};
const loadMore = (event: any) => {
  const el = event.target;
  if (el.scrollTop + el.clientHeight >= el.scrollHeight - 20) {
    if (!resData.param.loading) {
      resData.param.loading = true;
      load();
      setTimeout(() => {
        resData.param.loading = false;
      }, 1500);
    }
  }
};

onMounted(() => {
  resData.list = [];
  resData.param.loading = false;
  resData.param.page = 1;
  load();
});
</script>

<style scoped lang="scss">
.tables {
  width: 5.45rem;
  border-right: none;
  border-bottom: none;
  border-collapse: collapse;
  margin: 0 auto;
  background: rgba(0, 0, 0, 1);
  .lhead {
    height: 0.56rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    background: rgba(125, 61, 19, 0.5);
    .th {
      font-size: 0.26rem;
      font-weight: 400;
      color: rgba(251, 252, 170, 0.5);
    }
  }
  .lbody {
    height: 2rem;
    overflow-y: auto;
  }
  .td,
  .th {
    flex: 1;
    background: rgba(255, 255, 255, 0);
    border-left: none;
    border-top: none;
    text-align: center;
    color: #893a18;
    height: 0.56rem;
    line-height: 0.56rem;
  }
  .tr {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    &:nth-child(2n) {
      background: rgba(125, 61, 19, 0.5);
    }
  }
  .td {
    width: auto;
    height: 0.56rem;
    text-align: center;
    font-size: 0.26rem;
    color: rgba(251, 252, 170, 1);
    font-weight: 400;
  }
  .nodt {
    padding: 20% 0;
    text-align: center;
    .nbg {
      width: 1.27rem;
      height: 1.08rem;
      margin: 0 auto;
    }
    .t {
      font-size: 0.3rem;
      text-align: center;
      font-family: Noto Sans S Chinese;
      font-weight: 400;
      color: #a8915c;
      line-height: 0.8rem;
      opacity: 0.8;
    }
  }
}
</style>
