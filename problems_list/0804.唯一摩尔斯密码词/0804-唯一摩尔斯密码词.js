/**
 * @param {string[]} words
 * @return {number}
 */
const mp=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
var uniqueMorseRepresentations = function(words) {
    let seen=new Set();
    for(let word of words){
        let mw="";
        for(let ch of word){
            mw+=(mp[ch.charCodeAt()-'a'.charCodeAt()]);
        }
        seen.add(mw);
    }
    return seen.size;
};