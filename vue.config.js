const path = require('path');
const resolve = dir => path.join(__dirname, dir);
module.exports = {
	css : {
		loaderOptions : {
			sass : {
				data : `
          @import "@/assets/css/index.scss";
        `
			}
		}
	},
	chainWebpack : config => {
		config.resolve.alias
			.set('@', resolve('src'))
			.set('@components', resolve('src/components'));
	}
};
