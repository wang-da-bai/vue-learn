import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import '@/icons/index.js'
import SvgIcon from '@/components/SvgIcon/index.vue'// svg component
import '@/permission' // permission control //路由守卫

// createApp(App).use(store).use(router).mount('#app')
const app = createApp(App)
app.use(ElementPlus,{
  locale: zhCn,
})
app.component('svg-icon', SvgIcon)
app.use(store)
app.use(router).mount('#app')