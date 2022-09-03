/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let l=0, r=nums.length-1;
    while(l<r){
        let m=(l+r)>>1;
        if(nums[m]<nums[m+1]){
            l=m+1;
        }else{
            r=m;
        }
    }
    return l;
};