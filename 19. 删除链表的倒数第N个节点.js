/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let fast = head, slow = head
  while (--n) {
    fast = fast.next
  }
  if (!fast.next) return head.next
  fast = fast.next
  while (fast && fast.next) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return head
};

import { initList } from './21. 0.链表实现.js'

let list = initList()
list.push(222)
// list.push(333)
// list.push(444)
list.unshift(111)
// list.cycle(0)
// console.log(new Date().getTime(), list)
let res = removeNthFromEnd(list.head, 1)
console.log('----', res)
