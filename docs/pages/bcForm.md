# Button 按钮

<div>常用的操作按钮</div>

:::demo 使用`type`，`plain`，`round`来定义 Button 的样式

```vue

<template>
  <van-button type="primary">主要按钮</van-button>
	<van-button type="success">成功按钮</van-button>
	<van-button type="default">默认按钮</van-button>
	<van-button type="warning">警告按钮</van-button>
	<van-button type="danger">危险按钮</van-button>
	<van-button type="primary" @click="add()">{{active}}</van-button>
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';
	export default defineComponent({
		setup() {
			const active = ref(0);
			const add = ()=>{
				active.value++
			}
			return {
				add,
				active,
			};
		},
	});
</script>
<style>

</style>

```

:::
