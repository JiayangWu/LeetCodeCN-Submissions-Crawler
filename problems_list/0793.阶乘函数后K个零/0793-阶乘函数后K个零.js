/**
 * @param {number} k
 * @return {number}
 */
var preimageSizeFZF = function(k) {
    return helper(k+1)-helper(k);
};

const helper=(k)=>{
    let r=5*k;
    let l=0;
    while(l<=r){
        const mid=Math.floor((l+r)/2);
        if(zeta(mid)<k){
            l=mid+1;
        }else{
            r=mid-1;
        }
    }
    return r+1;
}

const zeta=(x)=>{
    let ans=0;
    while(x!==0){
        x=Math.floor(x/5);
        ans+=x;
    }
    return ans;
}