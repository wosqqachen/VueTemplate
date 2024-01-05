

import request from '@/request/zysrf-app'
import { openPage,toast } from "@/request/client-request";
import { ref, reactive } from "vue";
//搜索信息
export const searchInfo = reactive({
  userId: '',
  close: false,
  searchData:'' as any,
  getSearchData: async (accid:string) => {
    const res = await new Promise((resolve, reject) => {
      request.commonRequest('url', {
        to_accid: searchInfo.userId
      }, resolve, reject)
    }) as any;
    console.log('搜索按钮',res)
    if (res?.code != 0) {
      toast(res?.message || "网络开小差啦");
    } else {
      searchInfo.searchData = res.data;
      searchInfo.close = true;
    } 
  },
});