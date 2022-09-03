/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    const sn=s.length;
    let zeros=new Array(sn).fill(0), ones=new Array(sn).fill(0);
    if(s[0]==='0') zeros[0]=1;
    for(let i=1; i<sn; i++){
        zeros[i]=zeros[i-1];
        if(s[i]==='0') zeros[i]++;
    }

    if(s[sn-1]==='1') ones[sn-1]=1;
    for(let i=sn-2; i>=0; i--){
        ones[i]=ones[i+1];
        if(s[i]==='1') ones[i]++;
    }
    let ans=0;
    for(let i=1; i<sn; i++){
        // console.log(zeros[i]+ones[i]);
        ans=Math.max(ans, zeros[i-1]+ones[i]);
    }
    return ans;
};