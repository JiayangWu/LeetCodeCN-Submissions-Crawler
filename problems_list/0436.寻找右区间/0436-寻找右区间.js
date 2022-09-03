/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    let n=intervals.length;
    let arr=new Array();
    for(let i=0; i<n; i++) arr.push([intervals[i][0], i]);
    arr.sort((a, b)=>a[0]-b[0]);

    const find=function(key){
        let l=0, r=n-1;
        while(l<=r){
            let m=(l+r)>>1;
            if(arr[m][0]===key) return m;
            else if(arr[m][0]>key) r=m-1;
            else l=m+1;
        }
        return r+1;
    }

    let ans=new Array(n).fill(0);
    for(let i=0; i<n; i++){
        let idx=find(intervals[i][1]);
        if(idx>=n) ans[i]=-1;
        else ans[i]=arr[idx][1];
    }
    return ans;
};