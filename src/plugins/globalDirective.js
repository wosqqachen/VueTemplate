export default {
	install (Vue) {
		// 按钮锁，适用于点击调单个接口
		Vue.directive('click-lock', {
			inserted : function (el, bind) {
				el.addEventListener('click', () => {
					el.disabled = true;
					el.style.pointerEvents = 'none';
					bind
						.value()
						.then(
							() => {
								el.style.pointerEvents = 'auto';
								el.disabled = false;
							},
							() => {
								el.style.pointerEvents = 'auto';
								el.disabled = false;
							}
						)
						.catch(() => {
							el.style.pointerEvents = 'auto';
							el.disabled = false;
						});
				});
			}
		});
	}
};
