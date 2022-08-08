import { nextTick, onUnmounted } from 'vue';
import ClipboardJS from 'clipboard';
import { Toast } from 'vant';

export const useClipboard = (el: string) => {
	type Clipboard = ClipboardJS;
	let clipboard: Clipboard;
	const clipboardHandler = async (el: string) => {
		await nextTick();
		clipboard = new ClipboardJS(el);
		clipboard.on('success', e => {
			Toast.success('复制成功');
			e.clearSelection();
		});
		clipboard.on('error', e => {
			if (e.text) {
				Toast.fail('复制失败');
			}
		});
	};
	clipboardHandler(el);

	onUnmounted(() => {
		clipboard.destroy();
	});
};
