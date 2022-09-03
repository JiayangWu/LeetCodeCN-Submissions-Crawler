/**
 * @param {number[]} nums
 * @return {number}
 */

var lengthOfLIS = function(nums) {
    let n=nums.length, len=1;
    if(n===0) return 0;

    let dp=new Array(n+1).fill(0);
    dp[len]=nums[0];
    for(let i=1; i<n; i++){
        if(nums[i]>dp[len]){
            len++;
            dp[len]=nums[i];
        }else{
            // 第一个大于等于 nums[i]
            let l=1, r=len, pos=0;
            while(l<=r){
                let m=Math.floor((l+r)>>1);
                if(dp[m]<nums[i]){
                    pos=m;
                    l=m+1;
                }else{
                    r=m-1;
                }
            }
            dp[pos+1]=nums[i];
        }
    }
    return len;
};