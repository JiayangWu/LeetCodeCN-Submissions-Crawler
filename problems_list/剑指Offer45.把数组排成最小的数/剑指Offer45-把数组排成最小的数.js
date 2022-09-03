/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
    nums.sort((a, b)=>{
        a=a.toString(), b=b.toString();
        // console.log(a+b);
        if((a+b)-(b+a)>0) return 1;
        return -1;
    });
    // console.log(nums);
    return nums.join('');
};