/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let [sum, ans]=[0, 1000000010];
    for(let l=0, r=0; r<nums.length; r++){
        sum+=nums[r];
        while(l<=r && sum>=target){
            ans=Math.min(ans, r-l+1);
            sum-=nums[l];
            l++;
        }
    }
    return ans===1000000010?0:ans;
};