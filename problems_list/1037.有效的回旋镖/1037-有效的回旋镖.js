/**
 * @param {number[][]} points
 * @return {boolean}
 */
function getK(p1, p2){
    return p1[0]===p2[0]?Infinity:(p1[1]-p2[1])/(p1[0]-p2[0]);
}
function unique(p1, p2){
    return p1[0]!==p2[0] || p1[1]!==p2[1];
}
var isBoomerang = function(points) {
    let k1=getK(points[0], points[1]), k2=getK(points[0], points[2]);
    return k1!==k2 && unique(points[0], points[1]) && unique(points[0], points[2]) && unique(points[1], points[2]);
};