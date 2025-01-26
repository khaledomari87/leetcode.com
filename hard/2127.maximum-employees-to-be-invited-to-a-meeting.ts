// https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/solutions/6332876/editorial-approach-2-topological-sort-to-reduce-non-cyclic-nodes/

function maximumInvitations(favorite: number[]) {
    const n = favorite.length;
    const inDegree: number[] = new Array<number>(n).fill(0);

    // Calculate in-degree for each node
    for (let person = 0; person < n; person++) {
        inDegree[favorite[person]]++;
    }

    // Topological sorting to remove non-cycle nodes
    const q: number[] = [];
    for (let person = 0; person < n; person++) {
        if (inDegree[person] === 0) {
            q.push(person);
        }
    }
    const depth: number[] = new Array<number>(n).fill(1); // Depth of each node

    let i = 0;
    while (i < q.length) {
        const current_node = q[i++];
        const next_node = favorite[current_node];
        depth[next_node] = Math.max(depth[next_node], depth[current_node] + 1);
        inDegree[next_node]--;
        if (inDegree[next_node] === 0) {
            q.push(next_node);
        }
    }

    let longestCycle = 0;
    let twoCycleInvitations = 0;

    // Detect cycles
    for (let person = 0; person < n; person++) {
        if (inDegree[person] === 0) { // Already processed
            continue;
        }

        let cycleLength = 0;
        let current = person;
        while (inDegree[current] !== 0) {
            inDegree[current] = 0; // Mark as visited
            cycleLength++;
            current = favorite[current];
        }

        if (cycleLength === 2) {
            // For 2-cycles, add the depth of both nodes
            twoCycleInvitations += depth[person] + depth[favorite[person]];
        } else {
            longestCycle = Math.max(longestCycle, cycleLength);
        }
    }

    return Math.max(longestCycle, twoCycleInvitations);
}
