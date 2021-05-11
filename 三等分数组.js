/** 把数组分成 和差不多的3个数组
 * 思路：
 * 1、排序（以降序为例）、分组
 * 2、每组求和，较小者加当前最大值（已排序）
 */
function splitArr(arr) {
  let res = [[], [], []]
  arr = arr.sort((a, b) => b - a)
  res.forEach(item => (item.value = 0))
  arr.forEach(el => {
    let flag = 0
    res.forEach((item, index) => {
      if (item.value < res[flag].value) {
        flag = index
      }
    })
    res[flag].push(el)
    res[flag].value += el
  })
  return res
}

var arr = [11, 42, 23, 4, 5, 6, 4, 5, 6, 11, 23, 42, 56, 78, 90]
let res = splitArr(arr)
console.log(res)
