/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    let digit=1, start=1, count=9;
    while(n>count){
        n-=count;
        start*=10;
        digit++;
        count=9*start*digit;
    }
    let num=start+Math.floor((n-1)/digit);
    // console.log(num);
    return (''+num)[(n-1)%digit]-'0';
};