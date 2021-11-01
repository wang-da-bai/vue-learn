import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import '@/icons/index.js'

import SvgIcon from '@/components/SvgIcon/index.vue'// svg component
import '@/permission' // permission control //路由守卫

import '@/libs/rem.js'  //px转化成rem
//自定义全局组件
// import global from './utils/global'
import 'default-passive-events' //解决警告问题
const app = createApp(App)
app.use(ElementPlus,{
  locale: zhCn,
})
app.component('svg-icon', SvgIcon)
app.use(store)
// app.use(global)
app.use(router).mount('#app')