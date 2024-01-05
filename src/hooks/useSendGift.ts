import { ref,reactive, onMounted, onBeforeUnmount } from "vue";
//赠送礼物模块逻辑
export const useCountdown = (param: any) => {
  const count = ref(0)
  const t = reactive({
    d: '00',
    h: '00',
    m: '00',
    s: '00',
  })
    const intervalId = ref(0)
    const startCountdown = (seconds:number) => {//开启
      if (intervalId.value > 0 || seconds == 0) {
        clearInterval(intervalId.value)
        return
      }
      count.value = seconds
      intervalId.value = setInterval(() => {
        count.value--
        const nd=updateCountdown(count.value)
        t.d = nd.d;
        t.h = nd.h;
        t.m = nd.m;
        t.s = nd.s;
        if (count.value <= 0) {
          clearInterval(intervalId.value)
          count.value = 0
          param.onSuccess();
        }
      }, 1000)
    }
    const pauseCountdown = () => {//暂停
      if (intervalId.value > 0) {
        clearInterval(intervalId.value)
        intervalId.value=0
      } else {
        startCountdown(count.value)
      } 
    }
    const stopCountdown = () => {//停止
      clearInterval(intervalId.value)
      count.value = 0
    }

    onMounted(() => {
      // startCountdown(60*60)
    })

    onBeforeUnmount(() => { // 销毁前停止倒计时
      stopCountdown()
    })
  return { count,t, startCountdown, stopCountdown,pauseCountdown };
};