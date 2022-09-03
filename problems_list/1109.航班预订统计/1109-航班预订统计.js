/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
    let cnt=new Array(n+1).fill(0);
    for(let i=0; i<bookings.length; i++){
        let l=bookings[i][0], r=bookings[i][1], count=bookings[i][2];
        cnt[l-1]+=count;
        cnt[r]-=count;
    }
    for(let i=1; i<n+1; i++) cnt[i]+=cnt[i-1];

    cnt.pop();
    return cnt;
};