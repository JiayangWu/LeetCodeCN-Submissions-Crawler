/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let ans=[];
    let n=nums.length;
    for(let i=0; i<Math.pow(2, n); i++){
        let curPerm=[];
        let idx=i;
        for(let j=0; j<n; j++){
            if(idx&1){
                curPerm.push(nums[j]);
            }
            idx>>=1;
        }
        ans.push([...curPerm]);
    }
    return ans;
};