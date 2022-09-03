/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let st=new Set();
    for(let i=0; i<arr.length; i++){
        if((arr[i]%2===0 && st.has(Math.floor(arr[i]/2))) || st.has(arr[i]*2)){
            return true;
        }
        st.add(arr[i]);
    }
    return false;
};