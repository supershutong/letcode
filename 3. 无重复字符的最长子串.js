/**
 * @param {string} s
 * @return {number}
*/
// 单指针，优点：存储了每一个可能的最长子串
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length
  let end = 1, curStr = '', temp, subStrs = []
  while (end <= s.length) {
    temp = s[end - 1]
    let index = curStr.indexOf(temp)
    if (index < 0) {
      curStr += temp
    } else if (index === 0) {
      curStr = curStr.substr(1) + temp
    } else {
      subStrs.push(curStr)
      curStr = curStr.substr(index + 1) + temp
    }
    end++
  }
  subStrs.push(curStr)
  let len = Math.max(...(subStrs.map(str => str.length)))
  return len
};

// 方法二 优化Map (i为字串开始下标、j当前字符下标)
var lengthOfLongestSubstring = function (s) {
  let map = new Map(), max = 0
  for (let i = 0, j = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      i = Math.max(map.get(s[j]) + 1, i)
    }
    max = Math.max(max, j - i + 1)
    map.set(s[j], j)
  }
  return max
};

// let str = "pwwkew"
let str = "abba"
let res = lengthOfLongestSubstring(str)
console.log(res)