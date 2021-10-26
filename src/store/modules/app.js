import { Login } from "@/api/login"
import { setTokenInfo, setUserInfo,getUserInfo,removeTokenInfo, removeUserInfo} from "@/utils/auth"
const state = {
  isCollapse:JSON.parse(sessionStorage.getItem('isCollapse')) || false,
  to_ken: '',
  username:  getUserInfo() || ''
}
const getters = {
  isCollapse: state => state.isCollapse,
  username: state => state.username
}
const mutations = { //必须的 同步 没有回调处理事件
  SET_IS_COLLAPSE(state) {
    state.isCollapse = !state.isCollapse
    //html5本地存储
    sessionStorage.setItem('isCollapse',JSON.stringify(state.isCollapse))
  },
  SET_TOKEN(state,value){
    state.to_ken = value
  },
  SET_USERNAME(state,value) {
    state.username =value
  }
}

const actions = { //可以回调处理事情
  login({ commit },requestData){
    return new Promise((resolve,reject) =>{
      Login(requestData).then((response) =>{
        const { data } = response
        commit('SET_TOKEN',data.data.id)
        commit('SET_USERNAME',data.data.username)
        setUserInfo(data.data.username)
        setTokenInfo(data.data.id)
        resolve(response)
      }).catch(error =>{
        reject(error)
      })
    })
  },
  exit( {commit}){
    return new Promise((resolve,reject)=>{
      removeTokenInfo()
      removeUserInfo()
      commit("SET_TOKEN",'')
      commit("SET_USERNAME",'')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
