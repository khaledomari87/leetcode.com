// https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups/solutions/6347484/bfs-union-find/

function magnificentSets(n: number, edges: number[][]): number {
    const adjList: number[][] = new Array(n).fill([]).map(() => []);
    const parent: number[] = new Array(n).fill(-1);
    const depth: number[] = new Array(n).fill(0);

    // Build the adjacency list and apply Union-Find for each edge
    for (const edge of edges) {
        adjList[edge[0] - 1].push(edge[1] - 1);
        adjList[edge[1] - 1].push(edge[0] - 1);
        _union(edge[0] - 1, edge[1] - 1, parent, depth);
    }

    const numOfGroupsForComponent: { [key: number]: number } = {};

    // For each node, calculate the maximum number of groups for its component
    for (let node = 0; node < n; node++) {
        const numberOfGroups = _getNumberOfGroups(adjList, node, n);
        if (numberOfGroups === -1) {
            return -1; // If invalid split, return -1
        }
        const rootNode = _find(node, parent);
        numOfGroupsForComponent[rootNode] = Math.max(
            numOfGroupsForComponent[rootNode] || 0,
            numberOfGroups,
        );
    }

    // Calculate the total number of groups across all components
    const totalNumberOfGroups = Object.values(numOfGroupsForComponent).reduce(
        (sum, val) => sum + val,
        0,
    );
    return totalNumberOfGroups;
}

// Function to calculate the number of groups for a given component starting from srcNode
function _getNumberOfGroups(adjList: number[][], srcNode: number, n: number): number {
    const nodesQueue: number[] = [];
    const layerSeen: number[] = new Array(n).fill(-1);
    nodesQueue.push(srcNode);
    layerSeen[srcNode] = 0;
    let deepestLayer = 0;

    // Perform BFS to calculate the number of layers (groups)
    let q = 0;
    while (q < nodesQueue.length) {
        const numOfNodesInLayer = nodesQueue.length;
        for (let i = q; i < numOfNodesInLayer; i++) {
            const currentNode = nodesQueue[q];
            for (const neighbor of adjList[currentNode]) {
                // If neighbor hasn't been visited, assign it to the next layer
                if (layerSeen[neighbor] === -1) {
                    layerSeen[neighbor] = deepestLayer + 1;
                    nodesQueue.push(neighbor);
                } else {
                    // If the neighbor is already in the same layer, return -1 (invalid partition)
                    if (layerSeen[neighbor] === deepestLayer) {
                        return -1;
                    }
                }
            }
            q++;
        }
        deepestLayer++;
    }
    return deepestLayer;
}

// Find the root of the given node in the Union-Find structure
function _find(node: number, parent: number[]): number {
    while (parent[node] !== -1) {
        node = parent[node];
    }
    return node;
}

// Union operation to merge two sets
function _union(node1: number, node2: number, parent: number[], depth: number[]): void {
    node1 = _find(node1, parent);
    node2 = _find(node2, parent);

    // If both nodes already belong to the same set, no action needed
    if (node1 === node2) {
        return;
    }

    // Union by rank (depth) to keep the tree balanced
    if (depth[node1] < depth[node2]) {
        [node1, node2] = [node2, node1];
    }
    parent[node2] = node1;

    // If the depths are equal, increment the depth of the new root
    if (depth[node1] === depth[node2]) {
        depth[node1]++;
    }
}
