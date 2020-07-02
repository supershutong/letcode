/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
  let target = []
  for (let s of S) {
    if (s === target[target.length - 1]) {
      target.pop()
    } else {
      target.push(s)
    }
  }
  return target.join('')
};

var s = "abbaca"
let res = removeDuplicates(s)
console.log(res)
