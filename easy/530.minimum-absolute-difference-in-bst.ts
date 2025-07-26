// https://leetcode.com/problems/minimum-absolute-difference-in-bst/solutions/5951280/simple-and-efficient-dfs/

import type TreeNode from '../assets/TreeNode.ts';

function getMinimumDifference(root: TreeNode) {
    let output = Number.POSITIVE_INFINITY;
    let prev = Number.NEGATIVE_INFINITY;
    const dfs = (node: typeof root | null) => {
        if (node) {
            dfs(node.left);
            output = Math.min(output, node.val - prev);
            prev = node.val;
            dfs(node.right);
        }
    };
    dfs(root);
    return output;
}
