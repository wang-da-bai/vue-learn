import router from './router'
import store from '@/store/index'
// import NProgress from 'nprogress' // progress bar
// import 'nprogress/nprogress.css' // progress bar style
import { getTokenInfo,removeTokenInfo,removeUserInfo } from '@/utils/auth' // get token from cookie
// import getPageTitle from '@/utils/get-page-title'

// NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist 不会重定向的白名单 

router.beforeEach(async(to, from, next) => {
  // start progress bar
  // NProgress.start()

  // set page title
  // document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasTokenInfo = getTokenInfo()

  if (hasTokenInfo) {
    if(to.path === '/login') { //如果登录后，强制回到登录页，则删除token
      removeTokenInfo()
      removeUserInfo()
      store.commit("app/SET_TOKEN",'')
      store.commit("app/SET_USERNAME",'')
      next();
    }else {
      next()
    } 
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) { //indexOf方法，判断数组中是否存在指定的某个对象，如果不存在，则返回-1
      // in the free login whitelist, go directly
      next()
    } else {
      //     // other pages that do not have permission to access are redirected to the login page.
      next(`/login`)  //因为添加了白名单所以指定路由参数不会陷入死循环
      // NProgress.done()
    }
    /**
     * 1、直接进入Index的时候，参数to被改变成了'index',触发路由指向，就会跑beforeEach
     * 2、再一次next指向了login，再次发生路由指向，再跑beforeEach,参数的to被改变成了'/login'
     * 3、白名单判断存在，则直接执行next(),因为没有参数，所以不会再次执行beforeEach
     */
  }
})

router.afterEach(() => {
  // finish progress bar
  // NProgress.done()
})
