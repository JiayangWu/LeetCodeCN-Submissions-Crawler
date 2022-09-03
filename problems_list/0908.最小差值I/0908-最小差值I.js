/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    var n=nums.length;
    nums.sort((a, b)=>a-b);
    var mn=nums[0], mx=nums[n-1];

    return mx - mn <= 2 * k ? 0 : mx - mn - 2 * k;
};