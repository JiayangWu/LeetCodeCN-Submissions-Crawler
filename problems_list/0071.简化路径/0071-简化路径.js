/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let ops=path.split('/');
    let stk=[];
    for(let i=0; i<ops.length; i++){
        if(ops[i]==='' || ops[i]==='.') continue;
        else if(ops[i]==='..'){
            if(stk.length) stk.pop();
        }else{
            stk.push(ops[i]);
        }
    }
    if(stk.length===0) return '/';
    return '/'+stk.join('/');
};