var fractionAddition = function (expression) {
    if (expression[0] < 10) expression = '+' + expression;
    let i = 0, fz = 0, fm = 1;
    while (i < expression.length) {
        let sign = 1, _fz = 0, _fm = 0;
        // 符号
        if (expression[i] === '-') sign = -1;
        // 找出分子
        while (expression[++i] < 10) _fz = _fz * 10 + +expression[i];
        // 找出分母
        while (expression[++i] < 10) _fm = _fm * 10 + +expression[i];
        _fz *= sign;
        if (_fm === fm) {
            fz += _fz;
        } else {
            fz = fz * _fm + _fz * fm;
            fm *= _fm;
        }
        if (fz === 0) fm = 1;
        // 求分子分母的最大公约数
        const g = gcd(Math.abs(fz), Math.abs(fm));
        fz /= g, fm /= g;
    }
    return `${fz}/${fm}`;
};

function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}