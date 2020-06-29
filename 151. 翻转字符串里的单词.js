/**
 * @param {string} s
 * @return {string}
 */
// 解法一：正则 + JS API
var reverseWords = function (s) {
  return s.trim().split(' ').filter(word => word).reverse().join(' ')
};

// 解法二：双端队列（两端都可以进队的队列）、不使用API
var reverseWords = function (s) {
  let left = 0, right = s.length - 1, word = '', char = '', list = []
  while (s.charAt(left) === ' ') { left++ }
  while (s.charAt(right) === ' ') { right-- }
  while (left <= right) {
    char = s.charAt(left)
    if (char !== ' ') {
      word += char
    } else if (word) {
      list.unshift(word)
      word = ''
    }
    left++
  }
  list.unshift(word)
  return list.join(' ')
};

var str = "  hello  0 1  world!  "
var res = reverseWords(str)
console.log(res)