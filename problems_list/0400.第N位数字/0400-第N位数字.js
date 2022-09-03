var findNthDigit = function(n) {
    let d = 1, count = 9;
    while (n > d * count) {
        n -= d * count;
        d++;
        count *= 10;
    }
    const index = n - 1;
    const start = Math.floor(Math.pow(10, d - 1));
    const num = start + Math.floor(index / d);
    const digitIndex = index % d;
    const digit = Math.floor(num / Math.floor(Math.pow(10, d - digitIndex - 1)))%10;
    return digit;
};