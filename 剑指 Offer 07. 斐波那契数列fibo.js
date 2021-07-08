// 递归，时间复杂度 O(2^n)
function fiboSequence(n) {
  if (n === 1 || n === 2) return n - 1
  return fiboSequence(n - 1) + fiboSequence(n - 2)
}

// 迭代，时间复杂度 O(n)。推荐！
function fiboSequence(n) {
  if (n === 0 || n === 1) return n
  let a = 0,
    b = 1,
    c
  for (let i = 2; i < n + 1; i++) {
    // 斐波那契数列 i=2 开始是前两数和
    c = a + b
    a = b
    b = c
  }
  return c
}

// 测试用例
console.log(fiboSequence(5)) // 5
