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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function(root, target) {
    let ans=[], path=[];
    let dfs=function(root, tar){
        if(!root) return;

        path.push(root.val);
        if(root.val===tar && !root.left && !root.right){
            ans.push([...path]);
        }
        dfs(root.left, tar-root.val);
        dfs(root.right, tar-root.val);
        path.pop();
    }

    dfs(root, target);
    return ans;
};