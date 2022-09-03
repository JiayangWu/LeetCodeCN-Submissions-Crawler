/**
 * @param {number} n
 * @return {boolean}
 */
var getNumber=function(num){
    var ans=0
    while(num!=0){
        ans+=Math.pow(num%10, 2)
        num=Math.floor(num/10)
    }
    return ans
};

var isHappy = function(n) {
    var st=new Set()
    st.add(n)
    while(n!=1){
        var tmp=getNumber(n)
        if(st.has(tmp)) return false;
        st.add(tmp)
        n=tmp
    }
    return n==1
};