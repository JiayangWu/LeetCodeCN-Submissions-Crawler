/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    const n=nums.length;
    for(let i=0; i<n;){
        if(nums[i]===i){
            i++;
            continue;
        }

        let ni=nums[i];
        if(nums[ni]===ni) return ni;

        [nums[i], nums[ni]]=[nums[ni], ni];
    }
    // console.log(nums);
    return -1;
};