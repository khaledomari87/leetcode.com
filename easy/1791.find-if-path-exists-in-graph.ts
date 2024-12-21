// https://leetcode.com/problems/find-if-path-exists-in-graph/solutions/6033972/dfs/
import { toMap } from '../assets/convertGraph.ts';

const validPath = (n: number, edges: number[][], source: number, destination: number): boolean => {
    const graph = toMap(edges, true);
    const seen = new Set([source]);

    const dfs = (node: number) => {
        if (node === destination) return true;
        for (const d of graph.get(node)!) {
            if (!seen.has(d)) {
                seen.add(d);
                if (dfs(d)) return true;
            }
        }
        return false;
    };
    return dfs(source);
};
