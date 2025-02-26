// https://leetcode.com/problems/minimum-distance-between-bst-nodes/solutions/6471609/dfs/

import type TreeNode from '../assets/TreeNode.ts';

function minDiffInBST(root: TreeNode) {
    let res = Number.POSITIVE_INFINITY;
    let prev = Number.NEGATIVE_INFINITY;
    const dfs = (node: typeof root | null) => {
        if (node) {
            dfs(node.left);
            res = Math.min(res, node.val - prev);
            prev = node.val;
            dfs(node.right);
        }
    };
    dfs(root);
    return res;
}
