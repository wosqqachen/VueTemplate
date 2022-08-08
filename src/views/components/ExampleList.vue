<template>
	<bc-list v-bind="listConfig">
		<template #data="{ row }">
			<van-cell>{{ row }}</van-cell>
		</template>
	</bc-list>
</template>
<script lang="ts">
	import { getListApi } from '@/api';
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'ExampleListRefresh',
		setup() {
			let listConfig: any = {
				reqApiMethod: getListApi,
			};
			return {
				listConfig,
			};
		},
	});
</script>
