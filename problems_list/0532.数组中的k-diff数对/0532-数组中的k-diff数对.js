var findPairs = function(nums, k) {
    nums.sort((a, b) => a - b);
    let n = nums.length, y = 0, res = 0;
    for (let x = 0; x < n; x++) {
        if (x === 0 || nums[x] !== nums[x - 1]) {
            while (y < n && (nums[y] < nums[x] + k || y <= x)) {
                y++;
            }
            if (y < n && nums[y] === nums[x] + k) {
                res++;
            }
        }
    }
    return res;
};