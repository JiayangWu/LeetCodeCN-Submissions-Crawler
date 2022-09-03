/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l=0, r=nums.length;
    while(l<=r){
        let mid=(l+r)>>1;
        if(nums[mid]==target) return mid;
        else if(nums[mid]<target) l=mid+1;
        else r=mid-1;
    }
    return r+1;
};