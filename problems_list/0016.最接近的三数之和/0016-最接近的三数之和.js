/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let n=nums.length;
    nums.sort((a,b)=>a-b);
    let dis=20010, ans=-1;

    for(let i=0; i<n-2; i++){
        let l=i+1, r=n-1;
        let tar=target-nums[i];
        while(l<r){
            let sum=nums[l]+nums[r];
            if(Math.abs(sum-tar)<dis) dis=Math.abs(sum-tar), ans=sum+nums[i];

            if(sum>tar) r--;
            else if(sum<tar) l++;
            else return target;
        }
    }
    return ans;
};