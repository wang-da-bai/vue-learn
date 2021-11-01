<template>
  <el-dialog v-model="dialogFormVisible" title="新增" width="580px" @close="close">
    <el-form :model="form">
      <el-form-item label="类别:" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="Please select a zone">
          <el-option label="Zone No.1" value="shanghai"></el-option>
          <el-option label="Zone No.2" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题:" :label-width="formLabelWidth">
        <el-input v-model="form.name" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item label="概况:" :label-width="formLabelWidth">
        <el-input v-model="form.name" type="textarea" placeholder="请输入概括"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script>
import { ref,getCurrentInstance,reactive,watch } from 'vue'
export default {
  name: 'dialogInfo',
  //单向数据流。 父级 ->子级。 不能反向修改
  props: {
    flag: {
      type: Boolean,
      default: false
    }
  },
  setup(props,{emit}) {
    //  const { proxy }  = getCurrentInstance();
    //ref
    const dialogFormVisible = ref(false)
    const formLabelWidth = ref('70px')
    //reactive
    const form = reactive({
      name: '',
      region: '',
      date1: '',
      date2: '',
      delivery: false,
      type: [],
      resource: '',
      desc: ''
    })
    //watch
    watch(()=>{
      dialogFormVisible.value = props.flag
    })


    //function
    const close =()=>{
      dialogFormVisible.value = false
      emit("close",false) 
    }
    return {
      //ref
      dialogFormVisible,
      formLabelWidth,
      //reactive
      form,
      //function
      close
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
