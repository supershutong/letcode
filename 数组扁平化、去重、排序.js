/**
 * 面试题：
    已知如下数组：
    var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
    将数组扁平化去并除其中重复部分数据，得到一个升序且不重复的数组
*/
// 方法二：compose组合函数
// 扁平化
var _flat = function (arr) {
  return arr.reduce((prev, cur) => prev.concat(Array.isArray(cur) ? _flat(cur) : cur), [])
}
// 去重
var _unique = function (arr) {
  let map = {}
  return arr.filter(item => map[item] ? false
    : (true && (map[item] = true))
  )
}
// 排序
var _sort = function (arr) {
  if (arr.length <= 1) return arr
  let left = []
  let right = []
  let mid = arr.shift(arr)
  arr.forEach(item => {
    item <= mid ? left.push(item) : right.push(item)
  });
  return _sort(left).concat(mid).concat(_sort(right))
}
// compose函数组合
var compose = (...cbs) => (initValue) => cbs.reduce((prev, cb) => cb(prev), initValue)
// 调用
let res = compose(_flat, _unique, _sort)(arr)

// 方法一：高阶函数
// var flatArr = function (arr) {
//   return Array.from(new Set(arr.flat(Infinity)))
//     .sort((a, b) => a - b)
// }

var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
let res = compose(_flat, _unique, _sort)(arr)
console.log(res)
