import { isEmpty } from "./EmptyUtils";
import {Toast} from 'vant'
const OVER_TIEM = 30000; // 超时时间
const IS_LOG = true; // 是否打印网络请求结果
const RESOLVE_CODE = [ // 请求成功codes
  200,
  900002,
  510,
  900003,
  1701007,//当前主题已评价
  601,//计划已经删除
]
const REDIRECT_CODE = { // 重定向codes
  700000: [''],
  800000: [''],
}

/**
 * 接口统一封装，
 * @param {String} url 请求地址
 * @param {Object} options fetch第二个配置参数
 */
function send(url, options = {}) {
  const  token = localStorage.getItem('token') || '';
  const {
    params, // get请求的参数
    ...restOptions
  } = options;
  const headers = {
    'Content-Type': 'application/json',
    'Accept-Charset': 'utf-8',
     'User-Agent': 'Mozilla/5.0 (Linux; X11)',
    'Authorization': token,
    ...(restOptions.headers || {})
  }

  restOptions.headers = headers;
  if (restOptions.method === 'GET' || restOptions.method === 'DELETE') {
    url = _parseURL(url, params);
  }
  const CONSOLE_LOG_INFO = { url, restOptions };
  return Promise.race([
    fetch(url, restOptions)
      .then(response => response.json())
      .then(responseJson => {
        // 打印返回结果
        IS_LOG && console.log({
          url: CONSOLE_LOG_INFO.url,
          data: responseJson&&responseJson.data,
          request: CONSOLE_LOG_INFO,
          response: responseJson,
          responseJson: [JSON.stringify(responseJson || {})]
        })
        // 请求成功处理
        if (RESOLVE_CODE.includes(responseJson.code)) {
          return Promise.resolve(responseJson)
        }
        // 处理重定向
        const redirect = REDIRECT_CODE[responseJson.code];
        if (redirect) {
        }
        if (responseJson.code == 700000) {
          return Promise.reject(responseJson)
        }
        // 除了成功，则全部判断为错误
        return Promise.reject(responseJson)
      }),
    new Promise((_, reject) => setTimeout(() => reject({ msg: '网络链接不可用，请稍后重试', code: 4 }), OVER_TIEM)), // 8s网络超时处理
  ])
    .catch((e = {}) => {
      console.log({
        url: CONSOLE_LOG_INFO.url,
        request: CONSOLE_LOG_INFO,
        error: e,
      })
      return Promise.reject(e)
    })
}

function request(url, options) {
  return send(url, options);
}

request.get = function (url, params, options = {}) {
  return send(url, {
    method: "GET",
    params,
    ...options,
  })
}

request.post = function (url, data = {}, options = {}) {
  return send(url, {
    method: "POST",
    body: JSON.stringify(data),
    ...options,
  })
}

request.put = function (url, data = {}, options = {}) {
  return send(url, {
    method: "PUT",
    body: JSON.stringify(data),
    ...options,
  })
}

request.delete = function (url, params = {}, options = {}) {
  return send(url, {
    method: "DELETE",
    params,
    ...options,
  })
}

request.upload = function (url, images = [], params, options = {}) {
  let formData = new FormData();
  if (!isEmpty(params)) {
    formData = params;
  }
  for (var i = 0; i < images.length; i++) {
    var uri = images[i]
    var date = new Date()
    var name = date.getTime() + '.png'//用时间戳保证名字的唯一性
    let file = { uri: uri, type: 'multipart/form-data', name: name }
    formData.append('file', file)
  }
  return send(url, {
    method: "POST",
    body: formData,
    ...options,
  })
}

export function _parseURL(url = "", params = {}) {
  let paramsArray = [];
  Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
  if (url.search(/\?/) === -1) {
    url += '?' + paramsArray.join('&')
  } else {
    url += '&' + paramsArray.join('&')
  }
  return url;
}

export default request;
