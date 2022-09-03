var validateStackSequences = function(pushed, popped) {
    const stack = [];
    const n = pushed.length;
    for (let i = 0, j = 0; i < n; i++) {
        stack.push(pushed[i]);
        while (stack.length && stack[stack.length - 1] == popped[j]) {
            stack.pop();
            j++;
        }
    }
    return stack.length === 0;
};