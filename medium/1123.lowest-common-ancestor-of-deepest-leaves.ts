// https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/solutions/6614062/dfs/

import type TreeNode from '../assets/TreeNode.ts';

function lcaDeepestLeaves(root: TreeNode | null) {
    const dfs = (node: typeof root, depth: number) => {
        if (!node) return depth;
        const left = dfs(node.left, ++depth);
        const right = dfs(node.right, depth);
        const maxDepth = Math.max(left, right);
        if (left === right && maxDepth >= res.depth) {
            res.depth = maxDepth, res.node = node;
        }
        return maxDepth;
    };
    const res = { node: root, depth: 0 };
    dfs(root, 0);
    return res.node;
}
