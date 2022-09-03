/**
 * @param {number[][]} positions
 * @return {number[]}
 */
var fallingSquares = function(positions) {
    const res = []
    const range = []
    let max = -Infinity
    for (const [pos, width] of positions) {
        const m = getMax(pos, width)
        if (m) {
            max = Math.max(max, m + width)
            range.push([pos, pos + width, m + width])
        } else {
            range.push([pos, pos + width, width])
            max = Math.max(max, width)
        }
        res.push(max)
    }

    function getMax(s, h) {
        const e = s + h
        let m = 0;
        for (const [start, end, max] of range) {
            if (!(e <= start || s >= end)) {
                m = Math.max(m, max)
            }
        }
        return m
    }

    return res
};