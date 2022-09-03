var reformat = function(s) {
    let sumDigit = 0;
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (isDigit(c)) {
            sumDigit++;
        }
    }
    let sumAlpha = s.length - sumDigit;
    if (Math.abs(sumDigit - sumAlpha) > 1) {
        return "";
    }
    let flag = sumDigit > sumAlpha;
    const arr = [...s];
    for (let i = 0, j = 1; i < s.length; i += 2) {
        if (isDigit(arr[i]) !== flag) {
            while (isDigit(arr[j]) !== flag) {
                j += 2;
            }
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    return arr.join('');
}

const isDigit = (ch) => {
    return parseFloat(ch).toString() === "NaN" ? false : true;
}