<template>
  <div id="category">
    <el-button type="danger">添加一级分类</el-button>
    <div>
      <el-row :gutter="30">
        <el-col :span="8">
          <div class="category">
            <h4>新闻</h4>
            <ul>
              <li>国内</li>
              <li>国内</li>
              <li>国内</li>
              <li>国内</li>
              <li>国内</li>
              <li>国内</li>
              <li>国内</li>
            </ul>
          </div>
        </el-col>
        <el-col :span="8">
          <div>{{coor}}</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import {GetCategory} from "@/api/news"
import { onMounted,ref,reactive,getCurrentInstance} from 'vue'
// import { reactive,ref,getCurrentInstance } from 'vue'
import {toStringHDMS} from 'ol/coordinate';
export default {
  name: 'infoCategory',
  setup() {
    /**
     * 生命周期
     */
    const { proxy }  = getCurrentInstance();
     const coorArr = reactive([7.85, 47.983333])
     const coor =ref('')
     const getCategoryInfo = ()=> {
     coor.value = toStringHDMS(coorArr)
     console.log(toStringHDMS(coorArr))
    }
    onMounted(()=>{
      getCategoryInfo()
    })

    return {
      getCategoryInfo,
      coor,
      coorArr
    }
  }
}
</script>
<style lang="scss" scoped>
.category {
  position: relative;
  line-height: 44px;
  &:before {
    content: '';
    position: absolute;
    left: 22px;
    top: 20px;
    left: 0;
    width: 32px;
    border-left: 1px dotted #000;
  }
  h4 {
    padding-left: 40px;
  }
  li {
    position: relative;
    padding-left: 36px;
    margin-left: 24px;
    &:before {
      content: '';
      position: absolute;
      top: 20px;
      left: 0;
      width: 32px;
      border-bottom: 1px dotted #000;
    }
  }
}
</style>
