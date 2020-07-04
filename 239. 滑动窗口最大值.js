/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/*
  单调双端队列,deque中存储index而非值
  四步骤保证滑动窗口头部是最大值：
  1、头部出队，清理超范围；
  2、尾部清理小于当前值元素；
  3、尾部入队；
  4、返回头部，即当前窗口最大值；
*/
var maxSlidingWindow = function (nums, k) {
  let maxList = [], deque = []
  for (let i = 0, len = nums.length; i < len; i++) {
    // 队首越界删除
    if (i - k >= deque[0]) {
      deque.shift()
    }
    // 队尾小于当前值的元素删除
    while (nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop()
    }
    // 新元素压栈
    deque.push(i)
    // 队首即为目标元素
    if (i >= k - 1) {
      maxList.push(nums[deque[0]])
    }
  }
  return maxList
};

var nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
let res = maxSlidingWindow(nums, k)
console.log(res, res.length)  // [3,3,5,5,6,7]
