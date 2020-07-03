/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  let stack = [], top
  for (let i = 0, len = s.length; i < len; i++) {
    top = stack.pop()
    if (!top || top[0] !== s[i]) {
      stack.push(top)
      stack.push(s[i])
    } else if (top.length < k - 1) {
      stack.push(top + s[i])
    }
  }
  return stack.join('')
};

var s = "abcd", k = 2
// var s = "deeedbbcccbdaa", k = 3
// var s = "pbbcggttciiippooaais", k = 2
let res = removeDuplicates(s, k)
console.log(res)
