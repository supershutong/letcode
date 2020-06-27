/**
 * 求任意多重数组的交集
 */
// 方法一
const mutiIntersection = function () {
  return Array.from(
    new Set([...arguments].reduce((prev, cur) =>
      cur.filter(item => prev.includes(item))
    ))
  )
}

// 方法二
const mutiIntersection = (list, ...args) =>
  list.filter(item =>
    args.every(arg => arg.includes(item)))

let res = mutiIntersection([1, 2, 3, 0], [2, 5, 7, 0], [2, 2, 0])
console.log(res)  // [2,0]
