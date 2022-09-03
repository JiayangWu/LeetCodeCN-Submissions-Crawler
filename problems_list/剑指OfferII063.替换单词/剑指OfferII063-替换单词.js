/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    var st=new Set()
    for(const word of dictionary){
        st.add(word)
    }
    var words=sentence.split(" ")
    var ans=""
    var n=words.length
    for(var i=0; i<n; i++){
        var flag=false
        var len=words[i].length
        for(var j=1; j<len+1; j++){
            var prefix=words[i].substring(0, j)
            if(st.has(prefix)){
                ans=ans.concat(prefix, " ")
                flag=true
                break
            }
        }
        if(!flag){
            ans=ans.concat(words[i], " ")
        }
    }
    var n=ans.length
    ans=ans.substring(0, n-1)
    return ans
};