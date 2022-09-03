/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
function checkTime(piles, speed, h){
    let ans=0;
    for(let i=0; i<piles.length; i++)
        ans+=Math.ceil(piles[i]/speed);
    return ans<=h?true:false;
};

let minEatingSpeed = function(piles, h) {
    let l=1, r=1000000000;
    let ans=0;
    while(l<=r){
        let m=l+r>>1;
        if(checkTime(piles,m,h)) ans=m, r=m-1;
        else l=m+1;
    }
    return ans;
};