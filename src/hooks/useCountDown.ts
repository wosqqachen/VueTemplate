import { reactive } from 'vue';
import { Toast } from 'vant';
export const useCountDown = (cumulative = 60) => {
	const CUMULATIVE = cumulative;
	const smSconfig = reactive<any>({
		smsText: '获取验证码', // 验证码text
		cumulative: cumulative, // 倒计时
		task: 0, // 倒计时任务
	});

	const countdown = () => {
		if (smSconfig.cumulative !== CUMULATIVE) {
			return Toast('请倒计时结束后在点击');
		}
		smSconfig.cumulative--;
		smSconfig.task = setInterval(() => {
			if (smSconfig.cumulative <= 0) {
				smSconfig.cumulative = CUMULATIVE;
				smSconfig.smsText = '重新发送验证码';
				clearInterval(smSconfig.task);
				return;
			}
			smSconfig.cumulative--;
			smSconfig.smsText = `请重新发送(${smSconfig.cumulative + 1})S`;
		}, 1000);
	};

	return {
		smSconfig,
		countdown,
		CUMULATIVE,
	};
};
