/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function(A, B) {
    let len=A.length;
    
    let realA="", realB="";
    let recA=[], recB=[];
    
    for(let i=0; i<len; i++){
        if(A[i]!=='_'){
            realA+=A[i];
            recA.push(i);
        }
        
        if(B[i]!=='_'){
            realB+=B[i];
            recB.push(i);
        }
    }
    
    if(realA!==realB) return false;
    
    let rLen=realA.length;
    for(let i=0; i<rLen; i++){
        if(realA[i]==='L'){
            if(recA[i]<recB[i]) return false;
        }
        
        if(realA[i]==='R'){
            if(recA[i]>recB[i]) return false;
        }
    }
    return true;
    
};