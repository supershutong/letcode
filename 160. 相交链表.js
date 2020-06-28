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
// 双指针 空间 O(1)
var getIntersectionNode = function (headA, headB) {
  let pA = headA, pB = headB
  while (pA !== pB) {
    pB = pB ? pB.next : headA;
    pA = pA ? pA.next : headB;
  }
  return pA
}

// 标记法 空间 O(n)
var getIntersectionNode = function (headA, headB) {
  while (headA) {
    headA.flag = true
    headA = headA.next
  }
  while (headB) {
    if (headB.flag) return headB
    headB = headB.next
  }
}
