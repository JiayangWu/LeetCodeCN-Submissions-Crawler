/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    let n=s.length;
    let st=new Set();
    let ans="";
    for(let i=0; i<n; i++){
        let c=s[i];
        st.add(c);
        if(c>='a' && st.has(c.toUpperCase()) && c.toUpperCase()>ans){
            ans=c.toUpperCase();
        }else if(c>='A' && c<='Z' && st.has(c.toLowerCase()) && c>ans){
            ans=c;
        }
    }
    return ans;
};