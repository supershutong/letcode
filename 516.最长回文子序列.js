/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  let n = s.length
  let dp = Array.from(Array(n), () => Array(n))
  for (let i = 0; i < n; i++) {
    dp[i][i] = 1
  }
  for (let i = 0; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (s.charAt(i) === s.charAt(j)) {
        if (j === i - 1) {
          dp[j][i] = 2
        } else {
          dp[j][i] = dp[j + 1][i - 1] + 2
        }
      } else {
        dp[j][i] = Math.max(dp[j + 1][i], dp[j][i - 1])
      }
    }
  }
  // console.log(dp, dp[0][n - 1])
  return dp[0][n - 1]
}

longestPalindromeSubseq('bbbab')
