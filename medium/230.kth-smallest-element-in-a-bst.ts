// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

import type TreeNode from '../assets/TreeNode.ts';

function kthSmallest(root: TreeNode, k: number): number {
    let output = Number.POSITIVE_INFINITY;
    const dfs = (node: TreeNode | null) => {
        if (!node) return;
        dfs(node.left);
        --k === 0 && (output = node.val);
        k > 0 && dfs(node.right);
    };
    dfs(root);
    return output;
}
