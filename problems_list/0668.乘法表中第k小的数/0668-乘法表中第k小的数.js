/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(m, n, k) {
    const judge=(m, n, tar)=>{
        let sum=0;
        for(let i=1; i<=m; i++){
            sum+=Math.min(Math.floor(tar/i), n);
            if(sum>=k) return true;
        }
        return false;
    };
    let l=1, r=m*n, ans=1;
    while(l<=r){
        let mid=Math.floor((l+r)>>1);
        if(judge(m, n, mid)) r=mid-1, ans=mid;
        else l=mid+1;
    }
    return ans;
};