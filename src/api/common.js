import {ref} from 'vue'
import { GetCategory } from './news'
import { ElMessageBox, ElMessage } from 'element-plus'
export function common() {
  const str = ref('')
  const getInfoCategory = (params) => {
    GetCategory({}).then(response =>{

    }).catch(error =>{
      
    })
  }

  return {
    str,
    getInfoCategory
  }
}