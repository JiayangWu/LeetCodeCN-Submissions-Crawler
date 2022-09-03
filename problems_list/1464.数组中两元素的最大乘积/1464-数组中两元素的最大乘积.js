var maxProduct = function(nums) {
    nums.sort((a, b) => a - b);
    console.log(nums)
    return (nums[nums.length - 1] - 1) * (nums[nums.length - 2] - 1);
};