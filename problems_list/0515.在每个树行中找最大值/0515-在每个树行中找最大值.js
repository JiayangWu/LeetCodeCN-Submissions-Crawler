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
 * @return {number[]}
 */
var largestValues = function(root) {
    if(!root) return [];
    let ans=[], queue=[root];
    while(queue.length){
        let n=queue.length;
        let mx=-Infinity;
        for(let i=0; i<n; i++){
            let node=queue[0];
            queue.shift();
            mx=Math.max(mx, node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        ans.push(mx);
    }
    return ans;
};