/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    const n=target.length;
    let mp=new Map();
    let cnt=n;
    for(let i=0; i<n; i++){
        if(mp.has(arr[i])){
            mp.set(arr[i], mp.get(arr[i])+1);
        }else{
            mp.set(arr[i], 1);
        }
    }

    for(let i=0; i<n; i++){
        if(mp.has(target[i]) && mp.get(target[i])>0){
            cnt--;
            mp.set(target[i], mp.get(target[i])-1);
        }
    }
    return cnt===0;
};