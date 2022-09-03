var removeOuterParentheses = function(s) {
    let level = 0;
    let res = '';
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c === ')') {
            level--;
        }
        if (level > 0) {
            res += c;
        }
        if (c === '(') {
            level++;
        }
    }
    return res;
};