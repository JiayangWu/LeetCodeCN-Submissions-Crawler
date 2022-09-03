/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits.reverse();
    let carry=1;
    let n=digits.length;
    for(let i=0; i<n; i++){
        let sum=carry+digits[i];
        carry=(sum/10)|0;
        digits[i]=sum%10;
        if(carry===0) break;
    }

    if(carry) digits.push(carry);
    return digits.reverse();
};