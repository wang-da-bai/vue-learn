<template>
  <div>
    <el-form>
      <el-row :gutter="16">
        <el-col :span="4">
          <div class="label-wrap category">
            <label for="">类型:</label>
            <div class="wrap-content">
              <el-select v-model="typeValue" placeholder="请选择"  style="width: 100%">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
              </el-option>
            </el-select>
            </div>
          </div>
        </el-col>
        <el-col :span="7">
          <div class="label-wrap date">
            <label for="">日期: &nbsp;&nbsp;</label>
            <div class="wrap-content">
              <el-date-picker
                style="width: 100%"
                v-model="dateValue"
                type="daterange"
                range-separator="To"
                start-placeholder="Start date"
                end-placeholder="End date"
              >
              </el-date-picker>
            </div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="label-wrap key-work">
            <label for="">关键字: &nbsp;&nbsp;</label>
            <div class="wrap-content">
              <el-select v-model="search_key"  placeholder="请选择" style="width: 100%">
              <el-option
                v-for="item in searchOption"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            </div>
          </div>
        </el-col>
        <el-col :span="3">
          <el-input v-model="search_keyWork" placeholder="请输入内容"></el-input>
        </el-col>
        <el-col :span="2">
          <el-button type="danger">搜索</el-button>
        </el-col>
        <el-col :span="2">
          &nbsp;
        </el-col>
        <el-col :span="2">
          <el-button type="danger" @click="openDialog">新增</el-button>
        </el-col>
    </el-row>
    </el-form>

    <!-- 表格数据 -->
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column type="selection" width="45" />
      <el-table-column prop="title" label="标题" width="830" />
      <el-table-column prop="category" label="类别" width="130" />
      <el-table-column prop="date" label="日期" width="237"/>
      <el-table-column prop="user" label="管理员" width="115"/>
      <el-table-column  label="操作">
        <template #default="scope">
          <el-button size="mini" @click=" dialogInfo = true">Edit</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 底部分页 -->
    <el-row>
      <el-col :span="12">
        <el-button size="medium">批量删除</el-button>
      </el-col>
      <el-col :span="12">
          <el-pagination 
            class="pull-right"
            background layout="total,prev, pager, next" 
            :total="1000" 
            :current-page="1"
            @size-change="handleSizeChange" 
            @current-change="handleCurrentChange">
          </el-pagination>
      </el-col>
    </el-row>

    <!-- 新增弹框 -->
    <DialogInfo :flag="dialogInfo"  @close="close"/>
  </div>
</template>
<script>
import { global}  from "@/utils/global"
import DialogInfo from './addDialog'
import {common} from "@/api/common"
import { reactive,ref,getCurrentInstance,watch } from 'vue'

export default {
  name: 'infoIndex',
  components: { DialogInfo },
  setup() {
    // const { proxy }  = getCurrentInstance();
    const {confirm} = global()
    // const {getInfoCategory,category} = common()
    //ref
    const typeValue = ref('')
    const dateValue = ref('')
    const search_key = ref('id')
    const search_keyWork = ref('')
    const dialogInfo =ref(false)
    //reactive
    const options = reactive([
      {
        value: '1',
        label: '国际信息',
      },
      {
        value: '2',
        label: '国内信息',
      },
      {
        value: '3',
        label: '行业信息',
      }
    ])
    const searchOption = reactive([
      {
        value: 'id',
        label: 'ID',
      },
      {
        value: 'title',
        label: '标题',
      }
    ])
    const tableData = reactive([
      {
        title: '2016-05-03',
        category: 'Tom',
        date: 'No. 189, Grove St, Los Angeles',
        user: '管理员'
      },
      {
        title: '2016-05-03',
        category: 'Tom',
        date: 'No. 189, Grove St, Los Angeles',
        user: '管理员'
      },
       {
        title: '2016-05-03',
        category: 'Tom',
        date: 'No. 189, Grove St, Los Angeles',
        user: '管理员'
      }
    ])
   
    //function
    const openDialog =()=>{
      dialogInfo.value = true
    }
    const handleDelete = ()=>{
      confirm({
        content: "确定删除！",
        tip:"警告",
        fn: confirmDelete,
        id: '111'
      })
    }
    const handleSizeChange = (val) => {
      console.log(`${val} items per page`)
    }
    const handleCurrentChange = (val) => {
      console.log(`current page: ${val}`)
    }
    const close =()=>{
      dialogInfo.value = false
    }
    const confirmDelete =(val) =>{
      console.log(val)
    }

    /**
     * watch
     */
    // watch(()=>category.item,(value) =>{
    //   console.log(value)
    // })
    return {
      //ref
      typeValue,
      dateValue,
      search_key,
      search_keyWork,
      dialogInfo,
      //reactive
      options,
      searchOption,
      tableData,
      //function
      openDialog,
      handleDelete,
      handleSizeChange,
      handleCurrentChange,
      close
    }
  }
}
</script>
<style lang="scss" scoped>
.label-wrap {
  &.category {@include labelDom(left,60,40)}
  &.date {@include labelDom(right,93,40)}
  &.key-work {@include labelDom(right,93,40)}
}
</style>
