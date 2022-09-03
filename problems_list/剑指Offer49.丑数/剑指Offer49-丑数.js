/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let idx2=0, idx3=0, idx5=0;
    let arr=[1];
    while(true){
        if(arr.length===n) break;
        let cur2=arr[idx2]*2;
        let cur3=arr[idx3]*3;
        let cur5=arr[idx5]*5;
        
        let mn=Math.min(cur2, Math.min(cur3, cur5));
        arr.push(mn);

        if(mn===cur2){
            idx2++;
        }
        if(mn===cur3){
            idx3++;
        }
        if(mn===cur5){
            idx5++;
        }
    }
    return arr[n-1];
};