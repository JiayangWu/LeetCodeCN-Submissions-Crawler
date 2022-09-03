var heightChecker = function(heights) {
    const m = parseInt(_.max(heights));
    const cnt = new Array(m + 1).fill(0);
    for (const h of heights) {
        ++cnt[h];
    }

    let idx = 0, ans = 0;
    for (let i = 1; i <= m; ++i) {
        for (let j = 1; j <= cnt[i]; ++j) {
            if (heights[idx] !== i) {
                ++ans;
            }
            ++idx;
        }
    }
    return ans;
};