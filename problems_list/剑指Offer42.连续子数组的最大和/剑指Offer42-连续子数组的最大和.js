/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const n=nums.length;
    let dp=new Array(n).fill(0);
    let ans=nums[0];
    dp[0]=nums[0];
    for(let i=1; i<n; i++){
        dp[i]=nums[i];
        if(dp[i-1]>0) dp[i]+=dp[i-1];
        ans=Math.max(dp[i], ans);
    }
    return ans;
};