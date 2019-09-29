<template>
	<transition :name="transitionName">
		<router-view class="child-view" />
	</transition>
</template>
<script>
export default {
	data () {
		return {
			transitionName : 'slide-left'
		};
	},
	watch : {
		'$route' () {
			let isBack = this.$router.isRouterBack;
			if (isBack) {
				this.transitionName = 'slide-right';
			} else {
				this.transitionName = 'slide-left';
			}
			this.$router.isRouterBack = false;
		}
	}
};
</script>
<style lang="scss" scoped>
.child-view {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}
</style>
