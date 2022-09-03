var findLongestChain = function(pairs) {
    let curr = -Number.MAX_VALUE, res = 0;
    pairs.sort((a, b) => a[1] - b[1]);
    for (const p of pairs) {
        if (curr < p[0]) {
            curr = p[1];
            res++;
        }
    }
    return res;
}