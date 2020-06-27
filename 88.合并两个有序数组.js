/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let len = m + n
  while (n > 0) {
    if (m === 0) {
      nums1.splice(0, n, ...nums2.slice(0, n))
      break
    }
    nums1[--len] = nums1[m - 1] > nums2[n - 1] ? nums1[--m] : nums2[--n]
  }
};


/** test */
var nums1 = [-4, 6, 7, 0, 0, 0, 0], m = 3,
  nums2 = [1, 2, 5, 6], n = 4

merge(nums1, m, nums2, n)
console.log(nums1)