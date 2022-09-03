var maximumWealth = function(accounts) {
    let maxWealth = -Number.MAX_VALUE;
    for (const account of accounts) {
        maxWealth = Math.max(maxWealth, account.reduce((a, b) => a + b));
    }
    return maxWealth;
};