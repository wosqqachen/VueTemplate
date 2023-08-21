/* eslint-disable */
const appKey =
  process.env.VUE_APP_CURRENTMODE === "prod"
    ? "FFBKER76AHRBFK"
    : "KBBKER76B7EBFA";
const ShareInstall = (window as any).ShareInstall;

/**
 * 创建唯一id
 */
function createUniqueId() {
  const datePart = Date.now().toString(36);
  const randomPart = parseInt(
    Math.random()
      .toString()
      .split(".")[1]
  ).toString(36);
  return `${datePart}${randomPart}`;
}

/**
 * share install 初始化
 * @returns 返回一个Promise,resolve传回shareInstall实例
 */
export function shareInstallInit(data: any) {
  data = { ...data, installbatchid: createUniqueId() };
  console.log("shareInstallInit", appKey, data);
  return new Promise(resolve => {
    new ShareInstall(
      {
        appKey,
        preferWakeup: true,
        onready: function() {
          resolve(this);
        }
      },
      data
    );
  });
}
