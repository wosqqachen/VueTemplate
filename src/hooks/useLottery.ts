import { ref, reactive, onMounted } from "vue";
import { toast,openPage } from "@/request/client-request";
import request from '@/request/zysrf-app'
//抽奖逻辑
export const useDraw = (param: any) => {
  const rewardList = ref([] as any)
  const p = reactive({
    showAni: false,
    lotteryNum:1,
    loading: false,
  })
  const choosedLottery = async (num: number) => {
    if (p.showAni) {
      return false;
    }
    const res = await new Promise((resolve, reject) => {
      request.commonRequest(param.url, { num: num }, resolve, reject)
    }) as any;
    if (res?.code == 0) {
      rewardList.value = res?.data.lottery;
      p.lotteryNum = num;
      p.showAni = true;
      console.log("抽奖弹窗",rewardList.value);
      setTimeout(() => {
        p.showAni = false;
        param.onSuccess(res?.data);
      }, 2500);
    } else {
      openPage("rechargeDialog", "", {
        isDamondsRecharge: false,
        entranceId: "10013",
        formType: 1
      });
      toast(res?.message || "网络开小差啦");
    } 
  };
  return { rewardList,p, choosedLottery };
};