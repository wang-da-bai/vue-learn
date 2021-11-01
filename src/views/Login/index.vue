<template>
  <div class="login-container">
    <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" class="login-form" label-position="left" auto-complete>
      <!-- <div class="loginForm-tilte">
        LOGIN IN
      </div> -->
      <el-form-item class="loginForm-item" prop="userName" >
        <el-input
          v-model="loginForm.userName"
          prefix-icon="el-icon-user"
          placeholder="账号"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>
      <el-form-item class="loginForm-item" prop="password">
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          prefix-icon="el-icon-lock"
          :type="passwordType"
          placeholder="密码"
          name="password"
          tabindex="2"
          @keyup.enter="handleLogin"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :iconName="passwordType === 'password' ? 'eye' : 'eye-open'"  :className="passwordType === 'password' ? 'eye' : 'eye-open'"/>
        </span>
        <div class="tips">
          <span>{{ errorMsg }}</span>
        </div>
      </el-form-item>

      <div class="login-form-button loginForm-item" @click="handleLogin">登录</div>

    </el-form>
  </div>
</template>

<script>
import { encryption } from '@/utils'
import { reactive,ref, getCurrentInstance,unref} from 'vue'
export default {
  name: 'Login',
  setup() {
    const { proxy }  = getCurrentInstance();
    const loginForm = reactive({
      userName: '',
      password: ''
    })
    const loginRules = reactive({
      userName: [{ required: true, trigger: 'blur' }],
      password: [{ required: true, trigger: 'blur' }]
    }) 
    const passwordType = ref('password')
    const errorMsg = ref(null)
    const loginFormRef =ref()

    const showPwd =(()=>{
      if (passwordType.value === 'password') {
        passwordType.value = ''
      } else {
        passwordType.value = 'password'
      }
      proxy.$root.$nextTick(() => {
        proxy.$root.$refs.password.focus()
      })
    })
    const handleLogin = async () =>{

      
      const form = unref(loginFormRef)
      if(!form) return
      try{
        await form.validate(valid => {
          if (valid) {
            proxy.$root.$store.dispatch('app/login', { username: loginForm.userName, password: encryption(loginForm.password) }).then(() => {
            proxy.$root.$router.push({ name: 'Console'})
          }).catch((msg) => {
            proxy.$root.errorMsg = msg
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
      }catch (error){
        // this.errorMsg = msg
        // this.loading = false
      }
    }
    return {
      loginForm, //表单数据
      loginRules, //表单规则
      passwordType, //密码显隐类型
      errorMsg, //错误提示
      showPwd,
      handleLogin,
      loginFormRef
    }
  }
}
</script>


<style lang="scss" scoped>
.login-container {
  overflow: hidden;
  width: 100%;
  height: 100%;
  // background: $login-background;
  // color: $default-color;
  .login-form {
    position: relative;
    top: 38%;
    right: -20%;
    margin: 0 auto;
    width: 900px;
    height: 432px;
    // background: $login-form-background;
    .loginForm-tilte {
      position: absolute;
      width: 100%;
      height: 30px;
      font-size: 40px;
      font-family: PingFang SC;
      font-weight: 400;
      color: $default-color;
      line-height: 1px;
      -webkit-text-stroke: 1px #5BB9FB;
      stroke: 1px #5BB9FB;
      text-align: center;
    }
    .loginForm-item {
      position: relative;
      top: 80px;
      width: 498px;
      margin: 60px auto;
      // background: $login-text;
      svg {
        margin-top: 13px;
        color: #808080;
        fill: currentColor;
        cursor: pointer;
      }
    }
    .login-form-button {
      width: 498px;
      // color: $delete-color;
      // background: $login-button;
      // border: 1px solid #0096FE;
      // border-radius: 10px;
      font-family: TaipeiSansTCBeta;
      text-align: center;
      line-height: 50px;
      font-size: 25px;
      &:hover {
        // background: $button-hover;
        color: #fff;
        cursor: pointer;
      }
    }
  }
  .tips {
    position: absolute;
    font-size: 14px;
    color: red;
  }
  .show-pwd {
    position: absolute;
    top: 0px;
    right: 10px;
    font-size: 16px;
    user-select: none;
    cursor: pointer;
  }
}
</style>
