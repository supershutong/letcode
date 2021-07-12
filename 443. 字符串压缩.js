/**
 * 利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。
 * 如：字符串aabcccccaaa会变为a2b1c5a3。若“压缩”后的字符串没有变短，则返回原先的字符串。
 */
var compressString = function (str) {
  let res = '',
    time = 1
  for (let i = 1; i <= str.length; i++) {
    if (str[i - 1] === str[i]) {
      time++
    } else {
      res += str[i - 1] + time
      time = 1
    }
  }
  return res.length >= str.length ? str : res
}

let str = 'aabcccccaaa'
console.log(compressString(str)) // 'a2b1c5a3'
