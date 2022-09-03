/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
    let n=nums.length;
    let atMostK=function(K){
        let mp=new Map();
        let ans=0;
        for(let l=0, r=0; r<n; r++){
            if(!mp.has(nums[r])){
                K--;
                mp.set(nums[r], 1);
            }else{
                let val=mp.get(nums[r]);
                mp.set(nums[r], val+1);
            }
            while(K<0){
                let val=mp.get(nums[l]);
                val--;
                if(val==0){
                    K++;
                    mp.delete(nums[l]);
                }else{
                    mp.set(nums[l], val);
                }
                l++;
            }
            ans+=r-l+1;
        }
        return ans;
    }
    return atMostK(k)-atMostK(k-1);
};