var isMatch = function(s, p) {
    const sLen = s.length, pLen = p.length;
    // 状态转移矩阵
    const dp = Array.from({
        length: sLen + 1
    }, _ => new Array(pLen + 1).fill(false));
    // 初始化基本情况
    dp[0][0] = true;
    for (let j = 1; j < pLen + 1; ++j) {
        if (p[j - 1] == "*") {
            dp[0][j] = dp[0][j - 2];
        }
    }
    // 执行状态转移方程
    for (let i = 1; i < sLen + 1; ++i) {
        for (let j = 1; j < pLen + 1; ++j) {
            if (s[i - 1] == p[j - 1] || p[j - 1] == ".") {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] == "*") {
                if (s[i - 1] == p[j - 2] || p[j - 2] == ".") {
                    dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j];
                } else {
                    dp[i][j] = dp[i][j - 2];
                }
            }
        }
    }
    return dp[sLen][pLen];
};