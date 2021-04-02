/**
 * @param {string} s
 * @return {string}
 */
function decodeString(s) {
  let strStack = []
  let numStack = []
  let res = ''
  let num = 0
  for (let c of s) {
    if (!isNaN(c)) {
      num = num * 10 + +c // 算出倍数
    } else if (c === '[') {
      numStack.push(num) // 倍数num进入栈等待
      strStack.push(res) // result串入栈
      res = ''
      num = 0
    } else if (c === ']') {
      let repeatTimes = numStack.splice(-1) // 获取拷贝次数
      res = strStack.splice(-1) + res.repeat(repeatTimes)
    } else {
      res += c
    }
  }
  return res
}
// 测试用例
decodeString('3[a2[c]]')

/** 示例 1：
  输入：s = "3[a]2[bc]"
  输出："aaabcbc"

  示例 2：
  输入：s = "3[a2[c]]"
  输出："accaccacc"

  示例 3：
  输入：s = "2[abc]3[cd]ef"
  输出："abcabccdcdcdef" 
*/
