<template>
	<bc-form v-bind="formConfig"></bc-form>
</template>
<script lang="ts">
	import { uploadApi } from '@/api';
	import { defineComponent, reactive } from 'vue';
	import {
		bankCardFormat,
		cardFormat,
		isCard,
		isMobile,
		mobileFormat,
		noNumericToBlank,
		patternMobile,
		patternSMs,
	} from '@fe-hl/utils';
	export default defineComponent({
		name: 'ExampleForm',
		setup() {
			const formConfig = reactive<any>({
				handlerUpload: async (formConfig: any, file: string | Blob) => {
					console.log(formConfig, file);
					let formData = new FormData();
					formData.append('file', file);
					let res = await uploadApi(formData);
					return Promise.resolve(res.data.urls);
				},
				handlerSubmit: (formModels: any) => {
					console.log(formModels);
					return Promise.resolve();
				},
				formConfigList: [
					{
						componentType: 'text',
						type: 'tel',
						label: '手机号',
						placeholder: '请输入手机号',
						key: 'mobilePhone',
						maxlength: 11,
						formatter: noNumericToBlank,
						rules: [
							{ pattern: patternMobile, message: '请输入合法的11位手机号' },
						],
					},
					{
						componentType: 'text',
						label: '手机号格式化',
						type: 'tel',
						placeholder: '请输入手机号',
						key: 'mobilePhonef',
						formatter: mobileFormat,
						maxlength: 13,
						rules: [
							{
								validator: (value: string) =>
									isMobile(value.replace(/\s/gi, '')),
								message: '请输入合法的11位手机号-格式化',
							},
						],
					},
					{
						componentType: 'text',
						label: '身份证',
						type: 'tel',
						placeholder: '请输入身份证',
						key: 'card',
						formatter: cardFormat,
						maxlength: 20,
						rules: [
							{
								validator: (value: string) => isCard(value.replace(/\s/gi, '')),
								message: '请输入合法18位身份证号',
							},
						],
					},
					{
						componentType: 'text',
						label: '银行卡号',
						type: 'tel',
						placeholder: '请输入银行卡号',
						key: 'bankCard',
						formatter: bankCardFormat,
						maxlength: 24,
						rules: [{ required: true, message: '请输入银行卡号' }],
					},
					{
						label: '验证码',
						componentType: 'sms',
						type: 'tel',
						formatter: noNumericToBlank,
						placeholder: '请输入验证码',
						beforeValidateKey: ['mobilePhone'],
						key: 'smsCode',
						handlerCountdown: countdown => {
							countdown();
						},
						maxlength: 6,
						rules: [{ pattern: patternSMs, message: '请输入6位数字验证码' }],
					},
					{
						componentType: 'text',
						type: 'text',
						label: '商户号',
						placeholder: '请输入商户号',
						key: 'mercId',
						rules: [{ required: true, message: '请填写用户名' }],
					},
					{
						componentType: 'switch',
						label: '开关',
						key: 'off',
					},
					{
						componentType: 'checkbox',
						label: '复选框组',
						key: 'checkboxs',
						rules: [{ required: true, message: '请填写复选框组' }],
						options: [
							{
								label: '男',
								value: 1,
							},
							{
								label: '女',
								value: 2,
							},
						],
					},
					{
						componentType: 'radio',
						label: '单选框',
						key: 'radio',
						rules: [{ required: true, message: '请填写单选框' }],
						options: [
							{
								label: '男',
								value: 's',
							},
							{
								label: '女',
								value: 'm',
							},
						],
					},
					{
						componentType: 'stepper',
						label: '步进器',
						key: 'stepper',
						rules: [{ required: true, message: '请填写步进器' }],
					},
					{
						componentType: 'rate',
						label: '评分',
						key: 'rate',
						rules: [{ required: true, message: '请填写评分' }],
					},
					{
						componentType: 'slider',
						label: '滑块',
						key: 'slider',
						rules: [{ required: true, message: '滑块' }],
					},
					{
						componentType: 'select',
						label: '选择城市',
						placeholder: '选择城市',
						key: 'select',
						confirmCallback: (
							optionValue: any,
							optionData: any,
							formModels: any
						) => {
							console.log(optionValue);
							console.log(optionData);
							console.log(formModels);
						},
						options: [
							{ label: '杭州', value: 'Hangzhou' },
							{ label: '宁波', value: 'Ningbo' },
							{ label: '温州', value: 'Wenzhou' },
							{ label: '绍兴', value: 'Shaoxing' },
							{ label: '湖州', value: 'Huzhou' },
						],
						rules: [{ required: true, message: '选择城市' }],
					},
					{
						componentType: 'calendar',
						type: 'range',
						dateFormat: 'YYYY-MM-DD',
						label: '时间选择',
						placeholder: '选择时间选择',
						key: 'hulei',
						rules: [{ required: true, message: '选择时间选择' }],
						minDate: new Date(2022, 6, 1),
						maxDate: new Date(2022, 6, 31),
					},
					{
						componentType: 'uploader',
						label: '文件上传',
						maxCount: 5,
						accept: '',
						key: 'uploader',
						rules: [{ required: true, message: '请填写文件上传' }],
						beforeRead: file => {
							console.log(file);
							return false;
						},
					},
				],
			});
			return {
				formConfig,
			};
		},
	});
</script>
