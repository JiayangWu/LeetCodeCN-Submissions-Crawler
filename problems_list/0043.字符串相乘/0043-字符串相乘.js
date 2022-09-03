/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let addString=function(str1, str2){
        let i=str1.length-1, j=str2.length-1, add=0;
        let ans="";
        while(i>=0 || j>=0 || add!==0){
            let x=(i>=0?str1.charCodeAt(i)-'0'.charCodeAt():0);
            let y=(j>=0?str2.charCodeAt(j)-'0'.charCodeAt():0);
            let res=x+y+add;
            ans+=Math.floor(res%10).toString();
            add=Math.floor(res/10);
            i--, j--;
        }
        return Array.from(ans).reverse().join("");
    }
    if(num1==='0' || num2==='0') return '0';
    let ans="";
    let m=num1.length, n=num2.length;
    for(let i=n-1; i>=0; i--){
        let curr="";
        // 后缀加0
        for(let j=n-1; j>i; j--)  curr+='0';
        let y=num2.charCodeAt(i)-'0'.charCodeAt();
        
        // 给每个位置计算
        let add=0;
        for(let j=m-1; j>=0; j--){
            let x=num1.charCodeAt(j)-'0'.charCodeAt();
            let product=x*y+add;
            curr+=Math.floor(product%10).toString();
            add=Math.floor(product/10);
        }
        while(add!=0){
            curr+=Math.floor(add%10).toString();
            add=Math.floor(add/10);
        }
        let sa=Array.from(curr).reverse().join("");
        ans=addString(ans, sa);
    }
    return ans;
};