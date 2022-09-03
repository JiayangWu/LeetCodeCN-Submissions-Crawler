/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let p2=0, p3=0, p5=0;
    let nums=[1];
    for(let i=1; i<n; i++){
        let n2=nums[p2]*2;
        let n3=nums[p3]*3;
        let n5=nums[p5]*5;
        let mn=Math.min(n2, n3, n5);
        nums.push(mn);
        if(mn===n2) p2++;
        if(mn===n3) p3++;
        if(mn===n5) p5++;
    }
    return nums[n-1];
};