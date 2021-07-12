/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b) // 排序
  let res = []
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] > 0) break // 若当前数大于0，则三数之和一定大于0，所以结束循环
    if (nums[i] === nums[i - 1]) continue // 去重
    let L = i + 1,
      R = len - 1
    while (L < R) {
      let sum = nums[i] + nums[L] + nums[R]
      if (sum === 0) {
        res.push([nums[i], nums[L], nums[R]])
        while (nums[L] === nums[++L]) continue // 去重
      } else if (sum > 0) {
        while (nums[R] === nums[--R]) continue // 去重
      } else if (sum <= 0) {
        while (nums[L] === nums[++L]) continue // 去重
      }
    }
  }
  return res
}

var nums = [-1, 2, -2, -1, 1, 0]
let result = threeSum(nums)
console.log(result)
