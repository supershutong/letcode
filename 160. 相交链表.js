/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  console.log(headA, headB)
  let pA = headA, pB = headB
  // 循环长短链表，清除长度差
  while (pA || pB) {
    if (pA === pB) return pA
    pA = pA ? pA.next : headB
    pB = pB ? pB.next : headA
  }
  return null
};


import { initList } from './21. 0.链表实现.js'

let headA = initList(), headB = initList()
headA.push(5)
headA.push(4)
headA.push(3)
headA.push(2)

headB.push(11)
headB.push(3)
headB.push(2)

let res = getIntersectionNode(headA.head, headB.head)
console.log('----', res)
