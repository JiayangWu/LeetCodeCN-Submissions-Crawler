/**
 * @param {string[]} logs
 * @return {string[]}
 */
var isChar=function(log){
    var chrList=log.split(' ');
    if(chrList[1].charCodeAt(0)>='0'.charCodeAt(0) && chrList[1].charCodeAt(0)<='9'.charCodeAt(0)){
        return false;
    }
    return true;
}

var reorderLogFiles = function(logs) {
    var chrs=[], nums=[];
    for(let i=0; i<logs.length; i++){
        if(isChar(logs[i])){
            chrs.push(logs[i]);
        }else{
            nums.push(logs[i]);
        }
    }
    chrs.sort((a, b)=>{
        let i, j;
        for(i=0;i<a.length; i++){
            if(a[i]==' ') break;
        }
        for(j=0; j<b.length; j++){
            if(b[j]==' ') break;
        }
        var ca=a.substring(i+1), cb=b.substring(j+1);
        for(let i=0; i<Math.min(ca.length, cb.length); i++){
            if(ca[i]!=cb[i]){
                if(ca.charCodeAt(i)-cb.charCodeAt(i)>0){
                    return 1;
                }else{
                    return -1;
                }
            }
        }
        if(ca.length!=cb.length) return ca.length-cb.length;

        var sa=a.substring(0, i), sb=b.substring(0, i);
        for(let i=0; i<Math.min(sa.length, sb.length); i++){
            if(sa[i]!=sb[i]){
                if(sa.charCodeAt(i)-sb.charCodeAt(i)>0){
                    return 1;
                }else{
                    return -1;
                }
            }
        }
        return sa.length-sb.length;
    });
    return chrs.concat(nums);
};