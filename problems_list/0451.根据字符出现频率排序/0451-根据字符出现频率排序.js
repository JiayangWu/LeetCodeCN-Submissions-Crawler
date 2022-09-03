/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let rec=new Map();
    for(let ch of s){
        if(!rec.has(ch)){
            rec.set(ch, 1);
        }else{
            rec.set(ch,rec.get(ch)+1)
        }
    }
    let arr=Array.from(rec).sort((a,b)=>b[1]-a[1]);
    // console.log(arr);
    let ans="";
    for(let i=0; i<arr.length; i++){
        ans+=arr[i][0].repeat(arr[i][1]);
    }
    return ans;
};