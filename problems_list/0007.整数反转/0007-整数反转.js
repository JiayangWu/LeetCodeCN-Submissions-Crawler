/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var ans=0
    while(x){
        ans=ans*10+x%10
        // console.log(ans)
        // console.log(x)
        x=~~(x/10)
        if(ans>Math.pow(2, 31)-1 || ans<Math.pow(-2, 31)) return 0
    }
    return ans
};