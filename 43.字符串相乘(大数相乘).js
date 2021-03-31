/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * 注意：任何时候都不要转数字，否则可能超精度
 */
var multiply = function (num1, num2) {
  if (isNaN(num1) || isNaN(num2)) return ''
  let len1 = num1.length
  let len2 = num2.length
  let res = []
  // 倒序遍历，减少进位处理
  for (let i = len1 - 1; i >= 0; i--) {
    for (let j = len2 - 1; j >= 0; j--) {
      let index1 = i + j
      let index2 = i + j + 1
      let mul = num1[i] * num2[j] + (res[index2] || 0)
      res[index1] = Math.floor(mul / 10) + (res[index1] || 0)
      res[index2] = mul % 10
    }
  }
  // 删除前置0
  let result = res.join('').replace(/^0+/, '')
  return !result ? '0' : result
}

console.log(multiply('325000734', '057810'))
