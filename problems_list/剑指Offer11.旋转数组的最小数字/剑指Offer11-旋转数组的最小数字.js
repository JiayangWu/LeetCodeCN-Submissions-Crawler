/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    let l=0, r=numbers.length;
    while(l<r){
        let m=Math.floor(l+r>>1);
        if(numbers[m]<numbers[r]) r=m;
        else if(numbers[m]>numbers[r]) l=m+1;
        else r--;
    }
    return numbers[l];
};