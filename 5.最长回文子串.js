/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let n = s.length
  let res = ''
  let dp = Array.from(Array(n), () => Array(n).fill(0))
  console.log(dp)
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i + 1][j - 1])
      if (dp[i][j] && j - i + 1 > res.length) {
        res = s.substring(i, j + 1)
      }
    }
  }
  console.log(res)
  return res
}
longestPalindrome('bbbab')
