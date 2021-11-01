import request from '@/utils/request'
/**
 * 列表
 */


/**
 *获取分类
 */

 export function GetCategory(data) {
  return request({
    url: '/news/getCategory/',
    method: 'post',
    data
  })
}