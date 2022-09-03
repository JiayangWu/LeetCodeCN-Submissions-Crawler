/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    // 合并区间
    intervals.push(newInterval);
    intervals.sort((a,b)=>{
        return a[0]-b[0];
    })
    let st=-1, ed=-1;
    let ans=[];
    intervals.forEach((v)=>{
        // console.log(v);
        if(ed<v[0]){
            if(st!==-1) ans.push([st, ed]);
            [st, ed]=[v[0], v[1]]; 
        }else{
            ed=Math.max(v[1], ed);
        }
    })
    ans.push([st, ed]);
    return ans;
};