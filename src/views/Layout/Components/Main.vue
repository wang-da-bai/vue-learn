<template>
  <div id="main-wrap">
    <div class="main-content">
      {{bbb}}
      <router-view />
    </div>
  </div>
</template>
<script>
import {getCurrentInstance} from 'vue'
// import { ref,reactive } from 'vue'
export default {
  name: 'layoutMain',
  setup() {
    const { proxy }  = getCurrentInstance();  //  方式二，此方法在开发环境以及生产环境下都能放到组件上下文对象（推荐）
    // const str = ref('{"name": "努力学习前端","title": "aaa"}')
    // const json = reactive(JSON.parse(str.value))
    const bbb = proxy.$root.$store.state.login.aaa
    return {
      bbb
    }
  }
  
}
</script>

<style lang="scss" scoped>
#main-wrap {
  position: fixed;
  left: $navMenu;
  top: 75px;
  right: 0;
  bottom: 0;
  border: 30px solid #f7f7f7;
  border-bottom: none;
  box-sizing: border;
  .main-content {
    width: 100%;
    height: 100%;
    padding-top: 30px;
    padding-left: 30px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #fff;
    // .content {
    //   width: 100%;
    //   height: 100%;
    //   padding-top: 30px;
    //   padding-left: 30px;
    //   -webkit-box-sizing: border-box;
    //   box-sizing: border-box;
    //   background-color: #fff;
    // }
  }
}
.open {
  #main-wrap {
    left: $navMenu;
  }
}
.close {
  #main-wrap {
    left: $navMenuMin;
  }
}
</style>
