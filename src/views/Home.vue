<template>
  <div class="home">
    <img alt="Vue logo"
         src="../assets/logo.png" />
    {{user.username}}
    <mt-button type="primary"
               @click="userAc">userAc</mt-button>
    <mt-button type="primary"
               @click="userMt">userMt</mt-button>
    <input type="text"
           placeholder="输入"
           @input="throttleTest">
    <input type="text"
           placeholder="输入"
           @input="debounceTest">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex';
import Const from '@/utils/Const';
import Tools from '@/utils/Tools';
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
		this.$api.login({ name : 'hl', passwrod : '000000' }).then((res) => {
			console.log(res);
		});

		this.$api.userInfo({ name : 'hl' });
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
		},
		throttleTest : Tools.throttle(() => {
			console.log('test');
		}, 3000),
		debounceTest : Tools.debounce(() => {
			console.log('test');
		}, 3000)
	}
};
</script>
