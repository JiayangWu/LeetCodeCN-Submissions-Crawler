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
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    let ans=-1;
    let queue=[root];
    while(queue.length){
        let n=queue.length;
        for(let i=0; i<n; i++){
            let node=queue[0];
            queue.shift();
            if(i===0) ans=node.val;
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    return ans;
};