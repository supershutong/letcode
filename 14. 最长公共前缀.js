/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return ''
  let minLen = Math.min(...(strs.map(item => item.length)))
  let common = strs[0].substring(0, minLen), i = minLen
  while (i >= 0) {
    let isCommon = strs.every(str => str.substring(0, i + 1) === common)
    if (!isCommon) {
      common = strs[0].substring(0, i)
      i--
    } else {
      return common
    }
  }
  return ''
};

let strs = ["aa", "a"]
let res = longestCommonPrefix(strs)
console.log(res)

// appleId 收费 abcde abce bcd
