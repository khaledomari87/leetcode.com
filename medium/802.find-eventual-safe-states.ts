// https://leetcode.com/problems/find-eventual-safe-states/solutions/6322708/dfs/

function eventualSafeNodes(graph: number[][]) {
    function dfs(i: number): boolean {
        if (safe[i] !== undefined) return safe[i];
        safe[i] = false;
        for (const neighbor of graph[i]) {
            if (!dfs(neighbor)) return false;
        }
        return safe[i] = true;
    }
    const safe: boolean[] = new Array(graph.length);
    return graph.reduce((res, _, i) => dfs(i) && res.push(i) && res || res, [] as number[]);
}
