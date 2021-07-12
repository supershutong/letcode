/**
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
    本题中，一棵高度平衡二叉树定义为：
    一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/** 方法一：自底至顶
 * 解题思路： 利用后续遍历二叉树（左右根），从底至顶返回子树最大高度，判定每个子树是不是平衡树 ，
 * 如果平衡，则使用它们的高度判断父节点是否平衡，并计算父节点的高度，如果不平衡，返回 -1 。
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * 时间复杂度 O(n)，空间复杂度 O(n)
 */
var isBalanced = function (root) {
  return balanced(root) !== -1
}

function balanced(node) {
  if (!node) return 0
  const left = balanced(node.left)
  const right = balanced(node.right)
  if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
    return -1
  }
  return Math.max(left, right) + 1
}
