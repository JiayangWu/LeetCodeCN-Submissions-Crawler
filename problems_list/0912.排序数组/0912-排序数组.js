/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let n=nums.length;
    let tmp=new Array(n).fill(0);
    const mergeSort=function(l, r){
        if(l>=r) return;
        let m=(l+r)>>1;
        mergeSort(l, m);
        mergeSort(m+1, r);

        let [i, j, cnt]=[l, m+1, 0];
        while(i<=m && j<=r){
            if(nums[i]<=nums[j]) tmp[cnt++]=nums[i++];
            else tmp[cnt++]=nums[j++];
        }
        while(i<=m) tmp[cnt++]=nums[i++];
        while(j<=r) tmp[cnt++]=nums[j++];
        for(let i=0; i<cnt; i++) nums[i+l]=tmp[i];
    }
    mergeSort(0, n-1);
    return nums;
};