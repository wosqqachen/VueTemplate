import { h } from 'vue';
import { mountComponent } from '@/utils/mount-component';
import BcPaction from './index.vue';
export interface BcPactionProps {
	title?: string;
	url: string;
}
function createInstance(props: BcPactionProps) {
	const { unmount } = mountComponent({
		setup() {
			const attrs = {
				dialogVisible: true,
				close: () => {
					unmount();
				},
			};
			return () => {
				return h(BcPaction, { ...attrs, ...props });
			};
		},
	});
}

export function bcPaction(props: BcPactionProps) {
	createInstance(props);
}

bcPaction.install = app => {
	app.component('BcPaction', BcPaction);
	app.config.globalProperties.$bcPaction = bcPaction;
};

export default bcPaction;
