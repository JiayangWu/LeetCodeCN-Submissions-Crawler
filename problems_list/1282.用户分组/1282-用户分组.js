var groupThePeople = function(groupSizes) {
    const groups = new Map();
    const n = groupSizes.length;
    for (let i = 0; i < n; i++) {
        const size = groupSizes[i];
        if (!groups.has(size)) {
            groups.set(size, []);
        }
        groups.get(size).push(i);
    }
    const groupList = [];
    for (const [size, people] of groups.entries()) {
        const groupCount = Math.floor(people.length / size);
        for (let i = 0; i < groupCount; i++) {
            const group = [];
            const start = i * size;
            for (let j = 0; j < size; j++) {
                group.push(people[start + j]);
            }
            groupList.push(group);
        }
    }
    return groupList;
};