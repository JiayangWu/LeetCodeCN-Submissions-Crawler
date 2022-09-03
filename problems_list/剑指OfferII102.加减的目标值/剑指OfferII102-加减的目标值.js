var findTargetSumWays = function(nums, target) {
    let sum = 0;
    for (const num of nums) {
        sum += num;
    }
    const diff = sum - target;
    if (diff < 0 || diff % 2 !== 0) {
        return 0;
    }
    const n = nums.length, neg = diff / 2;
    const dp = new Array(n + 1).fill(0).map(() => new Array(neg + 1).fill(0));
    dp[0][0] = 1;
    for (let i = 1; i <= n; i++) {
        const num = nums[i - 1];
        for (let j = 0; j <= neg; j++) {
            dp[i][j] = dp[i - 1][j];
            if (j >= num) {
                dp[i][j] += dp[i - 1][j - num];
            }
        }
    }
    return dp[n][neg];
};