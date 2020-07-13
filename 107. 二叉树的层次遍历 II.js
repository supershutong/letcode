/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 迭代
var levelOrderBottom = function (root) {
  let result = [], list = [root]
  while (list.length) {
    let len = list.length, level = [], cur
    while (len--) {
      cur = list.shift()
      if (cur !== null) {
        level.push(cur.val)
        cur.left !== null && list.push(cur.left)
        cur.right !== null && list.push(cur.right)
      }
    }
    level.length && result.unshift(level)
  }
  return result
};

// 递归
var levelOrderBottom = function (root) {
  let result = []
  function dfs(node, level) {
    if (node !== null) {
      !result[level] && result.push([])
      result[level].push(node.val)
      node.left && dfs(node.left, level + 1)
      node.right && dfs(node.right, level + 1)
    }
  }
  dfs(root, 0)
  return result.reverse()
}
