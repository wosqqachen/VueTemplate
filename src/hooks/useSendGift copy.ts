import { ref, reactive, onMounted,watch } from "vue";
import { toast } from "@/request/client-request";
import request from '@/request/zysrf-app'
import { getParam2 } from "@/utils/util";
const uri = getParam2();
//弹窗赠送装扮
export const useSend = (param: any) => {
  const giftsList = ref([] as any);
  const userInfo = ref({} as any);
  const p = reactive({
    choosed: 0,
    roomId: uri["room_id"],
    inviteCode: '',
  })
  let timeout = 0;
  watch(
    () => p.inviteCode,
    (v, ov) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        getUserInfo()
      }, 500);
    }
  );
  const loadGift = async () => {//根据房间取礼物
    const res = await new Promise((resolve, reject) => {
      request.commonRequest(param.url, { room_id: p.roomId }, resolve, reject)
    }) as any;
    if (res?.code != 0) {
      toast(res?.message || "网络开小差啦");
    } else {
      giftsList.value = res.data.filter((item: any) => item.have_num > 0);
    } 
  };
  const getUserInfo = async () => {
    const res = await new Promise((resolve, reject) => {
      request.commonRequest(param.url2, { invite_code: p.inviteCode }, resolve, reject)
    }) as any;
    if (res?.code != 0) {
      toast(res?.message || "网络开小差啦");
    } else {
      userInfo.value = res.data.user_info;
    } 
  };
  const changeChoosed = (idx: number) => {//选择
    p.choosed = idx;
  };
  const sendGift = async () => {
    const gift = giftsList.value[p.choosed];
    const res = await new Promise((resolve, reject) => {
      request.commonRequest(param.url3, {
        id: gift.id,
        toaccid: userInfo.value.accid,
        invite_code: userInfo.value.inviteCode,
        to_invite_code: userInfo.value.inviteCode
      }, resolve, reject)
    }) as any;
    if (res?.code != 0) {
      toast(res?.message || "网络开小差啦");
    } else {
      toast("赠送成功");
      param.onSuccess(res?.data);
    } 
  };
  const doGiveHandler = async () => {
    if (!userInfo.value) {
      toast("请输入需要赠送的用户");
      return;
    }
    const gift = giftsList.value[p.choosed];
    if (!gift) {
      toast("还未选择赠送的装扮～");
      return;
    }
    sendGift();
  };
  return { p, giftsList, userInfo, loadGift, changeChoosed, getUserInfo,doGiveHandler };
};