const files = require.context('.', true, /\.js$/);
const modules = {};
files.keys().forEach((key) => {
	if (key === './index.js') return;
	const childModule = files(key).default;
	for (const key in childModule) {
		modules[key] = childModule[key];
	}
});

export default modules;
