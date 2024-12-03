// https://leetcode.com/problems/find-champion-ii/solutions/6085278/optimum-solution-2ms/

function findChampion(n: number, edges: [number, number][]): number {
    const nodesWithParents = new Array<boolean>(n);
    for (const [, dist] of edges) nodesWithParents[dist] = true;

    let output = -1;
    for (let champ = 0; champ < n; champ++) {
        if (!nodesWithParents[champ]) {
            if (output > -1) return -1; // We already have another parentless node
            output = champ;
        }
    }
    return output;
}
