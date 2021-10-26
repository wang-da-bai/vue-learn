import { login } from '@/api/login'
const state = {
  // showWavesTide: false,
  // showWord: true,
  // latestWaveData: false,
  // showList: false
}
const mutations = {
  // RESET_STATE: (state) => {
  //   // Object.assign(state, getDefaultState())
  // },
  // SET_USER_INFO: (state, userInfo) => {
  //   state.userInfo = userInfo
  // }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        if (response.code === 1000) {
          commit('SET_USER_INFO', data)
          // setUserInfo(data)
        } else {
          reject(response.msg)
        }
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

