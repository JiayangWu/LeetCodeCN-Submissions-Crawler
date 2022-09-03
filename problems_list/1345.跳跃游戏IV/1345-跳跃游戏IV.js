/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
    let mp=new Map();
    const n=arr.length;
    if(n===1) return 0;
    for(let i=0; i<n; i++){
        if(mp.has(arr[i])){
            mp.get(arr[i]).push(i);
        }else{
            mp.set(arr[i], [i]);
        }
    }

    let queue=[0];
    let dist=0;
    // let st=new Set();
    let vis=new Array(n).fill(0);
    vis[0]=1;
    while(queue.length){
        let nxt=[];
        for(const cur of queue){
            if(cur===n-1) return dist;

            if(cur-1>=0 && vis[cur-1]===0){
                nxt.push(cur-1), vis[cur-1]=1;
            }
            if(cur+1<n  && vis[cur+1]===0){
                nxt.push(cur+1), vis[cur+1]=1;
            }

            if(mp.has(arr[cur])){
                for(const idx of mp.get(arr[cur])){
                    if(vis[idx]===0){
                        nxt.push(idx);
                        vis[idx]=1;
                    }
                }
            }
            mp.delete(arr[cur]);
        }
        queue=nxt;
        dist++;
    }
    return dist;
};