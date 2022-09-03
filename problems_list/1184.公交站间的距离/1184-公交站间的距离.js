var distanceBetweenBusStops = function(distance, start, destination) {
    if (start > destination) {
        [start, destination]=[destination, start];
    }
    let sum1 = 0, sum2 = 0;
    for (let i = 0; i < distance.length; i++) {
        if (i >= start && i < destination) {
            sum1 += distance[i];
        } else {
            sum2 += distance[i];
        }
    }
    return Math.min(sum1, sum2);
};