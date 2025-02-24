// https://leetcode.com/problems/most-profitable-path-in-a-tree/solutions/6461750/depth-first-search/

function mostProfitablePath(edges: [number, number][], bob: number, amount: number[]) {
    const findPaths = (source: number, time: number, parent?: number) => {
        let maxChild = nInf;
        dist[source] = source === bob ? 0 : n;
        for (const child of tree[source]) {
            if (child == parent) continue;
            maxChild = max(maxChild, findPaths(child, time + 1, source));
            dist[source] = min(dist[source], dist[child] + 1);
        }
        let res = 0;
        if (dist[source] >= time) res += amount[source] >> +(dist[source] === time);
        if (maxChild !== nInf) res += maxChild;
        return res;
    };

    const n = amount.length, nInf = -Infinity, max = Math.max, min = Math.min;
    const dist: number[] = new Array(n).fill(0); // Distance from bob
    const tree: number[][] = new Array<number[]>(n);
    for (let i = 0; i < n; i++) tree[i] = [];
    edges.forEach((pair, i) => {
        tree[pair[0]].push(pair[1]);
        tree[pair[1]].push(pair[0]);
    });
    return findPaths(0, 0);
}
