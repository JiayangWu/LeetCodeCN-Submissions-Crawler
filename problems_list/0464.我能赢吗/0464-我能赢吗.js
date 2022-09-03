/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function(mx, dt) {
    let mp=new Map();
    const dfs=(mx, dt, cur, used)=>{
        if(!mp.has(used)){
            let res=false;
            for(let i=0; i<mx; i++){
                if(((used>>i)&1)===0){
                    if(cur+i+1>=dt){
                        res=true;
                        break;
                    }
                    if(!dfs(mx, dt, cur+i+1, used|(1<<i))){
                        res=true;
                        break;
                    }
                }
            }
            mp.set(used, res);
        }
        return mp.get(used);
    }
    if(Math.floor((mx+1)*mx/2)<dt) return false;
    return dfs(mx, dt, 0, 0);
};