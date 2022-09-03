var mirrorTree = function(root) {
    if(!root) return null;
    let ml=mirrorTree(root.left);
    let mr=mirrorTree(root.right);
    root.right=ml;
    root.left=mr;
    return root;
};