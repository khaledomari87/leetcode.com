// https://leetcode.com/problems/find-minimum-diameter-after-merging-two-trees/solutions/6186334/good-enough/

function minimumDiameterAfterMerge(edges1: [number, number][], edges2: typeof edges1): number {
    const calcMaxDiameter = (tree: ReturnType<typeof toMap>, node: number, parent: number) => {
        let max = 0;
        const backtrack = (tree: ReturnType<typeof toMap>, node: number, parent: number) => {
            const max2Neighbors: [number, number] = [0, 0];
            for (const nei of tree[node]) {
                if (nei !== parent) {
                    const neiDepth = backtrack(tree, nei, node);
                    // mimicking max heap, keep the largest 2 neighbors
                    neiDepth > max2Neighbors[1] && (max2Neighbors[1] = neiDepth);
                    if (neiDepth > max2Neighbors[0]) {
                        max2Neighbors[1] = max2Neighbors[0];
                        max2Neighbors[0] = neiDepth;
                    }
                }
            }
            const diameter = 1 + max2Neighbors.reduce((a, b) => a + b);
            max = Math.max(max, diameter);
            return max2Neighbors[0] + 1;
        };
        backtrack(tree, node, parent);
        return max;
    };
    const tree1 = toMap(edges1);
    const tree2 = toMap(edges2);
    const maxDiameter1 = tree1.length === 0 ? 0 : calcMaxDiameter(tree1, 0, -1);
    const maxDiameter2 = tree2.length === 0 ? 0 : calcMaxDiameter(tree2, 0, -1);

    return Math.max(
        maxDiameter1 - 1,
        maxDiameter2 - 1,
        Math.floor(maxDiameter1 / 2) + Math.floor(maxDiameter2 / 2) + 1,
    );
}
const toMap = (edges: [number, number][]) => {
    return edges.reduce((graph, pair) => {
        graph[pair[0]]?.push(pair[1]) || (graph[pair[0]] = [pair[1]]);
        graph[pair[1]]?.push(pair[0]) || (graph[pair[1]] = [pair[0]]);
        return graph;
    }, new Array<number[]>());
};
