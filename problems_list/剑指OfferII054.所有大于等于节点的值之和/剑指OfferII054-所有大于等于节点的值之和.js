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
 * @return {TreeNode}
 */
let sum=0
var convertBST = function(root) {
    let sum=0
    const myOrder=root=>{
        if(root!=null){
            myOrder(root.right)
            sum+=root.val
            root.val=sum
            myOrder(root.left)
        }
    };
    myOrder(root)
    return root
};