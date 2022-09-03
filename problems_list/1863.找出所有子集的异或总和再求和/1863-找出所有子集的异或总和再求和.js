/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    const n=nums.length;
    let ans=0;
    for(let i=0; i<(1<<n); i++){
        let curSum=0, curVal=i, index=0;
        while(curVal){
            if(curVal&1) curSum^=nums[index];
            index++;
            curVal>>=1;
        }
        ans+=curSum;
    }
    return ans;
};