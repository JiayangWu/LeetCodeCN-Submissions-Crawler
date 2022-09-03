var calculate = function(s) {
    s = s.trim();
    const stack = new Array();
    let preSign = '+';
    let num = 0;
    const n = s.length;
    for (let i = 0; i < n; ++i) {
        if (!isNaN(Number(s[i])) && s[i] !== ' ') {
            num = num * 10 + s[i].charCodeAt() - '0'.charCodeAt();
        }
        if (isNaN(Number(s[i])) || i === n - 1) {
            switch (preSign) {
                case '+':
                    stack.push(num);
                    break;
                case '-':
                    stack.push(-num);
                    break;
                case '*':
                    stack.push(stack.pop() * num);
                    break;
                default:
                    stack.push(stack.pop() / num | 0);
            }   
            preSign = s[i];
            num = 0;
        }
    }
    let ans = 0;
    while (stack.length) {
        ans += stack.pop();
    }
    return ans;
};