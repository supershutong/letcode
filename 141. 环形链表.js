import { initList } from './21. 0.链表实现.js'

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
/**
 * 方法一 哈希表
 * 哈希表存遍历过的节点，当前节点若在哈希表中，则成环
 * 时间 O(n)，空间 O(n)
 * 优点：哈希表可存储成环position，缺点：空间 O(n)
 */
var hasCycle = function (head) {
  let map = new Map(), pos = 0
  while (head) {
    if (map.has(head)) {
      return map.get(head)
    }
    map.set(head, pos)
    head = head.next
    pos++
  }
  return -1
};

/**
 * 方法二 快慢指针
 * 只要有环，快慢指针总会相遇，否则快指针总会先到终点
 * 时间 O(n)，空间 O(1)
 * 优点：空间 O(1)，缺点：无法获取position
 */
var hasCycle = function (head) {
  if (!head || !head.next) return false
  let fast = head.next.next,
    slow = head.next
  while (fast !== slow) {
    if (!fast || !fast.next) return false
    fast = fast.next.next
    slow = slow.next
  }
  return true
};

let list = initList()
list.push(222)
// list.push(333)
// list.push(444)
// list.unshift(111)
// list.cycle(0)
// console.log(new Date().getTime(), list)
let res = hasCycle(list.head)
console.log('----', res)
// console.log(new Date().getTime(), list)