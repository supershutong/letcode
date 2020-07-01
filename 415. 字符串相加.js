/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// 方法一 补0后按位求和，遍历更新剩下字符串
var addStrings = function (num1, num2) {
  let sumStr = '', temp, exceed = 0, i = Math.max(num1.length, num2.length)
  num2 = num2.padStart(i, '0')
  num1 = num1.padStart(i, '0')

  while (i--) {
    temp = (+(num1[i]) + +(num2[i]) + exceed)
    num1 = num1.slice(0, -1)
    num2 = num2.slice(0, -1)
    sumStr = (temp - 10 * (exceed = temp > 9 ? 1 : 0)) + sumStr
  }
  return exceed ? 1 + sumStr : sumStr
};

// 方法二 遍历更新num2
var addStrings = function (num1, num2) {
  let a = num1.length, b = num2.length, exceed = 0, result = ''
  while (a || b) {
    a ? exceed += +num1[--a] : ''
    b ? exceed += +num2[--b] : ''
    result = exceed % 10 + result
    exceed = exceed > 9 ? 1 : 0
  }
  return exceed ? 1 + result : result
}


var num1 = "99", num2 = "9"
var res = addStrings(num1, num2)
console.log(res)