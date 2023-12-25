/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module '*.js'
declare module '*.png'
declare module '*.jpg'
declare module '*.json'
declare module 'vue3-seamless-scroll'

declare module 'video-animation-player' {
  export default class {
    constructor(options: VapConfig);
    options: VapConfig;
    private fps;
    requestAnim: Function;
    container: HTMLElement;
    video: HTMLVideoElement;
    protected events: any;
    private _drawFrame;
    protected animId: number;
    protected useFrameCallback: boolean;
    private firstPlaying;
    private setBegin;
    private customEvent;
    precacheSource(source: any): Promise<string>;
    initVideo(): void;
    drawFrame(_: any, info: any): void;
    play(): void;
    pause(): void;
    setTime(t: any): void;
    requestAnimFunc(): ((cb: any) => number) | ((cb: any) => NodeJS.Timeout);
    cancelRequestAnimation(): void;
    destroy(): void;
    clear(): void;
    on(event: any, callback: any): this;
    onplaying(): void;
    onpause(): void;
    onended(): void;
    oncanplay(): void;
    onerror(err: any): void;
  }
  export interface VapConfig {
    container: HTMLElement;
    src: string;
    config: string | {
      [key: string]: any;
    };
    width: number;
    height: number;
    fps?: number;
    mute?: boolean;
    precache?: boolean;
    onLoadError?: (e: ErrorEvent) => void;
    onDestory?: () => void;
    [key: string]: any;
  }
}

