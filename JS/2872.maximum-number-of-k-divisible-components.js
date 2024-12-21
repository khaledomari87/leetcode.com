// https://leetcode.com/problems/maximum-number-of-k-divisible-components/solutions/6170475/dfs-by-khaled-alomari-yl71/

const maxKDivisibleComponents = (n, edges, values, k) => {
    const map = toMap(edges);
    let output = 0;
    const dfs = (node, parent) => {
        let total = values[node];
        const children = map.get(node);
        if (children) {
            children.forEach((child) => {
                if (child !== parent) {
                    total += dfs(child, node);
                }
            });
        }
        (total % k === 0) && output++;
        return total;
    };
    dfs(0, -1);
    return output;
};
const toMap = (edges) => {
    return edges.reduce((graph, [source, dest]) => {
        const s = graph.get(source);
        if (s) {
            s.push(dest);
        } else {
            graph.set(source, [dest]);
        }
        const d = graph.get(dest);
        if (d) {
            d.push(source);
        } else {
            graph.set(dest, [source]);
        }
        return graph;
    }, new Map());
};
