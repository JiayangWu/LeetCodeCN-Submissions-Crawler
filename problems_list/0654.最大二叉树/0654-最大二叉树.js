/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    let l=0, r=nums.length-1;
    function dfs(l, r){
        if(l>r){
            return null;
        }
        let mx=-1, p=-1;
        for(let i=l; i<=r; i++){
            if(nums[i]>mx){
                mx=nums[i];
                p=i;
            }
        }
        let Root=new TreeNode(mx);
        Root.left=dfs(l, p-1);
        Root.right=dfs(p+1, r);
        return Root;
    }
    return dfs(l, r);
};