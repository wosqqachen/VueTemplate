/**
 * 打zip包，jenkins部署
 */
const log = require('@hl-cli/log');
const { spinnerStart } = require('@hl-cli/utlis');
const path = require('path');
const compressing = require('compressing');
const pathExists = require('path-exists').sync;
const fse = require('fs-extra');
const pkg = require('./package.json');
let targetPath = path.resolve(process.cwd(), pkg.name);
let sourcePathDist = path.resolve(process.cwd(), 'dist');
let targetPathDist = path.resolve(process.cwd(), targetPath + '/dist');
log.info('targetPath', targetPath);
log.info('targetPathDist', targetPathDist);
log.info('sourcePathDist', sourcePathDist);

async function taskRun() {
	const spinner = spinnerStart(`正在打包${pkg.name}.zip...\n`);
	try {
		if (pathExists(targetPath)) {
			fse.emptyDirSync(targetPath);
		} else {
			fse.ensureDirSync(targetPath);
		}
		fse.copySync(sourcePathDist, targetPathDist);
		fse.removeSync(`${process.cwd()}/${pkg.name}.zip`);
		await compressing.zip.compressDir(targetPath, `${pkg.name}.zip`);
		log.info('zip', `${process.cwd()}/${pkg.name}.zip`);
		log.success('build', '打包已完成,请提交');
		spinner.stop(true);
	} catch (e) {
		spinner.stop(true);
		log.error('异常', e.message);
	}
}

taskRun();
