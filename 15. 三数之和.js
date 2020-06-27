/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  let res = []
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] > 0) break
    if (nums[i] === nums[i - 1]) continue
    let L = i + 1, R = len - 1;
    while (L < R) {
      let sum = nums[i] + nums[L] + nums[R]
      if (sum === 0) {
        res.push([nums[i], nums[L], nums[R]])
        while (nums[L] === nums[++L]) continue
      } else if (sum > 0) {
        while (nums[R] === nums[--R]) continue
      } else if (sum < 0) {
        while (nums[L] === nums[++L]) continue
      }
    }
  }
  return res
};

var nums = [-1, 2, -2, -1, 1, 0]
threeSum(nums)