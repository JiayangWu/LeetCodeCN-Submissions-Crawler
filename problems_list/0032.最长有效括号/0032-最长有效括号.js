/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let n=s.length;
    let dp=new Array(n).fill(0);
    let stk=[0];
    for(let i=1; i<n; i++){
        if(s[i]==='('){
            stk.push(i);
        }else{
            let back=stk.length-1;
            if(s[stk[back]]==='(' && s[i]===')'){
                dp[i]=2;
                if(i-1!==stk[back]) dp[i]+=dp[i-1];
                stk.pop();
                if(i-dp[i]>=0 && dp[i-dp[i]]!==0) dp[i]+=dp[i-dp[i]];
            }
        }
        // console.log(stk);
    }
    // console.log(dp);
    let ans=0;
    for(const cnt of dp) ans=Math.max(ans, cnt);
    return ans;
};