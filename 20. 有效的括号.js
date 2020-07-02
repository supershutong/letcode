/**
 * @param {string} s
 * @return {boolean}
*/
var isValid = function (s) {
  if (!s) return true
  if (s.length % 2) return false
  let map = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  let target = [], curTarget
  for (let char of s) {
    if ((curTarget = map[char])) {
      target.push(curTarget)
    } else if (char !== target.pop()) {
      return false
    }
  }
  return !target.length
};

var s = "((])"
let res = isValid(s)
console.log(res)