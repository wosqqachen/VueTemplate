<template>
	<div class="home">
		<img alt="Vue logo"
		     src="../assets/logo.png" />
		<mt-button type="primary">primary</mt-button>
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Const from '@/utils/Const';
export default {
	name : 'home',
	components : {
		HelloWorld
	},
	created () {
		console.log(Const.USER_INFO);
	}
};
</script>
