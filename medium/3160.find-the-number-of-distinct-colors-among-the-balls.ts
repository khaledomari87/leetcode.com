// https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/solutions/6388289/map-and-array/

function queryResults(limit: number, queries: [number, number][]) {
    const colors = new Array<number>(limit + 1);
    const map = new Map<number, number>();
    const res = new Array<number>(queries.length);
    queries.forEach((query, i) => {
        if (colors[query[0]] !== undefined) {
            const cnt = map.get(colors[query[0]])! - 1;
            cnt === 0 ? map.delete(colors[query[0]]) : map.set(colors[query[0]], cnt);
        }
        res[i] = map.set(colors[query[0]] = query[1], (map.get(query[1]) || 0) + 1).size;
    });
    return res;
}
