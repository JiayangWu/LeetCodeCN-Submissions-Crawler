/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let n=nums.length;
    let l=0, r=n-1;
    while(l<=r){
        let m=((l+r)/2)|0;
        if(nums[m]==target) return m;
        if(nums[0]<=nums[m]){
            if(nums[0]<=target && target<nums[m]){
                r=m-1;
            }else{
                l=m+1;
            }
        }else{
            if(nums[m]<target && nums[n-1]>=target){
                l=m+1;
            }else{
                r=m-1;
            }
        }
    }
    return -1;
};