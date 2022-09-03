/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    let queue=[], ans=[];
    queue.push(root);
    while(queue.length){
        let node=queue.shift();
        ans.push(node.val);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
    return ans;
};