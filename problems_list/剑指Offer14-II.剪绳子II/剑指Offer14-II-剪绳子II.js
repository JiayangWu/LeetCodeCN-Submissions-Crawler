/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
    if (n <= 3) {
        return n - 1;
    }
    const MOD = BigInt(1000000007);
    const a = BigInt(Math.floor(n / 3));
    const b = BigInt(n % 3);
    const get = ((x, a, mod) => {
        let res = 1n;
        while (a > 0n) {
            // console.log(x, a, res, mod)
            if (a % 2n === 1n) {
                res = (res * x) % mod;
            }
            x = (x * x) % mod;
            a = a % 2n === 1n ? (a - 1n) / 2n : a / 2n;
        }
        return res;
    })
    if (b === 0n) {
        return get(3n, a, MOD);
    } else if (b === 1n) {
        return (get(3n, a - 1n, MOD) * 4n) % MOD;
    } else if (b === 2n) {
        return (get(3n, a, MOD) * 2n) % MOD;
    }
};