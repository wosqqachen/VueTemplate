import SVGA from "svgaplayerweb";
export interface SvgaProps {
  width?: string;
  height?: string;
  src: string;
  loops?: number;
  clearsAfterStop?: boolean;
  fillMode?: "Forward" | "Backward";
  autoplay?: boolean;
  stretch?: boolean;
  [k:string]:any
}
const animationStore: { [path: string]: Promise<SVGA.VideoEntity> } = {};
export const load = (path: string) => {
  if (!animationStore[path]) {
    animationStore[path] = new Promise((resolve, reject) => {
      const parser = new SVGA.Parser();
      parser.load(path, resolve, reject);
    });
  }
  return animationStore[path];
};
export function initAni(
  player: SVGA.Player,
  options: SvgaProps,
  cb: (eventName?: string, eventDetail?: unknown) => void = () => void 0
) {
  const path = options.src;
  load(path).then(videoItem => {
    player.setVideoItem(videoItem);
    player.loops = options.loops || 0;
    player.clearsAfterStop = options.clearsAfterStop || true;
    player.fillMode = options.fillMode || "Forward";
    player.clear();
    if (options.autoplay) {
      player.startAnimation();
    }
    cb("init");
    player.onFinished(() => {
      cb("Finished");
    });
    player.onFrame(frame => {
      cb("Frame", frame);
    });
    player.onPercentage(percentage => {
      cb("Percentage", percentage);
    });
  });
}