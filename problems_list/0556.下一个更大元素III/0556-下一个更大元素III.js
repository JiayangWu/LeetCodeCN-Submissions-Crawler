/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
    let nums=n.toString().split('');
    let len=nums.length, i=len-2;
    while(i>=0 && nums[i]>=nums[i+1]) i--;
    if(i<0) return -1;
    if(i>=0){
        for(let j=len-1; j>i; j--){
            if(nums[j]>nums[i]){
                let tmp=nums[i];
                nums[i]=nums[j];
                nums[j]=tmp;
                break;
            }
        }
    }
    for(let l=i+1, r=len-1; l<r; l++, r--){
        let tmp=nums[l];
        nums[l]=nums[r];
        nums[r]=tmp;
    }
    let strn=nums.join(''), mx=2147483647;
    mxs=mx.toString();
    if(strn===n.toString() || (strn.length>=mxs.length && strn>mxs)) return -1;
    return strn-0;
};