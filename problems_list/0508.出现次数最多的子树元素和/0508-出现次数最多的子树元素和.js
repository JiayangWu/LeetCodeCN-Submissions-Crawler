var findFrequentTreeSum = function(root) {
    const cnt = new Map();
    let maxCnt = 0;

    const dfs = (node) => {
        if (!node) {
            return 0;
        }
        const sum = node.val + dfs(node.left) + dfs(node.right);
        cnt.set(sum, (cnt.get(sum) || 0) + 1);
        maxCnt = Math.max(maxCnt, cnt.get(sum));
        return sum;
    }

    dfs(root);
    const list = [];
    for (const [s, c] of cnt.entries()) {
        if (c === maxCnt) {
            list.push(s);
        }
    }
    const ans = new Array(list.length);
    for (let i = 0; i < list.length; ++i) {
        ans[i] = list[i];
    }
    return ans;
};