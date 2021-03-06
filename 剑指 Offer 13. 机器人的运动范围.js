/**
  地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。
  一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格，
  也不能进入行坐标和列坐标的数位之和大于k的格子。

  例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。
  但它不能进入方格 [35, 38]，因为3+5+3+8=19。
  请问该机器人能够到达多少个格子？
 **/

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  let total = 0
  let path = new Map()
  function running(i, j) {
    //边界直接返回
    if (i < 0 || j < 0 || i >= m || j >= n) return
    let sum = ('' + i + j).split('').reduce((prev, cur) => +prev + +cur)
    let pos = JSON.stringify([i, j])
    // 当该点还没走过 且 不大于k 时 继续执行
    if (!path.get(pos) && sum <= k) {
      path.set(pos, true) // 标识该点已经走过, 下次不进
      total++
      // 当前的继续 上下左右 走
      running(i - 1, j)
      running(i + 1, j)
      running(i, j - 1)
      running(i, j + 1)
    }
  }
  running(0, 0)
  return total
}

// 测试用例
let count = movingCount(20, 20, 18)
console.log(count)
