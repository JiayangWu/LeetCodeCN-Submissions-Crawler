/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let sx=x+'';
    let ls=sx.length;

    var judge=(l, r, sx)=>{
        let ls=sx.length;
        while(l>=0 && r<ls){
            if(sx[l]!=sx[r]) return false;
            l--, r++;
        }
        return true;
    }
    
    let l, r;
    if(ls%2==1){
        l=r=Math.floor(ls/2);
    }else{
        l=Math.floor(ls/2)-1, r=Math.floor(ls/2);
    }
    return judge(l, r, sx);
};