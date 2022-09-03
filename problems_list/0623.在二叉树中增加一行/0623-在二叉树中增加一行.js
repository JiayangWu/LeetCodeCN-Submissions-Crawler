var addOneRow = function(root, val, depth) {
    if (depth === 1) {
        return new TreeNode(val, root, null);
    }
    let curLevel = [];
    curLevel.push(root);
    for (let i = 1; i < depth - 1; i++) {
        const tmp = [];
        for (const node of curLevel) {
            if (node.left) {
                tmp.push(node.left);
            }
            if (node.right) {
                tmp.push(node.right);
            }
        }
        curLevel = tmp;
    }
    for (const node of curLevel) {
        node.left = new TreeNode(val, node.left, null);
        node.right = new TreeNode(val, null, node.right);
    }
    return root;
};