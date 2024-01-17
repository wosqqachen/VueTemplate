import { reactive, onMounted } from "vue";
//音乐播放逻辑
export const useAudioMp3 = (param: any) => {
  // audio(:src="mp3File" loop="" ref="bgPlay" hidden="true")
  const mp3File = require("../img/QDD125F34E80ABC.mp3");
  const p = reactive({
    bgPlay: null as any,
    isOpenMusic: false,
  })
  onMounted(() => {
    setTimeout(() => {
      p.bgPlay.play();
    }, 1000);
    (window as any).viewDidDisAppear = () => {
      console.log("viewDidDisAppear"); // 隐藏暂停 
      p.isOpenMusic = false;
      p.bgPlay.pause();
    };
    (window as any).viewDidAppear = () => {
      console.log("viewDidAppear"); // 显示
    };
  });
  const changeMusic = () => {//控制播放暂停
    p.isOpenMusic = !p.isOpenMusic;
    if (p.isOpenMusic) {
      p.bgPlay.play();
    } else {
      p.bgPlay.pause();
    }
  };
  return { p, changeMusic };
};