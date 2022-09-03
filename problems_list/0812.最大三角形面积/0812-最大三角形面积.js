/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    let ans=0;
    for(let i=0; i<points.length; i++){
        let p1=points[i];
        for(let j=i+1; j<points.length; j++){
            let p2=points[j];
            for(let k=j+1; k<points.length; k++){
                let p3=points[k];
                if((p1[0]==p2[0]&&p1[0]==p3[0]) || (p1[1]==p2[1]&&p1[1]==p3[1])) continue;
                let S=0.5*Math.abs(p1[0]*p2[1]+p2[0]*p3[1]+p3[0]*p1[1]-p1[0]*p3[1]-p2[0]*p1[1]-p3[0]*p2[1]);
                ans=Math.max(S, ans);
                // console.log(ans);
            }
        }
    }
    return ans;
};