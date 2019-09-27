<template>
	<div class="home">
		<img alt="Vue logo"
		     src="../assets/logo.png" />
		{{user.username}}
		<mt-button type="primary"
		           @click="userAc">userAc</mt-button>
		<mt-button type="primary"
		           @click="userMt">userMt</mt-button>
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex';
import Const from '@/utils/Const';
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
export default {
	name : 'home',
	components : {
		HelloWorld
	},
	computed : {
		...mapGetters('User', {
			user : 'user'
		})
	},
	created () {
		console.log(this.user);
	},
	methods : {
		...mapActions('User', {
			userAction : 'userAction'
		}),
		...mapMutations('User', {
			setUser : Const.SET_USER
		}),
		userAc () {
			this.userAction({ username : 'zhangsan' });
		},
		userMt () {
			this.setUser({ username : 'list' });
		}
	}
};
</script>
