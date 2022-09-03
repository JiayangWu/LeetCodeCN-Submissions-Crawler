/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s=s.trim();
    let ss=s.split(' ');
    console.log(ss);
    return ss[ss.length-1].length;
};