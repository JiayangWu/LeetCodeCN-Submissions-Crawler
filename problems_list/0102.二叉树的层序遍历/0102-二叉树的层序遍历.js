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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    let ans=[], queue=[];
    queue.push(root);
    while(queue.length){
        let len=queue.length;
        let layer=[];
        for(let i=0; i<len; i++){
            let node=queue[0];
            layer.push(node.val);
            queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        ans.push(layer);
    }
    return ans;
};