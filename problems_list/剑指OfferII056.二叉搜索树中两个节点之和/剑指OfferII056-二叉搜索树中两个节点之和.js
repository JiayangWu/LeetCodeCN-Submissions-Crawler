/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */

var dfs=function(root, st, k){
    if(root==null) return false;

    if(st.has(k-root.val)){
        return true;
    }
    st.add(root.val);
    return dfs(root.right, st, k) || dfs(root.left, st, k);
}

var findTarget = function(root, k) {
    var st=new Set();
    return dfs(root, st, k);    
};