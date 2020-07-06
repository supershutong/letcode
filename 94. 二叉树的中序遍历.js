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
// 递归  es6
var inorderTraversal = function (root) {
  return root ? [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)] : []
};

// *** 迭代通用方法 *** 参见144前序遍历、145后序遍历
var inorderTraversal = function (root) {
  let result = [], stack = [], cur
  if (root) stack.push(root)
  while (stack.length > 0) {
    cur = stack.pop()
    if (cur === null) {
      result.push(stack.pop().val)
    } else {
      if (cur.right) stack.push(cur.right)
      stack.push(cur)
      stack.push(null)
      if (cur.left) stack.push(cur.left)
    }
  }
  return result
};
