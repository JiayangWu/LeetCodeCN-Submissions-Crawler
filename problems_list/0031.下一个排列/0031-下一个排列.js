/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let n=nums.length, i=n-2;
    while(i>=0 && nums[i]>=nums[i+1]) i--;
    if(i>=0){
        for(let j=n-1; j>i; j--){
            if(nums[j]>nums[i]){
                let tmp=nums[i];
                nums[i]=nums[j];
                nums[j]=tmp;
                break;
            }
        }
    }
    for(let l=i+1, r=n-1; l<r; l++, r--){
        let tmp=nums[l];
        nums[l]=nums[r];
        nums[r]=tmp;
    }
};