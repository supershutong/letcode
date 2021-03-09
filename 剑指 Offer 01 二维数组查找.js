/* 题目描述
  在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

  要求：时间复杂度 O(n)
 */

function Find(target, array) {
  // 以右上角为起点，左侧比他小，右侧比他大；或者左下角开始，思路相似。
  let row = 0,
    col = array[0].length - 1
  while (row < array.length && col >= 0) {
    if (target > array[row][col]) {
      row += 1
    } else if (target < array[row][col]) {
      col -= 1
    } else {
      return true
    }
  }
  return false
}

const arr = [
  [1, 5, 9],
  [3, 8, 12],
  [6, 9, 19]
]

console.log(Find(9, arr))
