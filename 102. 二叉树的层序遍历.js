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
// 广度优先通过队列处理 【深度优先用栈】
// 方法一：BFS通用模版 广度优先：迭代法 时间O(n)、空间O(n)
var levelOrder = function (root) {
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
    level.length && result.push(level)
  }
  return result
}

// 方法二 标记法，偏技巧
var levelOrder = function (root) {
  if (!root) return []
  let result = [], level = [], list = [root, null]
  while (list.length > 0) {
    const cur = list.shift()
    if (cur) {
      level.push(cur.val)
      cur.left && list.push(cur.left)
      cur.right && list.push(cur.right)
    } else { // 一层已经遍历完了
      result.push(level)
      level = []
      list.length > 0 && list.push(null)
    }
  }
  return result
}

// 方法三 递归 时间O(n),空间O(h) h为树高度
var levelOrder = function (root) {
  if (!root) return []
  let result = []
  function dfs(cur, level) {
    if (cur != null) {
      result[level] = result[level] || []
      result[level].push(cur.val)
      cur.left && dfs(cur.left, level + 1)
      cur.right && dfs(cur.right, level + 1)
    }
  }
  dfs(root, 0)
  return result
}
