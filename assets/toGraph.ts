export const toGraph = (edges: number[][], isBidirect: boolean) => {
    const output = edges.reduce((graph, [source, dest]) => {
        graph.get(source)?.push(dest) || graph.set(source, [dest]);
        isBidirect && (graph.get(dest)?.push(source) || graph.set(dest, [source]));
        return graph;
    }, new Map<typeof edges[number][number], typeof edges[number]>());
    return output;
};
