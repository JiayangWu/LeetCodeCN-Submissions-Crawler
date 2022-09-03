/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let n2=nums.length;
    let cnt=new Map();
    for(let i=0; i<n2; i++){
        let pre=-1;
        if(cnt.has(nums[i])){
            pre=cnt.get(nums[i]);
        }else{
            pre=0;
        }
        if(pre+1>=Math.floor(n2/2)) return nums[i];
        cnt.set(nums[i], pre+1);
    }
    return -1;
};