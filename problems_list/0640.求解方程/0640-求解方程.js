var solveEquation = function(equation) {
    let factor = 0, val = 0;
    let index = 0, n = equation.length, sign1 = 1; // 等式左边默认系数为正
    while (index < n) {
        if (equation[index] === '=') {
            sign1 = -1; // 等式右边默认系数为负
            index++;
            continue;
        }

        let sign2 = sign1, number = 0;
        let valid = false; // 记录 number 是否有效
        if (equation[index] === '-' || equation[index] === '+') { // 去掉前面的符号
            sign2 = (equation[index] === '-') ? -sign1 : sign1;
            index++;
        }
        while (index < n && isDigit(equation[index])) {
            number = number * 10 + (equation[index].charCodeAt() - '0'.charCodeAt());
            index++;
            valid = true;
        }

        if (index < n && equation[index] === 'x') { // 变量
            factor += valid ? sign2 * number : sign2;
            index++;
        } else { // 数值
            val += sign2 * number;
        }
    }

    if (factor === 0) {
        return val === 0 ? "Infinite solutions" : "No solution";
    }
    if (val % factor !== 0) {
        return "No solution";
    }
    return "x=" + (-val / factor);
};

const isDigit = (ch) => {
    return parseFloat(ch).toString() === "NaN" ? false : true;
}