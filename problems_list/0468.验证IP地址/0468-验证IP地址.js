/**
 * @param {string} queryIP
 * @return {string}
 */

var validIPAddress = function(queryIP) {
    const isIPv4=function(str){
        let sa=str.split('.');
        if(sa.length!==4) return false;

        for(const item of sa){
            if(item.length<=0) return false;
            if(item.length>1 && item[0]==='0') return false;

            for(let ch of item){
                if(!(ch.charCodeAt()>='0'.charCodeAt() && ch.charCodeAt()<='9'.charCodeAt())){
                    return false;
                }
            }

            let num=parseInt(item);
            if(num<0 || num>255) return false;
        }
        return true;
    }

    const isIPv6=function(str){
        let sa=str.split(':');
        if(sa.length!==8) return false;

        for(const item of sa){
            if(item.length<1 || item.length>4) return false;

            for(let ch of item){
                if(!((ch.charCodeAt()>='0'.charCodeAt() && ch.charCodeAt()<='9'.charCodeAt()) || (ch.charCodeAt()>='a'.charCodeAt() && ch.charCodeAt()<='f'.charCodeAt()) || (ch.charCodeAt()>='A'.charCodeAt() && ch.charCodeAt()<='F'.charCodeAt()))){
                    return false;
                }
            }

        }
        return true;
    }
    if(isIPv4(queryIP)) return "IPv4";
    else if(isIPv6(queryIP)) return "IPv6";
    return "Neither";
};