import QRCode from 'qrcode';
import { nextTick } from 'vue';
export const useQrcode = async (
	el: string,
	text: string,
	qRCodeWidth = 120
) => {
	await nextTick();
	QRCode.toCanvas(document.querySelector(el), text, {
		width: qRCodeWidth,
		color: {
			dark: '#034A9E',
			light: '#fff',
		},
	});
};
