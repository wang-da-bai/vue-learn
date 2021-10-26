
const state = {
  showWavesTide: false,
  showWord: true,
  latestWaveData: false,
  showList: false
}

const mutations = {
  SET_SHOW_WAVES_TIDE: (state, status) => {
    state.showWavesTide = status
  },
  SET_SHOW_WORD: (state, status) => {
    state.showWord = status
  },
  SET_LATEST_WAVE_DATA: (state, status) => {
    state.latestWaveData = status
  },
  SET_SHOW_LIST: (state, status) => {
    state.showList = status
  }
}

const actions = {
  changeWavesTide({ commit }, status) {
    commit('SET_SHOW_WAVES_TIDE', status)
  },
  changeShowWord({ commit }, status) {
    commit('SET_SHOW_WORD', status)
  },
  changeLatestWaveData({ commit }, status) {
    commit('SET_LATEST_WAVE_DATA', status)
  },
  changeShowList({ commit }, status) {
    commit('SET_SHOW_LIST', status)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
