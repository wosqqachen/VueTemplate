import { ref, reactive, onMounted } from "vue";
import { toast } from "@/request/client-request";
import request from '@/request/zysrf-app'
//榜单列表
export const useRank = (param: any) => {
  const rankList = ref([] as any)
  const rankTop3 = ref([] as any)
  const self = ref({} as any)
  const p = reactive({
    page: 1,
    type:'1',
    loading: false,
  })
  const loadRank = async () => {
    p.loading = true;
    const res = await new Promise((resolve, reject) => {
      request.commonRequest(param.url, { page: p.page,type: p.type,size: 10 }, resolve, reject)
    }) as any;
    p.loading = false;
    if (res?.code == 0) {
      const list = res.data.rank_list;
      if (p.page == 1) {
        self.value = res.data.my_rank;
        const lnum = res.data.rank_list.length;
        if (lnum < 10) {
          const nk = 10 - lnum;
          for (let i = 0; i < nk; i++) {
            list.push({
              accid: "",
              rank: i + lnum + 1,
              points: 0,
              roomInfo: {
              },
              sender: {
              },
              userInfo: {
                headImg: "./images/dfbg2.png",
                nickName: "虚位以待",
                sex: 1
              },
              value: "0"
            });
          }
        }
        rankTop3.value = list.splice(0, 3);
      }
      rankList.value = [...rankList.value, ...list];
      p.page++;
    } else {
      toast(res?.message || "网络开小差啦");
    } 
  };
  const loadMore = (event: any) => {//下拉加载
    const el = event.target;
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 20) {
      if (!p.loading) {
        p.loading = true;
        loadRank();
        setTimeout(() => {
          p.loading = false;
        }, 1500);
      }
    }
  };
  const clearData = () => {//初始化数据
    rankList.value = [];
    rankTop3.value = [];
    self.value = {};
    p.loading = false;
    p.page = 1;
    p.type = '1';
  };
  return { p,rankTop3,rankList,self, loadRank, loadMore,clearData };
};