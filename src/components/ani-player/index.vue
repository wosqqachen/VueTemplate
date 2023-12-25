<script lang="ts" setup>
import {load,initAni,SvgaProps} from './tools'
import SVGA from 'svgaplayerweb'
import { onMounted, ref, watch } from "vue";
const props = defineProps(['width','height','loops','clearsAfterStop','autoplay','fillMode','stretch','src'])
const emit = defineEmits([`init`, `Finished`, `Frame`, `Percentage`]);
const player = ref<SVGA.Player>((null as unknown) as SVGA.Player);
const el = ref<HTMLDivElement>();
const defaultProps:SvgaProps = {
  loops:0,
  clearsAfterStop:true,
  autoplay:true,
  fillMode:"Forward",
  stretch:false,
  src:""
}
function getProps(){
  const _p:SvgaProps = {...defaultProps}
  Object.keys(props).forEach(k=>{
    if((props as any)[k]!=undefined){
      (_p as any)[k] = (props as any)[k]
    }
  })
  return _p
}
load(props.src);
watch(props, () => {
  if (player.value) {
    initAni(player.value,getProps(), emit as any);
  }
});
onMounted(function() {
  if (el.value) {
    player.value = new SVGA.Player(el.value);
  }
  initAni(player.value,getProps(), emit as any);
});
defineExpose({
  player
});
</script>
<template>
  <div
    ref="el"
    class="svga ani"
    :class="{ stretch }"
    :style="({ '--w': width||'auto', '--h': height||'auto' } as any)"
  ></div>
</template>
<style lang="scss" scoped>
.svga {
  width: var(--w);
  height: var(--h);
  overflow: hidden;
  canvas {
    max-width: 100%;
    max-height: 100%;
    display: block;
    transform: none !important;
  }
  &.stretch {
    canvas {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
