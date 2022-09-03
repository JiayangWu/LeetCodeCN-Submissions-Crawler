/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    var build=function(pl, pr, il, ir){
        if(pl>pr) return null;
        let root=new TreeNode(preorder[pl]);
        let m=0;
        for(let i=il; i<=ir; i++){
            if(inorder[i]===preorder[pl]){
                m=i;
                break;
            }
        }
        root.left=build(pl+1, pl+m-il, il, m-1);
        root.right=build(pl+m-il+1, pr, m+1, ir);
        return root;
    }
    let n=preorder.length;
    return build(0, n-1, 0, n-1);
};