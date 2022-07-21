/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const res = []
  const recursion = root => {
    if (!root) return
    recursion(root.left)
    res.push(root.val)
    recursion(root.right)
  }
  recursion(root)
  return res
};