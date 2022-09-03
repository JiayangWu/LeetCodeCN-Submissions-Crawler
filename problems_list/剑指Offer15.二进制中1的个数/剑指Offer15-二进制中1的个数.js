var hammingWeight = function(n) {
    let ret = 0;
    while (n) {
        n &= n - 1;
        ret++;
    }
    return ret;
};