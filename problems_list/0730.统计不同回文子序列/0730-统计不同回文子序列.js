var countPalindromicSubsequences = function(s) {
    const MOD = 1000000007;
    const n = s.length;
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
    const next = new Array(n).fill(0).map(() => new Array(4).fill(0));
    const pre = new Array(n).fill(0).map(() => new Array(4).fill(0));

    for (let i = 0; i < n; i++) {
        dp[i][i] = 1;
    }

    const pos = new Array(n);
    pos[0] = pos[1] = pos[2] = pos[3] = -1;

    for (let i = 0; i < n; i++) {
        for (let c = 0; c < 4; c++) {
            pre[i][c] = pos[c];
        }
        pos[s[i].charCodeAt() - 'a'.charCodeAt()] = i;
    }

    pos[0] = pos[1] = pos[2] = pos[3] = n;

    for (let i = n - 1; i >= 0; i--) {
        for (let c = 0; c < 4; c++) {
            next[i][c] = pos[c];
        }
        pos[s[i].charCodeAt() - 'a'.charCodeAt()] = i;
    }

    for (let len = 2; len <= n; len++) {
        for (let i = 0; i + len <= n; i++) {
            let j = i + len - 1;
            if (s[i] === s[j]) {
                let low = next[i][s[i].charCodeAt() - 'a'.charCodeAt()];
                let high = pre[j][s[i].charCodeAt() - 'a'.charCodeAt()];
                if (low > high) {
                    dp[i][j] = (2 + dp[i + 1][j - 1] * 2) % MOD;
                } else if (low === high) {
                    dp[i][j] = (1 + dp[i + 1][j - 1] * 2) % MOD;
                } else {
                    dp[i][j] = (dp[i + 1][j - 1] * 2 % MOD - dp[low + 1][high - 1] + MOD) % MOD;
                }
            } else {
                dp[i][j] = ((dp[i + 1][j] + dp[i][j - 1]) % MOD - dp[i + 1][j - 1] + MOD) % MOD;
            }
        }
    }

    return dp[0][n - 1];
};