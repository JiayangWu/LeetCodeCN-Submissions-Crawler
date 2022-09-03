/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maximumsSplicedArray = function(nums1, nums2) {
    let n=nums1.length;
    
    const reducer=(p, c)=>p+c;
    let sum1=nums1.reduce(reducer), sum2=nums2.reduce(reducer);
    if(sum1<sum2){
        let tmp=nums1;
        nums1=nums2;
        nums2=tmp;
        // [num1, nums2]=[nums2, nums1];
        [sum1, sum2]=[sum2, sum1];
    }
    
    let delta=new Array(n);
    for(let i=0; i<n; i++){
        delta[i]=nums2[i]-nums1[i];
    }
    // console.log(nums1);
    // console.log(nums2);
    // console.log(sum1);
    // console.log(delta);
    let mx=0, sum=0;
    for(let l=0, r=0; r<n; r++){
        sum+=delta[r];
        while(l<=r && sum<=0){
            sum-=delta[l];
            l++;
        }
        mx=Math.max(mx, sum);
    }
    let mn=1e9, sum22=0;
    for(let l=0, r=0; r<n; r++){
        sum22+=delta[r];
        while(l<=r && sum22>=0){
            sum22-=delta[l];
            l++;
        }
        mn=Math.min(mn, sum22);
    }
    return Math.max(sum1+mx, sum2-mn);
};