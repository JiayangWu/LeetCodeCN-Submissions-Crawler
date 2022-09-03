/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let n=nums.length;
    let dp=new Array(n).fill(0);
    [dp[0], dp[1]] = [nums[0], Math.max(nums[0], nums[1])]
    for(let i=2; i<n; i++){
        dp[i]=Math.max(dp[i-1], dp[i-2]+nums[i]);
    }
    return dp[n-1];
};