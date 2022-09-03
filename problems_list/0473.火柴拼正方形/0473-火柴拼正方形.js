/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {
    let sum=_.sum(matchsticks), n=matchsticks.length;
    if(sum%4) return false;

    let len=Math.floor(sum/4);
    matchsticks.sort((a,b)=>b-a);
    let dp=new Array(n).fill(0), cnt=0;
    return dfs(0, matchsticks, dp, len);
};

let dfs=function dfs(index, matchsticks, arr, len){
    if(index===matchsticks.length){
        return true;
    }
    for(let i=0; i<4; i++){
        arr[i]+=matchsticks[index];
        if(arr[i]<=len && dfs(index+1, matchsticks, arr, len)){
            return true;
        }
        arr[i]-=matchsticks[index];
    }
    return false;
}