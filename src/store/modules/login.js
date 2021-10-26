const state = {
  aaa: '1000000000'
}
const getters = {
  isCollapse: state => state.isCollapse
}
const mutations = { //必须的 同步 没有回调处理事件
  SET_IS_COLLAPSE(state) {
    state.isCollapse = !state.isCollapse
    //html5本地存储
    sessionStorage.setItem('isCollapse',JSON.stringify(state.isCollapse))
  }
}

const actions = {
 
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
