/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const n=nums.length;
    if(n<2){
        return false;
    }

    let sum=0, maxNum=0;
    for(const num of nums){
        sum+=num;
        maxNum=maxNum>num?maxNum:num;
    }

    if(sum&1){
        return false;
    }

    const target=Math.floor(sum/2);
    const dp=new Array(n).fill(0).map(()=>new Array(target+1, false));

    for(let i=0; i<n; i++){
        dp[i][0]=true;
    }
    dp[0][nums[0]]=true;
    for(let i=1; i<n; i++){
        for(let j=1; j<=target; j++){
            const num=nums[i];
            if(j>=num){
                dp[i][j]=dp[i-1][j-num]|dp[i-1][j];
            }else{
                dp[i][j]=dp[i-1][j];
            }
        }
    }
    return dp[n-1][target];
};