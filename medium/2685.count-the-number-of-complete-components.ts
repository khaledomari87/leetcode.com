// https://leetcode.com/problems/count-the-number-of-complete-components/solutions/6565978/clean-dfs/

function countCompleteComponents(n: number, edges: [number, number][]) {
    const graph = new Map<number, number[]>(), seen = new Set<number>();
    for (let i = 0; i < n; i++) graph.set(i, []);
    edges.forEach((e) => (graph.get(e[0])!.push(e[1]), graph.get(e[1])!.push(e[0])));
    const dfs = (node: number, info: [number, number]) => {
        seen.add(node);
        info[0] += 1, info[1] += graph.get(node)!.length;
        graph.get(node)!.forEach((nei) => !seen.has(nei) && dfs(nei, info));
    };
    let res = 0;
    for (let node = 0; node < n; node++) {
        if (!seen.has(node)) {
            const info: [number, number] = [0, 0];
            dfs(node, info);
            res += +(info[0] * (info[0] - 1) === info[1]);
        }
    }
    return res;
}
