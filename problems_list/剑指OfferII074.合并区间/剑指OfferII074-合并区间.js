/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b)=>a[0]-b[0]);
    let st=-1, ed=-1;
    let ans=[];
    for(const [s, e] of intervals){
        if(ed<s){
            if(st!==-1) ans.push([st, ed]);
            st=s, ed=e;
        }else{
            ed=Math.max(ed, e);
        }
    }
    if(st!==-1) ans.push([st, ed]);
    return ans;
};