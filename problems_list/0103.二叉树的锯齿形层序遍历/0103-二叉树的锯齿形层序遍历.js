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
var zigzagLevelOrder = function(root) {
    if(root===null) return [];
    let queue=[root], odd=0, ans=[];
    while(queue.length){
        let layer=[], n=queue.length;
        for(let i=0; i<n; i++){
            let node=queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
            layer.push(node.val);
        }
        if(odd%2) layer.reverse();
        odd++;
        ans.push(layer);
    }
    return ans;
};