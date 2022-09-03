var CBTInserter = function(root) {
    this.candidate = [];
    this.root = root;

    const queue = [];
    queue.push(root);

    while (queue.length) {
        const node = queue.shift();
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
        if (!(node.left && node.right)) {
            this.candidate.push(node);
        }
    }
};

CBTInserter.prototype.insert = function(val) {
    const child = new TreeNode(val);
    const node = this.candidate[0];
    let ret = node.val;
    if (!node.left) {
        node.left = child;
    } else {
        node.right = child;
        this.candidate.shift();
    }
    this.candidate.push(child);
    return ret;
};

CBTInserter.prototype.get_root = function() {
    return this.root;
};