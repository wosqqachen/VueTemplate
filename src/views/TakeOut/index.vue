<template>
	<div class="home">
		<img alt="Vue logo"
		     src="../../assets/logo.png" />
		<div>{{user.username}}</div>
		<div>
			<mt-button type="primary"
			           @click="userAc">userAc</mt-button>
		</div>
		<div>
			<mt-button type="primary"
			           @click="userMt">userMt</mt-button>
		</div>
		<mt-field label="用户名"
		          placeholder="请输入用户名"
		          @input="throttleTest"></mt-field>
		<mt-field label="邮箱"
		          placeholder="请输入邮箱"
		          @input="debounceTest"></mt-field>
	</div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex';
import Const from '@/utils/Const';
import Tools from '@/utils/Tools';
export default {
	name : 'home',
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

		this.$appInvoked('appGetAjaxHeader', {}, rst => {
			console.log('调用原生', rst);
		});

		this.$appGetInvoked('htmlBackToFore', () => {
			console.log('原生调用通知H5');

		});
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
			console.log('throttleTest');
		}, 3000),
		debounceTest : Tools.debounce(() => {
			console.log('debounceTest');
		}, 3000)
	}
};
</script>
