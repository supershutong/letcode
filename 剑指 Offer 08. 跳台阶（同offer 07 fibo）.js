/**
 * 题目描述
  一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）
  要求：时间复杂度 O(n)
  示例1：输入：2 返回值：2
  示例2：输入：7 返回值：21
 * 核心：斐波那契数列变形
 **/

// 方法一：递归，时间O(2^n)
// function jumpFloor(n) {
//   if (n === 0 || n === 1) return 1
//   return jumpFloor(n - 1) + jumpFloor(n - 2)
// }

// 方法二：循环+缓存，时间O(n)  -----推荐------
function jumpFloor(n) {
  if (n === 0 || n === 1) return 1
  let a = 1,
    b = 1,
    c
  for (let i = 2; i < n + 1; i++) {
    c = a + b
    a = b
    b = c
  }
  return c
}

console.log(jumpFloor(2)) // 2
console.log(jumpFloor(7)) // 21
