import { Dialog } from 'vant';

type dialogProps = {
	title: string;
	showCancelButton?: boolean;
	confirm?: () => Promise<void>;
};

export const useDialog = ({
	title,
	showCancelButton = false,
	confirm,
}: dialogProps) => {
	let loading = false;
	Dialog({
		className: 'bc-dialog',
		title,
		showCancelButton,
		beforeClose: action =>
			new Promise(resolve => {
				if (action === 'confirm' && confirm) {
					loading = true;
					confirm()
						.then(() => {
							loading = false;
							resolve(true);
						})
						.catch(() => {
							loading = false;
							resolve(false);
						});
				} else {
					if (!loading) {
						resolve(true);
					} else {
						resolve(false);
					}
				}
			}),
	});
};
