/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var recur=function(L, R){
    if(!L && !R) return true;
    if(!L || !R || R.val!=L.val) return false;
    return recur(L.left, R.right) && recur(L.right, R.left);
}
var isSymmetric = function(root) {
    if(root===null) return true;
    return recur(root.left, root.right);
};