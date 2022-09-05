// state对象直接赋值会改变引用(失去响应式)
export const deepStateCopy = (state, data) => {
	for (const key in data) {
		state[key] = data[key];
	}
};
// state对象属性
export const deleteStateKeys = state => {
	for (const key in state) {
		delete state[key];
	}
};

// 自动注入modules
export const AutoInjectModule = (
	files,
	ignore: Array<string> = [],
	suffix: '.ts' | '.js' = '.ts'
) => {
	const modules = {};
	files.keys().forEach((key: string) => {
		if (!ignore.some(item => key.includes(item))) {
			const childModule = files(key).default;
			const moduleKey = key.slice(key.lastIndexOf('/') + 1).replace(suffix, '');
			modules[moduleKey] = childModule;
		}
	});
	return modules;
};
