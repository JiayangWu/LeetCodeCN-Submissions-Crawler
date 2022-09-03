/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */

var getDif=function(patter, target){
    let dif=0;
    for(let i=0; i<8; i++){
        if(patter[i]!==target[i]){
            if(dif==1) return false;
            dif++;
        }
    }
    return dif==1;
};

var minMutation = function(start, end, bank) {
    const len=bank.length;
    var vis=new Array(len).fill(0);
    // 广度优先搜索
    var ans=0;
    var q=[start];
    while(q.length){
        var layers=q.length;
        ans++;
        for(let i=0; i<layers; i++){
            var head=q[0];
            q.shift();
            for(let i=0; i<bank.length; i++){
                if(vis[i]) continue;
                if(getDif(head, bank[i])){
                    if(bank[i]==end) return ans;
                    q.push(bank[i]), vis[i]=1;
                }
            }
        }
    }
    return -1;
};