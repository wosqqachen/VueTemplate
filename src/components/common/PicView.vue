<template>
  <div>
    <img
      class="max"
      v-if="
        fix == 'png' ||
          fix == 'jpg' ||
          fix == 'jpeg' ||
          fix == 'gif' ||
          fix == 'webp'
      "
      :src="picSrc"
    />

    <div ref="svgaDom" v-if="fix == 'svga'" class="max" :src="picSrc"></div>

    <div ref="mp4Dom" v-if="fix == 'mp4'" class="max mp4"></div>
  </div>
</template>

<script lang="ts">
/**
 * 图片预览组件
 * 支持格式 jpg,png,gif,webp,svga
 */
import { Vue, Options, prop } from "vue-class-component";
import SVGA from "svgaplayerweb";
import Vap from "video-animation-player";
import config from "./vapc.json";

class Props {
  public picSrc = prop<string>({ default: "" }); //动画路径
  public loops = prop<number>({ default: 0 }); //循环次数
  public param = prop<{loops:0,clearsAfterStop:false,fillMode: 'Forward'}>({ default:{loops:0,clearsAfterStop:true,fillMode: 'Forward'} }); //svga 参数
  public autoPlayer = prop<boolean>({ default: true }); //是否自动播放
  //是否替换动画图像&&替换图像的ImageKey(需设计师告诉你)
  public replaceAni = prop<{
    imgSrc: string; imgKey: string, param: Array<any> }>({
    default: {}
  });
  public stopAni = prop<boolean>({ default: false }); //是否需要暂停动画
}
@Options({
  watch: {
    picSrc: function() {
      this.frushShow();
    },
  }
})
export default class extends Vue.with(Props) {
  fix: string = "";
  player: SVGA.Player | undefined = undefined;
  parser: SVGA.Parser | undefined = undefined;
  vap: Vap | undefined = undefined;

  mounted() {
    this.frushShow();
  }

  public frushShow() {
    const _fix = this.getFix(this.picSrc);
    this.fix = _fix;
    console.log("fix: ", _fix);

    this.$nextTick(() => {
      if (this.vap) {
        this.vap.clear();
        this.vap.destroy();
        this.vap = undefined;
      }

      if (this.player) {
        this.player.clear();
        this.player = undefined;
      }

      if (_fix == "svga") {
        console.log("show svga");
        this.parseShowSvga(this.$refs.svgaDom, this.picSrc);
      }

      if (_fix == "mp4") {
        console.log("this.picSrc: ", this.picSrc);
        console.log("this.config: ", config);

        // demo 地址 https://github.com/Tencent/vap/blob/master/web/demo/src/components/HelloWorld.vue
        this.vap = new Vap(
          Object.assign(
            {},
            {
              container: this.$refs.mp4Dom as HTMLElement,
              src: this.picSrc,
              // change config, 使用的是mp4配置文件的 json 文件
              config: config,
              // change 可能需要修改
              width: 750,
              // change 可能需要修改
              height: 1334,
              fps: 25,
              loop: true,
              beginPoint: 0,
              accurate: true,

              // 融合信息（图片/文字）,同素材生成工具生成的配置文件中的srcTag所对应，比如[imgUser] => imgUser
              // imgUser:
              //   "//shp.qlogo.cn/pghead/Q3auHgzwzM6TmnCKHzBcyxVPEJ5t4Ria7H18tYJyM40c/0",
              // imgAnchor:
              //   "//shp.qlogo.cn/pghead/PiajxSqBRaEKRa1v87G8wh37GibiaosmfU334GBWgk7aC8/140",
              // textUser: "user1",
              // textAnchor: "user2",
              type: 1,

              onLoadError: (e: ErrorEvent) => {
                console.log("on load error: ", e);
              }
            }
          )
        )
          .on("playing", () => {
            console.log("playing");
          })
          .on("ended", () => {
            console.log("play ended");
          })
          .on("error", (err: any) => {
            console.log("play error: ", err);
          });
        // .on("frame", (frame: number, timestamp: number) => {
        //   // frame: 当前帧(从0开始)  timestamp: (播放时间戳)
        //   if (frame === 50) {
        //     // do something
        //   }
        //   console.log(frame, "-------", timestamp);
        // });
      }
    });
  }

  private parseShowSvga(dom: any, svgaPath: string) {
    if (!this.player) this.player = new SVGA.Player(dom);
    // 如果你需要支持 IE6+，那么必须把同样的选择器传给 Parser。
    if (!this.parser) this.parser = new SVGA.Parser();
    console.log("in load SVGA参数", this.loops, this.param);
    this.parser.load(svgaPath, videoItem => {
      console.log("in load ok");
      //动画的循环次數
      (this.player as SVGA.Player).setVideoItem(videoItem);
      (this.player as SVGA.Player).startAnimation();
      (this.player as SVGA.Player).clearsAfterStop = this.param.clearsAfterStop;
      (this.player as SVGA.Player).fillMode = this.param.fillMode;
      (this.player as SVGA.Player).loops = this.param.loops;
    });
    this.player.loops = this.loops;
    if (this.loops) {
      this.player.onFinished(() => {
        this.$emit("player-finished");
      });
    }
    //是否替換资源
    if (JSON.stringify(this.replaceAni) != "{}") {
      if (this.replaceAni.param?.length > 0) {//图片、文案替换
        const array = this.replaceAni.param
        for (let index = 0; index < array.length; index++) {
          const element = array[index];
          if (element.type === '1') {
            this.player.setText(element, element.key);
          } else {
            this.player.setImage(element.imgSrc, element.key);
          }
        }
      } else {
        this.player.setImage(this.replaceAni.imgSrc, this.replaceAni.imgKey);
      }
    }
    //是否暫停动画
    if (this.stopAni) {
      this.player.onFrame(p => {
        if (!this.player) return;
        this.player.clearsAfterStop = false;
        if (p == 60) this.player?.pauseAnimation();
      });
    }
  }

  private getFix(path: string) {
    const arr = path.split(".");
    if (arr.length == 0) throw Error("pic error");
    const _fix = arr[arr.length - 1];
    return _fix;
  }
}
</script>

<style lang="less">
.max.mp4 {
  // change 可能需要修改大小，调整位置
  canvas {
    width: 750;
    height: 1334;
    max-width: 100%;
    transform: translateY(-15%);
  }
}
</style>

<style scoped lang="less">
.max {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
