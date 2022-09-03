/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
    let s=num.toString();
    let n=s.length;
    if(n<2) return 1;
    let dp=new Array(n).fill(0);
    dp[0]=1;
    if(s[0]!=='0' && parseInt(s.substring(0,2))<26) dp[1]=2;
    else dp[1]=1;

    for(let i=2; i<n; i++){
        dp[i]+=dp[i-1];
        let twoChar=s.substring(i-1, i+1);

        if(s[i-1]!=='0' && parseInt(twoChar)<26) dp[i]+=dp[i-2];
    }
    // console.log(dp);
    return dp[n-1];
};