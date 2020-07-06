/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归
var preorderTraversal = function (root) {
  let result = []
  let preorderTraversalNode = node => {
    if (node) {
      result.push(node.val)
      preorderTraversalNode(node.left)
      preorderTraversalNode(node.right)
    }
  }
  preorderTraversalNode(root)
  return result
};

// 递归(es6优化版本) 时间98% 空间100%
var preorderTraversal = function (root) {
  return root ?
    [root.val, ...preorderTraversal(root.left),
    ...preorderTraversal(root.right)]
    : []
};

// 迭代
var preorderTraversal = function (root) {
  let result = [], stack = [], cur
  if (root) stack.push(root)
  while (stack.length > 0) {
    cur = stack.pop()
    result.push(cur.val)
    cur.right !== null && stack.push(cur.right)
    cur.left !== null && stack.push(cur.left)
  }
  return result
};

// *** 迭代通用方法 *** 参见94中序遍历、145后序遍历
var preorderTraversal = function (root) {
  let result = [], stack = [], cur
  if (root) stack.push(root)
  while (stack.length > 0) {
    cur = stack.pop()
    if (cur !== null) {
      if (cur.right) stack.push(cur.right)
      if (cur.left) stack.push(cur.left)
      stack.push(cur)
      stack.push(null)
    } else {
      result.push(stack.pop().val)
    }
  }
  return result
};

var root = [1, null, 2, 3]
