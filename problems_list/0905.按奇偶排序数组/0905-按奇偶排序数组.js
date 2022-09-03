/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    var l=0, r=nums.length-1;
    while(l<r){
        while(l<r && nums[l]%2==0){
            l++;
        }
        while(l<r && nums[r]%2==1){
            r--;
        }
        if(l<r){
            var tmp=nums[l];
            nums[l]=nums[r];
            nums[r]=tmp;
        }
    }
    return nums;
};