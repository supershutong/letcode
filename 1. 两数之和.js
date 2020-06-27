/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/** 哈希表+循环，时间复杂度和空间复杂度平衡的最优解 */
var twoSum = function (nums, target) {
  let hash = {}
  let minus
  for (let i = 0, len = nums.length; i < len; i++) {
    minus = target - nums[i]
    if (hash[minus] !== undefined) {
      return [hash[minus], i]
    }
    hash[nums[i]] = i
  }
};

/** 尾递归调用优化，时间复杂度下降，空间复杂度上升 */
var twoSum = function (nums, target, i = 0, maps = {}) {
  const map = maps
  if (map[target - nums[i]] >= 0) {
    return [map[target - nums[i]], i]
  } else {
    map[nums[i]] = i;
    i++;
    if (i < nums.length) {
      return twoSum(nums, target, i, map)
    }
  }
}

var nums = [2, 3, 4, 3, 4], target = 6
let res = twoSum(nums, target)
console.log(res)