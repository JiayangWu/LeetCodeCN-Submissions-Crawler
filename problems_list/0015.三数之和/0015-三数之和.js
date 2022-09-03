/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums.length<3) return [];
    let ans=[], n=nums.length;
    nums.sort((a, b)=>a-b);
    for(let l=0; l<n-2; l++){
        while(l>0 && nums[l-1]===nums[l]) l++;
        let tar=-nums[l];
        let m=l+1, r=n-1;
        while(m<r){
            while(m>l+1 && m<r && nums[m]===nums[m-1]) m++;
            while(r<n-1 && m<r && nums[r]===nums[r+1]) r--;
            if(m>=r) break;
            let sum=nums[m]+nums[r];
            // console.log(l, m, r, sum);
            if(sum>tar) r--;
            else if(sum<tar) m++;
            else{
                ans.push([nums[l], nums[m], nums[r]]);
                m++, r--;
            }
        }
    }
    return ans;
};