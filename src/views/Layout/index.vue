<template>
  <div id="layout" :class="[menuStatus ? 'close' : 'open']"> 
    <LayoutHeader />
    <LayoutMain />
    <LayoutNav />
  </div>
</template>
<script>
import {getCurrentInstance,computed} from 'vue'
import LayoutHeader from './Components/Header'
import LayoutMain from './Components/Main'
import LayoutNav from './Components/Nav'
export default {
  name: 'layout',
  components:{LayoutHeader, LayoutMain,LayoutNav},
  setup() {
    const { proxy }  = getCurrentInstance();  //  方式二，此方法在开发环境以及生产环境下都能放到组件上下文对象（推荐）
    const menuStatus =computed(()=> proxy.$root.$store.state.app.isCollapse)
    return {
      menuStatus
    }
  }
}
</script>

<style lang="scss" scoped>
// #layout {
//   // background-color: #f7f7f7;

// }
</style>
