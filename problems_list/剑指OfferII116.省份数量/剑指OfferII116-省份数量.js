var findCircleNum = function(isConnected) {
    const cities = isConnected.length;
    const parent = new Array(cities).fill(0)
                                       .map((element, index) => index);

    for (let i = 0; i < cities; i++) {
        for (let j = i + 1; j < cities; j++) {
            if (isConnected[i][j] == 1) {
                union(parent, i, j);
            }
        }
    }
    let provinces = 0;
    parent.forEach((element, index) => {
        if (element === index) {
            provinces++;
        }
    });

    return provinces;
};

const union = (parent, index1, index2) => {
    parent[find(parent, index1)] = find(parent, index2);
}

const find = (parent, index) => {
    if (parent[index] !== index) {
        parent[index] = find(parent, parent[index]);
    }
    return parent[index];
}