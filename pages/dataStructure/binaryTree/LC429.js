/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var inorderTraversal = function(root) {
  const res = []
  let index = 0
  const recursion = (root, index) => {
    if (!root) return
    if (!res[index]) res[index] = []
    res[index].push(root.val)
    for (let item of root.children) {
      recursion(item, index + 1)
    }
  }
  recursion(root, index)
  return res
};
