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
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var btreeGameWinningMove = function(root, n, x) {
    const Count=(node)=>{
        if(!node)return 0
        const l=Count(node.left)
        const r=Count(node.right)
        return l+r+1
    }
    const isAllWin=(node)=>{
        const l=Count(node.left)
        const r=Count(node.right)
        const remainder=n-l-r-1
        return n>>1<Math.max(remainder,l,r)
    }
    const dfs=(node)=>{
        if(!node) return false;
        if(node.val==x){
            return isAllWin(node)
        }
        return dfs(node.left)||dfs(node.right)

    }
    return dfs(root)?true:false
};
