import { ref, reactive, onMounted } from "vue";
import { toast } from "@/request/client-request";
import request from '@/request/zysrf-app'
//我的奖励列表
export const useReward = (param: any) => {
  const list = ref([] as any)
  const p = reactive({
    page:1,
    loading: false,
  })
  const load = async () => {
    const res = await new Promise((resolve, reject) => {
      request.commonRequest(param.url, { page: p.page }, resolve, reject)
    }) as any;
    if (res?.code == 0) {
      list.value = [...list.value, ...res?.data];
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
        load();
        setTimeout(() => {
          p.loading = false;
        }, 1500);
      }
    }
  };
  onMounted(() => {
    list.value = [];
    p.loading = false;
    p.page = 1;
  });
  return { list,p, load, loadMore };
};