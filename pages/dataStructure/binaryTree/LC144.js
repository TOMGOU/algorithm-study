/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const res = []
  const recursion = root => {
    if (!root) return
    res.push(root.val)
    recursion(root.left)
    recursion(root.right)
  }
  recursion(root)
  return res
};