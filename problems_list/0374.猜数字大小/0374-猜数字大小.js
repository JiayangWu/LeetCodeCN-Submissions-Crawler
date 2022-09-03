/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let l=1, r=n;
    while(l<=r){
        let m=l+((r-l)>>1);
        if(guess(m)===0) return m;
        else if(guess(m)===-1) r=m-1;
        else l=m+1;
    }
    return -1;
};