/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let l1=nums1.length, l2=nums2.length;
    let l=-1, r=-1;
    if((l1+l2)&1){
        l=r=Math.floor((l1+l2)/2);
    }else{
        l=Math.floor((l1+l2)/2)-1;
        r=Math.floor((l1+l2)/2);
    }
    var p1=0, p2=0;
    let arr=[];
    while(p1<l1 && p2<l2){
        if(p1<l1 && nums1[p1]<nums2[p2]){
            arr.push(nums1[p1]);
            p1+=1;
        }
        if(p2<l2 && nums1[p1]>=nums2[p2]){
            arr.push(nums2[p2]);
            p2+=1;
        }
        if(arr.length>r) break;
    }
    
    while(p1<l1 && arr.length<=r){
        arr.push(nums1[p1]);
        p1++;
    }
    while(p2<l2 && arr.length<=r){
        arr.push(nums2[p2]);
        p2++;
    }
    return (arr[l]+arr[r])/2;
};