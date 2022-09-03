/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let m=coins.length;
    coins.sort((a, b)=>a-b);
    let dp=new Array(m).fill(0).map(x=>new Array(amount+1).fill(10010));

    for(let i=0; i<=amount; i++){
        if(i%coins[0]===0){
            dp[0][i]=Math.floor(i/coins[0]);
        }
    }
    for(let i=0; i<m; i++) dp[i][0]=0;

    for(let i=1; i<m; i++){
        for(let j=1; j<=amount; j++){
            dp[i][j]=dp[i-1][j];
            // if(j>=coins[i]) dp[i][j]=Math.min(dp[i][j], dp[i-1][j-coins[i]]);
            if(j>=coins[i]) dp[i][j]=Math.min(dp[i][j], dp[i][j-coins[i]]+1);
        }
    }
    // console.log(dp);
    return dp[m-1][amount]===10010?-1:dp[m-1][amount];
};