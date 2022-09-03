/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let st="1";
    let decor=function(str){
        let ans="", ch="", cnt=0, pre="";
        for(let i=0; i<str.length; i++){
            if(ch!=str[i]){
                if(cnt!=0){
                    ans+=cnt.toString();
                    ans+=ch;
                }
                ch=st[i];
                cnt=1;
            }else{
                cnt++;
            }

            if(i==str.length-1){
                ans+=cnt.toString();
                ans+=ch;
            }
        }
        return ans;
    }

    for(let i=1; i<n; i++) st=decor(st);
    return st;
};