var arrayRankTransform = function(arr) {
    const sortedArr = new Array(arr.length).fill(0);
    sortedArr.splice(0, arr.length, ...arr);
    sortedArr.sort((a, b) => a - b);
    const ranks = new Map();
    const ans = new Array(arr.length).fill(0);
    for (const a of sortedArr) {
        if (!ranks.has(a)) {
            ranks.set(a, ranks.size + 1);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        ans[i] = ranks.get(arr[i]);
    }
    return ans;
};