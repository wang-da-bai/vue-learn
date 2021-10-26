<template>
  <div id="nav-wrap">
    <h1 class="logo"><img src="@/assets/images/logo.png" alt="暂无图片" /></h1>
    <el-menu
      class="el-menu-vertical-demo"
      background-color="transparent"
      text-color="#fff"
      active-text-color="#fff"
      router
      :collapse ="isCollapse"
    >
      <template  v-for="(item,index) in routers">
        <!--一级菜单-->
        <el-sub-menu :index="index + ''" :key="item.id" v-if="!item.hidden">
          <template #title>
            <svg-icon :iconName="item.meta.icon" :className="item.meta.icon"  />
            <span class="metaName">{{item.meta.name}}</span>
          </template>
           <!--子级菜单-->
          <el-menu-item v-for="subItem in item.children" :key="subItem.id" :index="subItem.path + ''">{{subItem.meta.name}}</el-menu-item>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>
<script>
import {getCurrentInstance,computed} from 'vue'
// import { reactive ,onMounted,ref,getCurrentInstance } from '@vue/composition-api'
export default ({
  name:'navMenu',
  props: {
    name: String
  },
  // components: {

  // }
  setup(){
    /**
     * data数据
     */
    const { proxy }  = getCurrentInstance();  //  方式二，此方法在开发环境以及生产环境下都能放到组件上下文对象（推荐）
    //data数组
    const routers =proxy.$root.$router.options.routes
    /**
     * computed   监听属性变化，并计算属性
     */

     const isCollapse = computed(()=> proxy.$root.$store.state.app.isCollapse)
    /**
     * 方法
     */
    return {
      isCollapse,
      routers,
    }
  }
})
</script>

<style lang="scss" scoped>
@import "@/styles/config.scss";
#nav-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: $navMenu;
  height: 100vh;
  background-color: #344a5f;
  @include webkit(transition,all .3s ease 0s);
  .logo {
    margin: 0;
    text-align: center;
    img {
      // text-align: center;
      margin: 28px auto 10px;
      width: 92px;
      @include webkit(transition,all .3s ease 0s)
    }

  }
  svg {
    margin-right: 10px;
  }
}
.open {
  #nav-wrap { width: $navMenu;}
}
.close {
  #nav-wrap { width: $navMenuMin;}
  .logo img {
    width: 50% !important;
  }
  .el-submenu {
    &.is-opened {
      > .el-submenu__title {
        background-color: red
      }
    }
  }
}
</style>
