/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var getDist=function(p1, p2){
    return (p1[0]-p2[0])*(p1[0]-p2[0])+(p1[1]-p2[1])*(p1[1]-p2[1]);
}
var validSquare = function(p1, p2, p3, p4) {
    let dists=new Array(4).fill(0).map(x=>new Array(4).fill(0));
    dists[0][1]=getDist(p1, p2);
    dists[0][2]=getDist(p1, p3);
    dists[0][3]=getDist(p1, p4);
    dists[1][2]=getDist(p2, p3);
    dists[1][3]=getDist(p2, p4);
    dists[2][3]=getDist(p3, p4);
    for(let i=0; i<4; i++){
        for(let j=0; j<i; j++){
            dists[i][j]=dists[j][i];
        }
    }
    for(let i=0; i<4; i++){
        let a=-1, b=-1, c=-1;
        for(let j=0; j<4; j++){
            if(i!==j){
                if(a===-1) a=dists[i][j];
                else if(b===-1) b=dists[i][j];
                else c=dists[i][j];
            }
        }
        if(a>c) [a, c]=[c, a];
        if(b>c) [b, c]=[c, b];
        console.log(a, b, c);
        if(a!==b || a+b!==c || b===0) return false;
    }
    return true;
};