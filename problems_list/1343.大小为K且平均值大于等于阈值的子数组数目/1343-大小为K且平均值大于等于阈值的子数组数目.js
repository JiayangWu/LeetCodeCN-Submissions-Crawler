/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    const n=arr.length;
    let sum=0;
    let ans=0;
    for(let i=0; i<k; i++){
        sum+=arr[i];
    }
    if(Math.floor(sum/k)>=threshold) ans++;
    for(let i=k; i<n; i++){
        sum+=arr[i]-arr[i-k];
        if(Math.floor(sum/k)>=threshold) ans++;
    }
    return ans;
};