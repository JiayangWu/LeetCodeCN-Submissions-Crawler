/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    let cnt=0, len=s.length;
    for(let ch of s){
        if(ch===' '){
            cnt++;
        }
    }
    s=s.concat(" ".repeat(2*cnt));
    let arr=s.split('');
    for(let i=len-1, j=arr.length-1; i<j; i--, j--){
        if(arr[i]!==' '){
            arr[j]=arr[i];
        }else{
            arr[j-2]='%';
            arr[j-1]='2';
            arr[j]='0';
            j-=2;
        }
    }
    return arr.join('');
}