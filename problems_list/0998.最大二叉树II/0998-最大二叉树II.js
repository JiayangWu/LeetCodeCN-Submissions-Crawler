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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoMaxTree = function(root, val) {
    let as=[];
    function dfs(root){
        if(!root) return;
        
        dfs(root.left);
        as.push(root.val);
        dfs(root.right);
    }

    dfs(root);
    as.push(val);

    function getTree(l, r){
        if(l>r) return null;
        
        let idx=l;
        for(let i=l+1; i<=r; i++){
            if(as[i]>as[idx]){
                idx=i;
            }
        }

        let root=new TreeNode(as[idx]);
        root.left=getTree(l, idx-1);
        root.right=getTree(idx+1, r);

        return root;
    }
    let ans=getTree(0, as.length-1);
    return ans;
};