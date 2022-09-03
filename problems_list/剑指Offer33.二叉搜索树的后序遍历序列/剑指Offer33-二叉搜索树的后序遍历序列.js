/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
    let recur=function(i, j){
        if(i>=j) return true;
        let p=i;
        while(postorder[p]<postorder[j]) p++;
        let m=p;
        while(postorder[p]>postorder[j]) p++;
        return p===j && recur(i, m-1) && recur(m, j-1);
    }
    return recur(0, postorder.length-1);
};