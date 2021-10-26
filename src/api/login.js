import request from '@/utils/request'
/**
 * 登录
 */
 export function Login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

/**
 * 获取用户角色
 */

/**
 * 列表
 */