/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let ans=0;
    while(num){
        if(num%2===0){
            num=Math.floor(num/2);
        }else{
            num--;
        }
        ans++;
    }
    return ans;
};