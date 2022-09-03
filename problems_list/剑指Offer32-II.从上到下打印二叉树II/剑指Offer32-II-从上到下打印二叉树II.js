/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    let queue=[], ans=[];
    queue.push(root);
    while(queue.length){
        let level=queue.length;
        let layer=[];
        for(let i=0; i<level; i++){
            let node=queue.shift();
            layer.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        ans.push(layer);
    }
    return ans;
};