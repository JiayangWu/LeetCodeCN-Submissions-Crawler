/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
const daysOfMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var daysBetweenDates = function(date1, date2) {
    let arr1 = date1.split('-')
    let arr2 = date2.split('-')
    let [y1,m1,d1] = [...arr1]
    let [y2,m2,d2] = [...arr2]
    let amount1 = daysAfter1970(y1,m1,d1)
    let amount2 = daysAfter1970(y2,m2,d2)
    return Math.abs(amount1 - amount2)
};

function isLeapYear(year){
    return ((year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0))
}

function daysAfter1970(year, mounth, day){
    let amount = 0
    for(let i=1970; i < parseInt(year);i++){
        if(isLeapYear(i)) amount += 366
        else{
            amount += 365
        }
    }
    for(let i=0; i<parseInt(mounth); i++){
        if(i === 2 && isLeapYear(year)) {
            amount += 29
            continue  
        }
        amount += parseInt(daysOfMonth[i])
    }
    amount += parseInt(day)
    return amount-1
}