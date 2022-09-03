/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    function quick_sort(l, r, k){
        if(l>=r) return nums[l];
        let i=l, j=r, x=nums[l+r>>1];
        while(1){
            while(nums[i]<x) i++;
            while(nums[j]>x) j--;
            if(i>=j) break;
            
            let t=nums[i];
            nums[i]=nums[j];
            nums[j]=t;
            i++, j--;
        }
        let sl=j-l+1;
        if(sl>=k) return quick_sort(l, j, k);
        else return quick_sort(j+1, r, k-sl);
    }
    return quick_sort(0, nums.length-1, nums.length-k+1);
};