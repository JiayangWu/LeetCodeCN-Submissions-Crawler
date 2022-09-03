var deepestLeavesSum = function(root) {
    let sum = 0;
    const queue = [];
    queue.push(root);
    while (queue.length) {
        sum = 0;
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            sum += node.val;
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }
    return sum;
};