/**
 * 严格回文，每个字符都完全相同
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
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

let str = "a b a"
console.log(isPalindrome(str))
