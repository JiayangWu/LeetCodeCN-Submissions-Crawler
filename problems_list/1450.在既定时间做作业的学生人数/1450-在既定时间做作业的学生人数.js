/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
    const sn=startTime.length;
    let ans=0;
    for(let i=0; i<sn; i++){
        if(startTime[i]<=queryTime && queryTime<=endTime[i]){
            ans++;
        }
    }
    return ans;
};