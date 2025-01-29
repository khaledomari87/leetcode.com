// https://leetcode.com/problems/redundant-connection/solutions/6343118/dfs/

function findRedundantConnection(edges: number[][]) {
    let cycleStart = -1;
    const visited: boolean[] = new Array(edges.length).fill(false);
    const parent: number[] = new Array(edges.length).fill(-1);
    const adjList: number[][] = new Array(edges.length).fill([]).map(() => []);
    for (const edge of edges) {
        adjList[edge[0] - 1].push(edge[1] - 1);
        adjList[edge[1] - 1].push(edge[0] - 1);
    }
    const dfs = (src: number) => {
        visited[src] = true;
        for (const adj of adjList[src]) {
            if (!visited[adj]) {
                parent[adj] = src;
                dfs(adj);
            } else if (adj !== parent[src] && cycleStart === -1) {
                cycleStart = adj;
                parent[adj] = src;
            }
        }
    };
    dfs(0);

    const cycleNodes = new Map<number, number>();
    let node = cycleStart;
    while (true) {
        cycleNodes.set(node, 1);
        node = parent[node];
        if (node === cycleStart) break;
    }
    for (let i = edges.length - 1; i >= 0; i--) {
        if (cycleNodes.get(edges[i][0] - 1) && cycleNodes.get(edges[i][1] - 1)) return edges[i];
    }
    throw new Error('Invalid input!');
}
