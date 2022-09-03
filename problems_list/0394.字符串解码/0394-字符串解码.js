/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let numStack=[];
    let strStack=[];
    let num=0;
    let result='';
    for(const ch of s){
        if(parseInt(ch)+1){
            num=num*10+parseInt(ch);
        }else if(ch==='['){
            strStack.push(result);
            result='';
            numStack.push(num);
            num=0;
        }else if(ch===']'){
            let repeatTime=numStack.pop();
            result=strStack.pop()+result.repeat(repeatTime);
        }else{
            result+=ch;
        }
    }
    return result;
};