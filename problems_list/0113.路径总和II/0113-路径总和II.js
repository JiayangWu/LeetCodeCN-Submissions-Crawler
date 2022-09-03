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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let ans=[], path=[];
    const dfs=function(root, tar){
        if(!root) return;
        tar-=root.val;
        path.push(root.val);

        if(tar===0 && !root.left && !root.right) ans.push([...path]);
        dfs(root.left, tar);
        dfs(root.right, tar);
        path.pop();
    }
    dfs(root, targetSum);
    return ans;
};