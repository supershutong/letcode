/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  let stack = [], tail
  for (let i = 0, len = s.length; i < len; i++) {
    tail = stack.pop()
    if (!tail || tail[0] !== s[i]) {
      stack.push(tail)
      stack.push(s[i])
    } else if (tail.length < k - 1) {
      stack.push(tail + s[i])
    }
  }
  return stack.join('')
};

var s = "abcd", k = 2
// var s = "deeedbbcccbdaa", k = 3
// var s = "pbbcggttciiippooaais", k = 2
let res = removeDuplicates(s, k)
console.log(res)
