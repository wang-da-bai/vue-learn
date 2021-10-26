const state = {
  actionTyphoon: '', // 活动的台风
  actionPointIndex: 0, // 台风点位数组下标
  warnTip: false // 判断当天是否有台风
}

const mutations = {
  SET_ACTION_TYPHOON: (state, tf) => {
    state.actionTyphoon = tf
  },
  SET_ACTION_POINT_INDEX: (state, index) => {
    state.actionPointIndex = index
  },
  SET_WARN_TIP: (state, status) => {
    state.warnTip = status
  }
}

const actions = {
  changeActionTyphoon({ commit }, tf) {
    commit('SET_ACTION_TYPHOON', tf)
  },
  changeActionPointIndex({ commit }, index) {
    commit('SET_ACTION_POINT_INDEX', index)
  },
  changeWarnTip({ commit }, status) {
    commit('SET_WARN_TIP', status)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

