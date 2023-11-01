import requests from "./request";
// export function Login(data) {
// 	return requests({
// 		// url:'/oauth/login',
// 		url: '*mes/applet/login/tcpLogin',
// 		header: {
// 			// "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",
// 			"Content-Type": "application/json",
// 			"Authorization": "Basic cHJpZGVzb2Z0OjEyMzQ1Ng=="
// 		},
// 		method: 'POST',
// 		data: {
// 			...data,
// 			grant_type: 'password',
// 			scope: 'all'
// 		},
// 	})
// }
// 登出
export const LoginOut = () => {
	// 发请求：axios发请求的结果返回的是一个Promise对象
	return requests({
		url: '/logout',
		// method: 'post',

	})
}























