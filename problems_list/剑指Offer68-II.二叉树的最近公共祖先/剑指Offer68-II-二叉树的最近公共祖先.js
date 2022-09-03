/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const getPath=function(root, tar, path){
    if(!root) return false;
    path.push(root);
    if(root===tar) return true;
    if(getPath(root.left, tar, path)) return true;
    if(getPath(root.right, tar, path)) return true;
    path.pop();
    return false;
}

var lowestCommonAncestor = function(root, p, q) {
    let pathA=[], pathB=[];
    let i=0;
    getPath(root, p, pathA);
    getPath(root, q, pathB);
    for(;i<pathA.length && i<pathB.length; i++){
        if(pathA[i]!==pathB[i])
            return pathA[i-1];
    }
    return pathA[i-1];
};