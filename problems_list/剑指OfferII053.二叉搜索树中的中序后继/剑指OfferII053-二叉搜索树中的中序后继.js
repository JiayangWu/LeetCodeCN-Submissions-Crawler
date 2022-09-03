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
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    let cur=root
    let res=null
    while(cur){
        if(cur.val>p.val){
            res=cur
            cur=cur.left
        }else{
            cur=cur.right
        }
    }
    return res
};