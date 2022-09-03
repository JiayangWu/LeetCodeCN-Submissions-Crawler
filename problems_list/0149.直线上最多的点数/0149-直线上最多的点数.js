var maxPoints = function(points) {
    let len = points.length
    let count = 1
    for(let i =0 ; i < len;i++) { 
        const map = new Map()
        for(let j = i+1; j < len;j++) {
            const kx = (points[j][0] - points[i][0])
            const k = kx===0 ? 'Infinity' : (points[j][1] - points[i][1]) / kx
            if(!map.has(k)) {
                map.set(k, 1)
            }
            const km = map.get(k)
            map.set(k, km+1)
            count = Math.max(count, km+1)
        }
    }
    return count
};