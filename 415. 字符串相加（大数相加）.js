/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// 方法一 补0后按位求和，遍历更新剩下字符串
var addStrings = function (num1, num2) {
  let i = Math.max(num1.length, num2.length)
  num1 = num1.padStart(i, '0') // 补齐
  num2 = num2.padStart(i, '0')
  let temp,
    exceed = 0,
    sum = ''
  while (i--) {
    // 逐位计算
    temp = +num1[i] + +num2[i] + exceed
    exceed = temp >= 10 ? 1 : 0
    sum = (exceed ? temp - 10 : temp) + sum
    num1 = num1.slice(0, -1)
    num2 = num2.slice(0, -1)
  }
  return exceed ? 1 + sum : sum // 最后一次进位
}

// 方法二 遍历更新num2
var addStrings1 = function (num1, num2) {
  let a = num1.length,
    b = num2.length,
    exceed = 0,
    result = ''
  while (a || b) {
    a ? (exceed += +num1[--a]) : ''
    b ? (exceed += +num2[--b]) : ''
    result = (exceed % 10) + result
    exceed = exceed > 9 ? 1 : 0
  }
  return exceed ? 1 + result : result
}

var num1 = '99',
  num2 = '9'
var res = addStrings(num1, num2)
console.log(res)
