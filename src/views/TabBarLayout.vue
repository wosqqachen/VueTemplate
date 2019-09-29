<template>
	<div>
		<RouterTransition></RouterTransition>
		<Tabbar v-model="selected">
			<TabItem :id="item.path"
			         v-for="(item,index) in routerList"
			         :key="index"
			         @click.native="goRouter(index)">
				<img slot="icon"
				     :src="selected === item.path ? item.on : item.off">
				{{item.name}}
			</TabItem>
		</Tabbar>
	</div>

</template>

<script >
import { Tabbar, TabItem } from 'mint-ui';
import RouterTransition from '@/components/RouterTransition';
export default {
	components : {
		RouterTransition,
		Tabbar,
		TabItem
	},
	data () {
		return {
			selected : 'takeOut',
			routerList : [
				{ name : '外卖', path : 'takeOut', off : require('@/assets/images/tabs/home-off.png'), on : require('@/assets/images/tabs/home-on.png') },
				{ name : '发现', path : 'found', off : require('@/assets/images/tabs/found-off.png'), on : require('@/assets/images/tabs/found-on.png') },
				{ name : '我的', path : 'mine', off : require('@/assets/images/tabs/mine-off.png'), on : require('@/assets/images/tabs/mine-on.png') }]
		};
	},
	created () {
		let path = this.$router.history.current.path.substring(1);
		if (!path) {
			this.$router.push('takeOut');
		} else {
			this.selected = path;
		}
	},
	methods : {
		goRouter (index) {
			this.$router.push(this.routerList[index].path);
		}
	}
};
</script>


