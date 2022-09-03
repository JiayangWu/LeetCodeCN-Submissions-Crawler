var maxChunksToSorted = function(arr) {
    const stack = [];
    for (const num of arr) {
        if (stack.length === 0 || num >= stack[stack.length - 1]) {
            stack.push(num);
        } else {
            const mx = stack.pop();
            while (stack.length && stack[stack.length - 1] > num) {
                stack.pop();
            }
            stack.push(mx);
        }
    }
    return stack.length;
};