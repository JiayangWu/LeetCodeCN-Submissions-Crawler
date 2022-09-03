/**
 * @param {number} n
 * @return {number}
 */
var countOrders = function(n) {
    const MOD=1000000007;
    let ans=new Array(n+1).fill(0);
    ans[1]=1;
    for(let i=2; i<=n; i++){
        ans[i]=ans[i-1]*(2*i-1)%MOD*i%MOD;
    }
    return ans[n];
};