/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let as=a.split(''), bs=b.split('');
    as.reverse();
    bs.reverse();
    let ans=[];
    let carry=0, ad, bd;
    for(let i=0; i<Math.max(as.length, bs.length); i++){
        if(i>=as.length) ad=0;
        else ad=as[i].charCodeAt()-'0'.charCodeAt();

        if(i>=bs.length) bd=0;
        else bd=bs[i].charCodeAt()-'0'.charCodeAt();

        let _sum=ad+bd+carry;
        let cur=_sum%2;
        ans.push(cur);
        carry=Math.floor(_sum/2);
    }
    if(carry) ans.push(carry);
    return ans.reverse().join('');
};