// https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/solutions/6806088/bfs/

function maxCandies(
    status: (0 | 1)[],
    candies: number[],
    keys: number[][],
    containedBoxes: number[][],
    initialBoxes: number[],
) {
    const availableBoxes = new Set(initialBoxes), queue: number[] = [];
    for (const i of initialBoxes) {
        if (status[i]) queue.push(i);
    }
    for (let idx = 0; idx < queue.length; idx++) {
        const currBox = queue[idx];
        for (const key of containedBoxes[currBox]) {
            availableBoxes.add(key);
            if (status[key]) queue.push(key);
        }
        for (const j of keys[currBox]) {
            if (!status[j] && availableBoxes.has(j)) queue.push(j);
            status[j] = 1;
        }
    }
    return queue.reduce((sum, i) => sum + candies[i], 0);
}
