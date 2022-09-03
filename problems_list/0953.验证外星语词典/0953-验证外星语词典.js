/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */

var isAlienSorted = function(words, order) {
    const mp=new Map();
    const judge=(str1, str2)=>{
        let ln=Math.min(str1.length, str2.length);
        for(let i=0; i<ln; i++){
            if(mp.get(str1[i])>mp.get(str2[i])) return false;
            else if(mp.get(str1[i])<mp.get(str2[i])) return true;
        }
        return str1.length<=str2.length;
    };

    for(let i=0; i<order.length; i++)   mp.set(order[i], i);
    for(let i=0; i<words.length-1; i++){
        if(!judge(words[i], words[i+1])){
            return false;
        }
    }
    return true;
};