
const state = {
  showGaleTide: false,
  memoData: '',
  realDate: ''
}

const mutations = {
  SET_SHOW_GALE_TIDE: (state, status) => {
    state.showGaleTide = status
  },
  SET_MEMO: (state, data) => {
    state.memoData = data
  },
  SET_REAL_DATE: (state, data) => {
    state.realDate = data
  }
}

const actions = {
  changeGaleTide({ commit }, status) {
    commit('SET_SHOW_GALE_TIDE', status)
  },
  changeMemo({ commit }, data) {
    commit('SET_MEMO', data)
  },
  changeRealDate({ commit }, data) {
    commit('SET_REAL_DATE', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
