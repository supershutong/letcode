/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 单指针法
var middleNode = function (head) {
  let len = 0, midNode = head, i = 0
  while (head) {
    head = head.next
    len++
  }
  // let mid = len % 2 ? Math.ceil(len / 2) : (len / 2 + 1)
  let mid = len >> 1  // 位操作，右移即除以2下取整
  while (++i < mid) {
    midNode = midNode.next
  }
  return midNode
};

// 快慢指针 快指针走到终点时慢指针刚好到中点
var middleNode = function (head) {
  let fast = head, slow = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
}


import { initList } from './21. 0.链表实现.js'

let list = initList()
list.push(222)
list.push(333)
list.push(444)
list.unshift(111)
// list.push(555)
// list.cycle(0)
// console.log(new Date().getTime(), list)
let res = middleNode(list.head)
console.log('----', res)
