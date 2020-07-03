/**
 * 面试真题：删除字符串中出现次数 >= 2 次的相邻字符
 * @param {string} S
 * @return {string}
 * @example "abbbaca" => "aaca"=>"ca"
 */
var removeDuplicates = function (S) {
  let target = [], top, i = 0
  while (i < S.length) {
    top = target[target.length - 1]
    if (S[i] === top) {
      target.pop()
      do { i++ } while (S[i] === top)
    } else {
      target.push(S[i])
      i++
    }
  }
  return target.join('')
};

var s = "abbbacaa"
let res = removeDuplicates(s)
console.log(res)
