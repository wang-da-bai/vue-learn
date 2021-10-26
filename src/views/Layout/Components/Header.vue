<template>
  <div id="header-wrap">
    <div class="pull-left header-icon" @click="navMenuState">
      <svg-icon iconName="console"  className="console"/>
    </div>
    <div class="pull-right">
      <div class="user-info pull-left">
        <img src="@/assets/images/face.png" alt="暂无图片" class="img">
        <span>{{username}}</span>
      </div>
      <div class="header-icon pull-left" @click="exit">
        <svg-icon iconName="logout" className="logout" />
      </div>
    </div>
  </div>
</template>
<script>
import {getCurrentInstance,computed} from 'vue'
export default {
  name: 'layoutHeader',
   props: {  //指定接收的值，必须指定类型
    sonData: {
      type:Array
    }
  },
  setup(){
    const { proxy }  = getCurrentInstance();  //  方式二，此方法在开发环境以及生产环境下都能放到组件上下文对象（推荐）
    const navMenuState =() =>{
      proxy.$root.$store.commit('app/SET_IS_COLLAPSE') //使用vuex存储
    }
    const username = computed(()=> proxy.$root.$store.state.app.username)

    //退出事件
    const exit =()=>{
      proxy.$store.dispatch('app/exit').then(()=>{
        proxy.$root.$router.push({
          name: 'Login'
        })
      })
    }
    return {
      navMenuState,
      username,
      exit
    }
  }
  
}
</script>

<style lang="scss" scoped>
#header-wrap {
  position: fixed;
  top: 0;
  right: 0;
  left: $navMenu;
  height: 75px;
  background-color: #fff;
  line-height: 75px;
  @include webkit(box-shadow, 0 3px 16px 0 rgba(0,0,0,.1));
  @include webkit(transition,all .3s ease 0s);
  .header-icon {
    padding: 0 32px;
    svg {
      margin-bottom: -8px;
      width: 30px;
      height: 30px;
      color: #000;
      fill: currentColor;
      cursor: pointer;
    }
  }
  .user-info {
    height: 100%;
    padding: 0 32px;
    border-right: 1px solid #ededed;
    // margin:  0 auto;
    // padding-top: 20px;
    .img {
      width: 50px;
      height: 50px;
      vertical-align: middle;
      margin-right: 10px;
    }
    // + 表示同一级的下一个元素
    + .header-icon {
      padding: 0 28px;
    }
  }
}
.open {
  #header-wrap { left: $navMenu;}
}
.close {
  #header-wrap { left: $navMenuMin;}
}
</style>
