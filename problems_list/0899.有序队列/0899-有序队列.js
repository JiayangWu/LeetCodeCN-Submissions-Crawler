/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var compareStr=function(str1, str2){
    const n=str1.length;
    for(let i=0; i<n; i++){
        if(str1[i].charCodeAt()<str2[i].charCodeAt()) return true;
        else if(str1[i].charCodeAt()>str2[i].charCodeAt()) return false;
    }
    return true;
}

var orderlyQueue = function(s, k) {
    if(k===1){
        let ans=s;
        const n=ans.length;
        for(let i=1; i<n; i++){
            let sstr=s.substring(i)+s.substring(0, i);
            if(!compareStr(ans, sstr)) ans=sstr;
        }
        return ans;
    }else{
        let chs=s.split('').sort((a,b)=>{
            if(a.charCodeAt()<b.charCodeAt()) return -1;
            return 1;
        })
        return chs.join('');
    }
};