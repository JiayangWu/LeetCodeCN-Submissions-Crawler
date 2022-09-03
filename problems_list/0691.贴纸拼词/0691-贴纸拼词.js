/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
var dp=(stickers, target, memo, mask)=>{
    const m=target.length;
    if(memo[mask]<0){
        let res=m+1;
        for(const sticker of stickers){
            let left=mask;
            const cnt=new Array(26).fill(0);
            for(let i=0; i<sticker.length; i++){
                cnt[sticker.charCodeAt(i)-'a'.charCodeAt(0)]++;
            }
            for(let i=0; i<target.length; i++){
                const c=target[i];
                if(((mask>>i)&1)===1 && cnt[c.charCodeAt()-'a'.charCodeAt()]>0){
                    cnt[c.charCodeAt()-'a'.charCodeAt()]--;
                    left^=1<<i;
                }
            }
            if(left<mask){
                res=Math.min(res, dp(stickers, target, memo, left)+1);
            }
        }
        memo[mask]=res;
    }
    return memo[mask];
}
var minStickers = function(stickers, target) {
    const m=target.length;
    const memo=new Array(1<<m).fill(-1);
    memo[0]=0;
    const res=dp(stickers, target, memo, (1<<m)-1);
    return res<=m?res:-1;
};

