import { createApp, h } from 'vue';
export function mountComponent(RootComponent) {
	const app = createApp(RootComponent);
	const root = document.createElement('div');
	document.body.appendChild(root);
	return {
		instance: app.mount(root),
		unmount() {
			app.unmount();
			document.body.removeChild(root);
		},
	};
}

export function createInstance(component) {
	return props => {
		const { unmount } = mountComponent({
			setup() {
				const attrs = {
					dialogVisible: true,
					close: () => {
						unmount();
					},
				};
				return () => {
					return h(component, { ...attrs, ...props });
				};
			},
		});
	};
}
