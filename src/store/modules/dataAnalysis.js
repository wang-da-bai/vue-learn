const state = {
  analysisTime: '',
  switchCP: false, // 配置参数开关
  forecastType: 0, // 0代表观测数据，1代表预测数据
  allParameter: {
    duration: 7, // 单次作业最长时间
    waveHighDz: 1.5, // 打桩浪高
    waveHighCt: 1.5, // 承台浪高
    windPowerDz: 7, // 打桩风力等级
    windPowerCt: 7, // 承台风力等级
    surgeDz: 0.7, // 打桩涌浪
    surgeCt: 0.7, // 承台涌浪
    surgePeriodDz: 7, // 打桩主涌浪周期
    surgePeriodCt: 7 // 承台主涌浪周期
  },
  dataLonLat: [122.03900, 29.04480] // 数据分析风电场经纬度
}

const mutations = {
  SET_ANALYSIS_TIME: (state, date) => {
    state.analysisTime = date
  },
  SET_SWITCH_CP: (state, status) => {
    state.switchCP = status
  },
  SET_FORECAST_TYPE: (state, date) => {
    state.forecastType = date
  },
  SET_ALL_PARAMETER: (state, date) => {
    state.allParameter = date
  },
  SET_DATA_LON_LAT: (state, date) => {
    state.dataLonLat = date
  }
}

const actions = {
  changeAnalysisTime({ commit }, date) {
    commit('SET_ANALYSIS_TIME', date)
  },
  changeSwitchCP({ commit }, status) {
    commit('SET_SWITCH_CP', status)
  },
  changeForecastType({ commit }, date) {
    commit('SET_FORECAST_TYPE', date)
  },
  changeAllParameter({ commit }, date) {
    commit('SET_ALL_PARAMETER', date)
  },
  changeDataLonLat({ commit }, date) {
    commit('SET_DATA_LON_LAT', date)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
