var recur=function(rA, rB){
    if(!rB) return true;
    if(!rA || rA.val!==rB.val) return false;
    return recur(rA.left, rB.left) && recur(rA.right, rB.right);
}
var isSubStructure = function(A, B) {
    if(!A || !B) return false;
    return recur(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};