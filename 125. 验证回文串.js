/**
 * 此处只考虑字母和数字字符，可以忽略字母的大小写
 * @param {string} s
 * @return {boolean}
 */
// 方法一 双指针
var isPalindrome = function (s) {
  s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
  let left = 0, right = s.length - 1
  while (left < right) {
    if (s[left] === s[right]) {
      left++
      right--
    } else {
      return false
    }
  }
  return true
};

// 方法二 回文特征：翻来覆去都一样
var isPalindrome = function (s) {
  s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
  return s === s.split('').reverse().join('')
};

// let str = "A man, a plan, a canal: Panama"
let str = "race a car"
console.log(isPalindrome(str))
