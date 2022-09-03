/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s=s.trim();
    let neg=false, st=0, sum=0, lt=false;
    const MAX=Math.pow(2, 31);

    if(s[st]=='-') neg=!neg, st++;
    else if(s[st]=='+') st++;

    for(;st<s.length;st++){
        if(s.charCodeAt(st)-'0'.charCodeAt()>=0 && s.charCodeAt(st)-'0'.charCodeAt()<=9){
            sum=sum*10+s.charCodeAt(st)-'0'.charCodeAt();
            if(sum>=MAX){
                sum=MAX-1;
                lt=true;
                break;
            }
        }else{
            break;
        }
    }
    
    if(lt && neg) return -1*MAX;
    return neg?-1*sum:sum;
};