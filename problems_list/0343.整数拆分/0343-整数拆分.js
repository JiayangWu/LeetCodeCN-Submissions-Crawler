/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if(n==2) return 1
    if(n==3) return 2

    if(n%3==0) return Math.pow(3, Math.floor(n/3))
    var ans=1
    while(n>3){
        ans*=3
        n-=3
    }
    return n==1?Math.floor(ans/3)*4:ans*2
};