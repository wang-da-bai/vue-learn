import axios from 'axios'
import { getTokenInfo, getUserInfo} from "@/utils/auth"

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})
// 添加请求拦截器
/**
 * 请求接口前，做一些数据处理
 */
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  //后台需要前端这边传相关的参数（在请求头添加参数）
  //Tokey
  //userId
  //sui
  //业务需求
  //最终目的不是在请求头添加参数
  config.headers['Tokey']= getTokenInfo()
  config.headers['Username'] = getUserInfo()
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default service

/**
 * 使用export default时，但不能同时存在多个default,
 * 文件import 不需要花括号
 */