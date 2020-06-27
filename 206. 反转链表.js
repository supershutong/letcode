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
// 方法一 暴力迭代（自行完成）
var reverseList = function (head) {
  if (!head.next) return head
  let list = head, newNode = head.next, temp
  list.next = null
  while (newNode) {
    temp = newNode
    newNode = newNode.next
    temp.next = list
    list = temp
  }
  return list
};

// 方法一 迭代: 时间 O(n)，空间 O(1)
var reverseList = function (head) {
  let [prev, cur] = [null, head]
  while (cur) {
    [cur.next, prev, cur] = [prev, cur, cur.next]
  }
  return prev
};

// 方法二 递归：逐一断开、反转节点
var reverseList = function (head) {
  if (!head || !head.next) return head
  let next = head.next
  let newHead = reverseList(next)
  head.next = null
  next.next = head
  return newHead
}

// 方法三 尾递归：顺移更新prev,cur,next
var reverseList = function (head) {
  let reverse = (prev, cur) => {
    if (!cur) return prev
    let next = cur.next
    cur.next = prev
    return reverse(cur, next)
  }
  return reverse(null, head)
}

import { initList } from './21. 0.链表实现.js'

let list = initList()
list.push(222)
list.push(333)
list.push(444)
list.unshift(111)
// list.cycle(0)
// console.log(new Date().getTime(), list)
let res = reverseList1(list.head)
console.log('----', res)
