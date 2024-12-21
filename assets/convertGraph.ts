export const toMap = (edges: number[][], isBidirect: boolean) => {
    return edges.reduce((graph, pair) => {
        graph.get(pair[0])?.push(pair[1]) || graph.set(pair[0], [pair[1]]);
        isBidirect && (graph.get(pair[1])?.push(pair[0]) || graph.set(pair[1], [pair[0]]));
        return graph;
    }, new Map<typeof edges[number][number], typeof edges[number]>());
};

export const toJson = (edges: [number, number][], isBidirect: boolean) => {
    const output: { [key: number]: number[] } = {};
    for (const e of edges) {
        if (!(e[0] in output)) {
            output[e[0]] = [];
        }
        output[e[0]].push(e[1]);
        if (isBidirect) {
            if (!(e[1] in output)) {
                output[e[1]] = [];
            }
            output[e[1]].push(e[0]);
        }
    }
    return output;
};
