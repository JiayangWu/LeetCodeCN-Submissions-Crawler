/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    var n=coins.length;
    var dp=new Array(amount+1).fill(amount+1);
    dp[0]=0;
    for(let i=1; i<=amount; i++){
        for(let j=0; j<coins.length; j++){
            if(i>=coins[j]){
                dp[i]=(dp[i]<dp[i-coins[j]]+1?dp[i]:dp[i-coins[j]]+1);
            }
        }
    }
    return dp[amount]>amount?-1:dp[amount];
};