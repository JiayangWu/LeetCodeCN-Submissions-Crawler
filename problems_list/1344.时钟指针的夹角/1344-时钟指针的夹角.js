/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    if(hour>=12) hour-=12;
    let total=hour*60+minutes;
    let degHour=total/(12*60)*360;
    let degMinu=minutes/60*360;
    let betDeg=Math.abs(degMinu-degHour);
    return Math.min(betDeg, 360-betDeg);
};