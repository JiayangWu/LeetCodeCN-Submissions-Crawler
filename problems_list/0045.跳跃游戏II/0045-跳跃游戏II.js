/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var step=0, end=0, maxPos=0, n=nums.length;
    for(let i=0; i<n; i++){
        maxPos=Math.max(maxPos, i+nums[i]);
        if(i==n-1) break;
        if(i==end){
            end=maxPos;
            step++;
        }
    }
    return step;
};