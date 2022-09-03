/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let stk=[], pi=0, pj=0;
    const n=pushed.length;
    for(; pi<n; pi++){
        stk.push(pushed[pi]);
        while(stk.length && stk[stk.length-1]===popped[pj]){
            stk.pop();
            pj++;
        }
    }
    if(stk.length!==0 && pj!==n-1) return false;
    return true;
};