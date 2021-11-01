import {ref} from 'vue'
import { ElMessageBox, ElMessage } from 'element-plus'
export function global() {
  const str = ref('')
  const confirm = (params) => {
    ElMessageBox.confirm(
      params.content,
      params.tip || "提示",
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type:  params.type || 'warning',
        center: true,
      }
    )
      .then(() => {
        params.fn && params.fn(params.id)
        // ElMessage({
        //   type: 'success',
        //   message: 'Delete completed',
        // })
      })
      .catch(() => {
        params.catchFn && params.fn(params.id)
        ElMessage({
          type: 'info',
          message: 'Delete canceled',
        })
      })
  }

  return {
    str,
    confirm
  }
}