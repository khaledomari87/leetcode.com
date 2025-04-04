// https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/solutions/6614062/dfs/

import type TreeNode from '../assets/TreeNode.ts';

function lcaDeepestLeaves(root: TreeNode | null): typeof root {
    const res = { node: root, depth: 0 };
    const dfs = (node: typeof root, depth: number): number => {
        if (!node) return depth - 1;
        const left = dfs(node.left, depth + 1);
        const right = dfs(node.right, depth + 1);
        const maxDepth = Math.max(left, right);
        if (left === right && maxDepth >= res.depth) {
            res.depth = maxDepth;
            res.node = node;
        }
        return maxDepth;
    };
    dfs(root, 0);
    return res.node;
}
