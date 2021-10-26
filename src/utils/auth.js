import Cookies from 'js-cookie'

const userKey = 'userInfoTest'
const tokenKey = 'tokenInfo'
export function getUserInfo() {
  return Cookies.get(userKey)
  // return Cookies.get(userKey) ? JSON.parse(Cookies.get(userKey)) : undefined
}

export function setUserInfo(user) {
  return Cookies.set(userKey, user, { expires: 1 })
}

export function removeUserInfo() {
  return Cookies.remove(userKey)
}


export function getTokenInfo() {
  return Cookies.get(tokenKey)
  // return Cookies.get(tokenKey) ? JSON.parse(Cookies.get(tokenKey)) : undefined
}

export function setTokenInfo(token) {
  return Cookies.set(tokenKey, token, { expires: 1 })
}

export function removeTokenInfo() {
  return Cookies.remove(tokenKey)
}