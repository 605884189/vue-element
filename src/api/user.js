import request from '@/utils/request'

// console.log()
// 管理
const url = 'user/'
/**
 * 列表
 * @param {array} params 请求参数
 */
export function list(params) {
  return request({
    url: url + 'index',
    method: 'get',
    params: params
  })
}