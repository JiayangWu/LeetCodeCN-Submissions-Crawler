var numRabbits = function(answers) {
    const count = new Map();
    for (const y of answers) {
        count.set(y, (count.get(y) || 0) + 1);
    }
    let ans = 0;
    for (const [y, x] of count.entries()) {
        ans += Math.floor((x + y) / (y + 1)) * (y + 1);
    }
    return ans;
};