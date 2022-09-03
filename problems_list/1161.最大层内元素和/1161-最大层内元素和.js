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
var maxLevelSum = function(root) {
    let queue=[], idx=1, ans=-1, mxSum=-Infinity;

    queue.push(root);
    while(queue.length){
        let level=queue.length;
        let curSum=0;
        
        queue.forEach((node)=>curSum+=node.val);

        if(curSum>mxSum){
            mxSum=curSum;
            ans=idx;
        }

        for(let i=0; i<level; i++){
            let node=queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        idx++;
    }
    return ans;
};