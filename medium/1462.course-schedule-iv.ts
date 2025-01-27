// https://leetcode.com/problems/course-schedule-iv/solutions/6334281/floyd-warshall/

function checkIfPrerequisite(n: number, preq: [number, number][], quer: [number, number][]) {
    const graph: boolean[][] = new Array(n);
    for (let i = 0; i < n; i++) graph[i] = new Array(n);
    preq.forEach((v) => graph[v[0]][v[1]] = true);

    // Floyd-Warshall algorithm to compute transitive closure
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            if (graph[i][k]) { // Skip if no path from i to k
                for (let j = 0; j < n; j++) {
                    if (graph[i][k] && graph[k][j]) { // If i -> k and k -> j, then i -> j
                        graph[i][j] = true;
                    }
                }
            }
        }
    }

    const res: boolean[] = new Array(quer.length);
    quer.forEach((q, i) => res[i] = Boolean(graph[q[0]][q[1]]));
    return res;
}
