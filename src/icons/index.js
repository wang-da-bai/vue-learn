
// require.context: 读取指定目录的所有文件
// 第一个参数: 目录
// 第二个参数: 是否遍历子级目录
// 第三个参数: 定义遍历文件规则
const req = require.context('./svg',false,/\.svg$/) //$表示正则里面表示结尾，读取结尾为.svg的文件   读取src/icons/svg目录下的.svg文件
const requireAll = requireContext => {
  // console.log(requireContext.keys().map(requireContext))
  return requireContext.keys().map(requireContext)
}
requireAll(req)