var asteroidCollision = function(asteroids) {
    const stack = [];
    for (const aster of asteroids) {
        let alive = true;
        while (alive && aster < 0 && stack.length > 0 && stack[stack.length - 1] > 0) {
            alive = stack[stack.length - 1] < -aster; // aster ÊÇ·ñ´æÔÚ
            if (stack[stack.length - 1] <= -aster) {  // Õ»¶¥ÐÐÐÇ±¬Õ¨
                stack.pop();
            }
        }
        if (alive) {
            stack.push(aster);
        }
    }
    const size = stack.length;
    const ans = new Array(size).fill(0);
    for (let i = size - 1; i >= 0; i--) {
        ans[i] = stack.pop();
    }
    return ans;
};