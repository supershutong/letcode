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
// *** 迭代通用方法 *** 参见94中序遍历、144前序遍历
var postorderTraversal = function (root) {
  let result = [], stack = [], cur
  if (root) stack.push(root)
  while (stack.length > 0) {
    cur = stack.pop()
    if (cur === null) {
      result.push(stack.pop().val)
    } else {
      stack.push(cur)
      stack.push(null)
      if (cur.right) stack.push(cur.right)
      if (cur.left) stack.push(cur.left)
    }
  }
  return result
};
