/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let res = []
  let temp = new Set(nums1)
  nums2.map(item => {
    if (temp.has(item)) {
      res.push(item)
      temp.delete(item)
    }
  })
  return res
};

// // es6
// var intersection = function (nums1, nums2) {
//   return [...new Set(nums1)].filter(x => new Set(nums2).has(x))
// };

// var nums1 = [1, 2, 2, 1], nums2 = [2, 2]
var nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
let a = intersection(nums1, nums2)
console.log(a)