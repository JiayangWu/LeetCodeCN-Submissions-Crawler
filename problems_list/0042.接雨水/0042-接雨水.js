/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let pre=0, lstk=[], post=0, rstk=[];
    for(let i=0; i<height.length; i++){
        lstk.push(pre);
        pre=Math.max(pre, height[i]);
    }
    for(let i=height.length-1; i>=0; i--){
        rstk.unshift(post);
        post=Math.max(post, height[i]);
    }
    let ans=0;
    for(let i=0; i<height.length; i++){
        let rain=Math.min(lstk[i], rstk[i]);
        if(rain>height[i]) ans+=rain-height[i];
    }
    return ans;
};