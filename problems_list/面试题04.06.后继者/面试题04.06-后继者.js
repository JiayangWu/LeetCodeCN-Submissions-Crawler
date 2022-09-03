/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var dfs=(root, nodes)=>{
    if(root==null) return;
    dfs(root.left, nodes);
    nodes.push(root);
    dfs(root.right, nodes);
}

var inorderSuccessor = function(root, p) {
    var nodes=[];
    dfs(root, nodes);
    // console.log(nodes);
    for(let i=1;i<nodes.length;i++){
        // console.log(nodes[i-1]);
        if(nodes[i-1].val==p.val) return nodes[i];
    }
    return null;
};