/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    let mp=new Map();
    let idx=97;
    for(let ch of key){
        if(!mp.has(ch) && ch.charCodeAt()>='a'.charCodeAt() && ch.charCodeAt()<='z'.charCodeAt()){
            mp.set(ch, String.fromCharCode(idx));
            idx++;
        }
    }
    
    let chs=message.split('');
    for(let i=0; i<chs.length; i++){
        if(chs[i].charCodeAt()>='a'.charCodeAt() && chs[i].charCodeAt()<='z'.charCodeAt()){
            chs[i]=mp.get(chs[i]);
        }
    }
    return chs.join('');
};