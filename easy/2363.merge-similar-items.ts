// https://leetcode.com/problems/merge-similar-items/solutions/7134153/hash-map/

function mergeSimilarItems(items1: [number, number][], items2: typeof items1) {
    const map1 = new Map(items1);
    items2.forEach((t) => map1.set(t[0], (map1.get(t[0]) || 0) + t[1]));
    return Array.from(map1.entries()).sort((a, b) => a[0] - b[0]);
}
