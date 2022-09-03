/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    let arr=sentence.split(' ');
    for(let i=0; i<arr.length; i++){
        if(arr[i].length<searchWord.length) continue;
        const sn=searchWord.length;
        for(let j=0; j<sn; j++){
            if(arr[i][j]!==searchWord[j]) break;
            if(j===sn-1) return i+1;
        }
    }
    return -1;
};