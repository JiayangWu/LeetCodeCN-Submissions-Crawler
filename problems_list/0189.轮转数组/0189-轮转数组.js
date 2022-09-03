/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n=nums.length;
    k=k%n;
    const reverseSome=function(l, r){
        while(l<r){
            [nums[l], nums[r]]=[nums[r], nums[l]];
            l++, r--;
        }
    }
    reverseSome(0, n-1);
    reverseSome(0, k-1);
    reverseSome(k, n-1);
    
};