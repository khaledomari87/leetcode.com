// https://leetcode.com/problems/find-eventual-safe-states/solutions/6322708/dfs/

function eventualSafeNodes(graph: number[][]) {
    function dfs(index: number): boolean {
        if (inStack[index]) return true;
        if (visit[index]) return false;
        visit[index] = inStack[index] = true;
        for (const neighbor of graph[index]) {
            if (dfs(neighbor)) return true;
        }
        return inStack[index] = false;
    }
    const visit: boolean[] = new Array(graph.length).fill(false);
    const inStack: boolean[] = new Array(graph.length).fill(false);
    for (let i = 0; i < graph.length; i++) dfs(i);
    return inStack.reduce((res, val, i) => !val && res.push(i) && res || res, [] as number[]);
}
