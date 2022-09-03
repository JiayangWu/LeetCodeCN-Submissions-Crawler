/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    let n=costs.length;
    let dp=new Array(n).fill(0).map(x=>new Array(3).fill(Infinity));
    for(let i=0; i<3; i++)
        dp[0][i]=costs[0][i];
    
    for(let i=1; i<n; i++){
        for(let j=0; j<3; j++){
            for(let k=0; k<3; k++){
                if(j===k) continue;
                dp[i][j]=Math.min(dp[i][j], dp[i-1][k]+costs[i][j]);
            }
        }
    }
    let ans=Infinity;
    for(let i=0; i<3; i++){
        ans=Math.min(ans, dp[n-1][i]);
    }
    return ans;
};