/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const res = []
  const recursion = root => {
    if (!root) return
    for (let item of root.children) {
      recursion(item)
    }
    res.push(root.val)
  }
  recursion(root)
  return res
};