var minFlipsMonoIncr = function(s) {
    const n = s.length;
    let dp0 = 0, dp1 = 0;
    for (let i = 0; i < n; i++) {
        const c = s[i];
        let dp0New = dp0, dp1New = Math.min(dp0, dp1);
        if (c === '1') {
            dp0New++;
        } else {
            dp1New++;
        }
        dp0 = dp0New;
        dp1 = dp1New;
    }
    return Math.min(dp0, dp1);
};