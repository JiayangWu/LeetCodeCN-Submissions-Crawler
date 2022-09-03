/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    const n=nums.length;
    nums.sort((a,b)=>a-b);
    let _sum=0;
    nums.forEach(v=>_sum+=v);

    let ans=[], _tmp=0;
    for(let i=n-1; i>=0; i--){
        ans.push(nums[i]);
        _tmp+=nums[i];
        if(_tmp>_sum-_tmp) break;
    }
    return ans;
};