/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let st=1, ed=1, n=nums.length;
    if(n===0) return 0;
    for(; ed<n ;ed++){
        if(nums[ed-1]!==nums[ed]){
            nums[st]=nums[ed];
            st++;
        }
    }
    return st;
};