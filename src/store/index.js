
import { createStore } from 'vuex'
import getters from './getters'
import app from './modules/app'
// import settings from './modules/settings'
import user from './modules/user'
import home from './modules/home'
import typhoon from './modules/typhoon'
import gale from './modules/gale'
import waves from './modules/waves'
import dataAnalysis from './modules/dataAnalysis'
import login from './modules/login'

const store = createStore({
  modules: {
    app,
    // settings,
    user,
    home,
    typhoon,
    gale,
    waves,
    dataAnalysis,
    login
  },
  getters
})

export default store
