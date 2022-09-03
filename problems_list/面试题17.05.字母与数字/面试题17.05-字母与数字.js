var findLongestSubarray = function (array) {
    let sum = 0
    const map = new Map()
    let front = 0, last = 0
    map.set(0, -1)
    array.forEach((item, index) => {
        sum += (item[0] >= 'A' && item[0] <= 'z' ? 1 : -1)
        if (map.has(sum)) {
            if (index - map.get(sum) > last - front) {
                last = index
                front = map.get(sum)
            }
        } else {
            map.set(sum, index)
        }
    })
    return array.slice(front + 1, last + 1)
};