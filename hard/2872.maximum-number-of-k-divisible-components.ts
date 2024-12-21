// https://leetcode.com/problems/maximum-number-of-k-divisible-components/solutions/6170475/dfs-by-khaled-alomari-yl71/

import { toMap } from '../assets/convertGraph.ts';

const maxKDivisibleComponents = (
    n: number,
    edges: [number, number][],
    values: number[],
    k: number,
): number => {
    const map = toMap(edges, true);
    let output = 0;
    const dfs = (node: number, parent: number) => {
        let total = values[node];
        map.get(node)?.forEach((child) => {
            if (child !== parent) {
                total += dfs(child, node);
            }
        });
        (total % k === 0) && output++;
        return total;
    };
    dfs(0, -1);
    return output;
};
