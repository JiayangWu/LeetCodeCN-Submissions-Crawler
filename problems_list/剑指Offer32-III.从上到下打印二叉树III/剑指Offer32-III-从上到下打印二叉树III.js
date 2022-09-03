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
    let ans=[];
    let q=[root];
    let cnt=0;
    while(q.length){
        let level=[];
        let n=q.length;
        for(let i=0; i<n; i++){
            let node=q.shift();
            level.push(node.val);
            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right);
        }
        if(cnt%2) level.reverse();
        ans.push(level);
        cnt++;
    }
    return ans;
};