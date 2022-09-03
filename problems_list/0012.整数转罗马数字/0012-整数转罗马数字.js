/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let ans=[];
    let chars=['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
    let radix=[1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let st=chars.length-1;
    while(num){
        let cnt=Math.floor(num/radix[st]);
        num-=cnt*radix[st];
        ans.push(chars[st].repeat(cnt));
        st--;
    }
    return ans.join('');
};