/**
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function(k) {
    let q=[1];
    let p3=0, p5=0, p7=0;
    for(let i=1; i<k; i++){
        var num=Math.min(q[p3]*3, q[p5]*5, q[p7]*7);
        q.push(num);

        if(num===q[p3]*3) p3++;
        if(num===q[p5]*5) p5++;
        if(num===q[p7]*7) p7++;
    }
    return q[k-1];
};