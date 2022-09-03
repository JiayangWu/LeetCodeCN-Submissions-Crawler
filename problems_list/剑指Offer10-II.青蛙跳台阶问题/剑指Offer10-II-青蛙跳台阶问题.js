/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
    if(n<2) return 1;
    let f=new Array(n+1).fill(0);
    const MOD=1000000007;
    f[0]=1, f[1]=1;
    for(let i=2; i<=n; i++){
        f[i]=(f[i-2]+f[i-1])%MOD;
    }
    return f[n];
};