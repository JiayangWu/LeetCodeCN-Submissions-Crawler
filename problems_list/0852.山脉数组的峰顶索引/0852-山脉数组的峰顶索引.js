/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    arr.unshift(-1);
    const n=arr.length;
    let l=0, r=n-1, ans=-1;
    while(l<=r){
        let m=l+Math.floor((r-l)/2);
        console.log(m);
        if(arr[m]>arr[m-1]){
            ans=m-1;
            l=m+1;
        }else{
            r=m-1;
        }
    }
    return ans;
};